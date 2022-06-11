const Sequelize = require("sequelize");
const db = require("../db");

const EventSubscription = db.define("event_subscription");

module.exports = EventSubscription;

// select * from event_subscriptions;
