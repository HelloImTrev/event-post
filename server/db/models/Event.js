const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");
require("dotenv").config();

const Event = db.define("event", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  start: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  end: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  category: {
    type: Sequelize.ENUM(["Sports", "Music", "Arts & Theatre", "Film"]),
    allowNull: false,
  },
  images: {
    type: Sequelize.TEXT,
    get: function () {
      return JSON.parse(this.getDataValue("images"));
    },
    set: function (val) {
      return this.setDataValue("images", JSON.stringify(val));
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
  venueName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  venueLocale: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  venuePostCode: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  venueCity: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  venueState: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  venueStateCode: {
    type: Sequelize.STRING,
  },
  venueCountry: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  venueCountryCode: {
    type: Sequelize.STRING,
  },
  venueAddress: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  venueLongitude: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  venueLatitude: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0.0,
    },
  },
});

Event.generateRandPrice = () => {
  return parseFloat((Math.random() * 100).toFixed(2)) + 30;
};

Event.generateStartDate = () => {
  let today = new Date();
  let laterDate = new Date();
  laterDate.setMonth(laterDate.getMonth() + 3);
  let newDate = new Date(+today + Math.random() * (laterDate - today));
  newDate.setHours(10 + Math.floor(Math.random() * 12));
  newDate.setMinutes(Math.random() < 0.5 ? 0 : 30);
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);
  return newDate;
};

Event.generateEndDate = (startDate) => {
  let endDate = new Date(startDate);
  endDate.setMinutes(
    endDate.getMinutes() + 60 + Math.floor(Math.random() * 5) * 30
  );
  return endDate.toISOString();
};

Event.getNearbyPlaces = async (lat, lng, keyword) => {
  var config = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=50000&keyword=${keyword}&key=${process.env.GOOGLE_API_KEY}`,
    headers: {},
  };

  var data;
  await axios(config)
    .then(function (response) {
      // console.log(response.data);
      data = response.data;
    })
    .catch(function (error) {
      console.log(err);
    });

  return data;
};

Event.createMyEvent = async function (
  // name,
  // start,
  // category,
  // images,
  // description,
  // venueName,
  // venueLocale,
  // venuePostCode,
  // venueCity,
  // venueState,
  // venueStateCode,
  // venueCountry,
  // venueCountryCode,
  // venueAddress,
  // venueLongitude,
  // venueLatitude,
  // ownerId,
  // price,
  ownerId,
  body
) {
  try {
    //console.log(body);
    //console.log(body.name);
    const duplicate = await Event.findOne({
      where: {
        name: body.name,
        //start: body.start,
        //vanueName: body.venueName,
        ownerId: ownerId,
      },
    });
    //console.log(duplicate);
    if (!duplicate) {
      console.log("Creating");
      await Event.create({
        name: body.name,
        // start: body.start,
        // category: body.category,
        // images: body.images,
        // description: body.description,
        // venueName: body.venueName,
        // venueLocal: body.venueLocale,
        // venuePostCode: body.venuePostCode,
        // venueCity: body.venueCity,
        // venueState: body.venueState,
        // venueStateCode: body.venueStateCode,
        // venueCountry: body.venueCountry,
        // venueCountryCode: body.venueCountryCode,
        // venueAddress: body.venueAddress,
        // venueLongitude: body.venueLongitude,
        // venueLatitude: body.venueLatitude,
        ownerId: ownerId,
        // price: body.price,
      });
    }
  } catch (err) {
    console.log(err);
    const error = Error("error in Event.createMyEvent");
    error.status = 500;
    throw error;
  }
};

Event.updateMyEvent = async function (eventId, body) {
  try {
    // event should be {}
    const event = await Event.findByPk(eventId);

    if (!event) {
      res.sendStatus(404);
    }

    // update the current body of the event with the new body
    if (event) {
      await event.update({ ...event, ...body });
    }
    // req.body = {name: "new name", start: "new start"}, only update these two fields
    //await Event.update({ ...body });
  } catch (err) {
    const error = Error("error in Event.updateMyEvent");
    console.log(error);
    error.status = 500;
    throw error;
  }
};

module.exports = Event;
