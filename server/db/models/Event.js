const Sequelize = require("sequelize");
const db = require("../db");

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

module.exports = Event;
