"use strict";

const {
  db,
  models: { User, Event },
} = require("../server/db");
const sportEvents = require("./sportEvents");
const musicEvents = require("./musicEvents");
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users

  const chrisi = await User.create({
    username: "chrisi",
    password: "123",
    firstName: "Chrisi",
    lastName: "Smith",
    email: "chrisi@gmail.com",
  });

  const cody = await User.create({
    username: "cody",
    password: "123",
    firstName: "Cody",
    lastName: "The Coder",
    email: "cody@gmail.com",
  });
  const murphy = await User.create({
    username: "murphy",
    password: "123",
    firstName: "Murphy",
    lastName: "Smurphy",
    email: "murph@gmail.com",
  });
  const bob = await User.create({
    username: "bob",
    password: "123",
    firstName: "Bob",
    lastName: "Marley",
    email: "bob@gmail.com",
  });

  const userIds = [chrisi.id, cody.id, murphy.id, bob.id];

  //***********************************************************************Seeding events */

  for (const [i, eventItem] of sportEvents.entries()) {
    // ticketmaster data doesnt have end time
    let end = new Date(eventItem.dates.start.dateTime);
    end.setHours(end.getHours() + 2);
    end = end.toISOString();

    await Event.create({
      name: eventItem.name,
      start: eventItem.dates.start.dateTime,
      end: end,
      category: eventItem.classifications[0].segment.name,
      images: eventItem.images,
      description: lorem.generateParagraphs(4),
      venueName: eventItem._embedded.venues[0].name,
      venueLocale: eventItem._embedded.venues[0].locale,
      venuePostCode: eventItem._embedded.venues[0].postalCode * 1,
      venueCity: eventItem._embedded.venues[0].city.name,
      venueState: eventItem._embedded.venues[0].state.name,
      venueStateCode: eventItem._embedded.venues[0].state.stateCode,
      venueCountry: eventItem._embedded.venues[0].country.name,
      venueCountryCode: eventItem._embedded.venues[0].country.countryCode,
      venueAddress: eventItem._embedded.venues[0].address.line1,
      venueLongitude: eventItem._embedded.venues[0].location.longitude,
      venueLatitude: eventItem._embedded.venues[0].location.latitude,
      ownerId: userIds[i % userIds.length],
      price: eventItem.priceRanges ? eventItem.priceRanges[0].min : await Event.generateRandPrice(),
    });
  }
  console.log(`*********************************** ${sportEvents.length} Sport Events Seeded`);

  for (const [i, eventItem] of musicEvents.entries()) {
    // ticketmaster data doesnt have end time
    let end = new Date(eventItem.dates.start.dateTime);
    end.setHours(end.getHours() + 2);
    end = end.toISOString();

    await Event.create({
      name: eventItem.name,
      start: eventItem.dates.start.dateTime,
      end: end,
      category: eventItem.classifications[0].segment.name,
      images: eventItem.images,
      description: lorem.generateParagraphs(4),
      venueName: eventItem._embedded.venues[0].name,
      venueLocale: eventItem._embedded.venues[0].locale,
      venuePostCode: eventItem._embedded.venues[0].postalCode * 1,
      venueCity: eventItem._embedded.venues[0].city.name,
      venueState: eventItem._embedded.venues[0].state.name,
      venueStateCode: eventItem._embedded.venues[0].state.stateCode,
      venueCountry: eventItem._embedded.venues[0].country.name,
      venueCountryCode: eventItem._embedded.venues[0].country.countryCode,
      venueAddress: eventItem._embedded.venues[0].address.line1,
      venueLongitude: eventItem._embedded.venues[0].location.longitude,
      venueLatitude: eventItem._embedded.venues[0].location.latitude,
      ownerId: userIds[i % userIds.length],
      price: eventItem.priceRanges ? eventItem.priceRanges[0].min : await Event.generateRandPrice(),
    });
  }
  console.log(`*********************************** ${musicEvents.length} Sport Events Seeded`);

  console.log(`seeded successfully`);
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
