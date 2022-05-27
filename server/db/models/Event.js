const Sequelize = require("sequelize");
const db = require("../db");


const Event = db.define("event", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  startDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  startTime: {
    type: Sequelize.TIME,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  images: {
    type: Sequelize.TEXT,
    get: function() {
      return JSON.parse(this.getDataValue('images'));
    },
    set: function(val) {
      return this.setDataValue('images', JSON.stringify(val));
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  venueName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  venueLocale: {
    type: Sequelize.STRING,
    allowNull: false
  },
  venuePostCode: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  venueCity: {
    type: Sequelize.STRING,
    allowNull: false
  },
  venueState: {
    type: Sequelize.STRING,
    allowNull: false
  },
  venueCountry: {
    type: Sequelize.STRING,
    allowNull: false
  },
  venueAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  venueLongitude: {
    type: Sequelize.STRING,
    allowNull: false
  },
  venueLatitutde: {
    type: Sequelize.STRING,
    
  }
});


module.exports = Event;

