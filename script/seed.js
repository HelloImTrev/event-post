"use strict";

const {
  db,
  models: { User, Event },
} = require("../server/db");
const events = require("./seedData");
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
  ]);

  await Event.create({
    name: events.name,
    startDate: events.dates.start.localDate,
    startTime: events.dates.start.localTime,
    category: events.classifications[0].segment.name,
    images: events.images,
    description: "",
    venueName: events._embedded.venues[0].name,
    venueLocale: events._embedded.venues[0].locale,
    venuePostCode: events._embedded.venues[0].postalCode * 1,
    venueCity: events._embedded.venues[0].city.name,
    venueState: events._embedded.venues[0].state.name,
    venueCountry: events._embedded.venues[0].country.name,
    venueAddress: events._embedded.venues[0].address.line1,
    venueLongitude: events._embedded.venues[0].location.longitude,
    venueLatitude: events._embedded.venues[0].location.latitude,
  });

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);

  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
