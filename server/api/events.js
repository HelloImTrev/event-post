const router = require("express").Router();
const { models: { Event } } = require('../db');
module.exports = router;

router.get('/', async(req, res, next) => {
  try {
    const events = await Event.findAll({});

    res.json(events);
  } catch(err) {
    next(err);
  }
})
