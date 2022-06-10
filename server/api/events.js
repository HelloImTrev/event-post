const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const router = require("express").Router();
const {
  models: { Event, User, EventSubscription },
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

router.get("/search", async (req, res, next) => {
  try {
    const { keyword, location, date } = req.query;
    const d = new Date(date);
    const fullDate =
      d.getFullYear() + "-" + (d.getMonth() > 8 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1)) + "-" + (d.getDate() > 9 ? d.getDate() : "0" + d.getDate());
    const events = await Event.findAll({
      where: {
        name: {
          [Op.iLike]: "%" + keyword + "%",
        },
        [Op.or]: [
          {
            venueCity: {
              [Op.iLike]: "%" + location + "%",
            },
          },
          {
            venueState: {
              [Op.iLike]: "%" + location + "%",
            },
          },
        ],
        start: {
          [Op.gte]: fullDate,
        },
      },
    });
    res.json(events);
  } catch (err) {
    next(err);
  }
});

// this is myEvents slice in redux store
router.get("/user/me", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const subscribedEvents = await EventSubscription.findAll({
      where: { userId: user.id },
    }).then(function (events) {
      return events.map((event) => {
        return event.eventId;
      });
    });

    const events = await Event.findAll({
      where: {
        [Op.or]: [{ ownerId: user.id }, { id: { [Op.in]: subscribedEvents } }],
      },
    });
    res.send(events);
  } catch (err) {
    next(err);
  }
});

// user subscribes to an event with this route (event is added to myEvents redux slice of state)
// test with curl -X POST localhost:8080/api/events/subscribe/1 -H "Authorization: <token>"
router.post("/subscribe/:id", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const duplicate = await EventSubscription.findOne({
      where: {
        userId: user.id,
        eventId: req.params.id,
      },
    });
    if (!duplicate) {
      res.status(201).send(
        await EventSubscription.create({
          userId: user.id,
          eventId: req.params.id,
        })
      );
    }
  } catch (err) {
    next(err);
  }
});

// with this rute a user unsubscribes from an event
router.put("/unsubscribe/:id", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const event = await EventSubscription.findOne({
      where: {
        userId: user.id,
        eventId: req.params.id,
      },
    });
    if (event) {
      await event.destroy();
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
