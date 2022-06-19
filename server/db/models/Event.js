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
  return new Date();
};

Event.generateEndDate = () => {
  let today = new Date();
  today.setHours(today.getHours() + 3);
  return today.toISOString();
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

module.exports = Event;
