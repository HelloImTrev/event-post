const router = require("express").Router();
const {
  models: { Event, User },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const events = await Event.findAll({});

    res.json(events);
  } catch (err) {
    next(err);
  }
});

router.get("/user/me", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const events = await Event.findAll({
      where: {
        ownerId: user.id,
        //also have to include events which user subscribes to
      },
    });
    res.send(events);
  } catch (err) {
    next(err);
  }
});
