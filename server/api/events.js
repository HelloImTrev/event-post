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
      d.getFullYear() +
      "-" +
      (d.getMonth() > 8 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1)) +
      "-" +
      (d.getDate() > 9 ? d.getDate() : "0" + d.getDate());
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
          {
            venueStateCode: {
              [Op.eq]: location,
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

// this route will return all the events that a user is subscribed to
router.get("/subscribe/me", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const subscribedEvents = await EventSubscription.findAll({
      where: { userId: user.id },
    });
    res.send(subscribedEvents);
  } catch (err) {
    next(err);
  }
});

// user subscribes to an event with this route (event is added to eventSubscription redux slice of state)
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

// with this route a user unsubscribes from an event (eventSubscription redux)
router.delete("/unsubscribe/:id", async (req, res, next) => {
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

// this route could be possibly used in the future, its not used right now
router.put("/unsubscribe", async (req, res, next) => {
  try {
    const subscribedEvents = await EventSubscription.findAll();
    for (const subscription of subscribedEvents) {
      await subscription.destroy();
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

//**************************** POST EVENT ROUTES *********************************************** */
// curl -X POST -d '{"ownerId":3,"name":"smartConcert"}' localhost:8080/api/events/user/me -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjU1NTcwNjUxfQ.L7kM5FVtXVOdzoHcikc5MT8SLqW199aumiskeX8RrT8" -H "Content-Type: application/json"
// this route will post an event to /api/events/user/me
router.post("/user/me", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const newEvent = await Event.createMyEvent(user.id, req.body);

    res.status(201).send(newEvent);
  } catch (err) {
    next(err);
  }
});

// this route will let the user edit the event that they post
// /api/events/user/me/:eventId
router.put("/user/me/:eventId", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);

    // make sure event id is sent as id// req.body.id??
    const event = await Event.updateMyEvent(
      req.params.eventId,
      req.body.newBody
    );

    if (user.id !== event.ownerId) {
      res.sendStatus(401); // unauthorized
    }

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

router.delete("/user/me/:eventId", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);

    const event = await Event.findByPk(req.params.id);

    if (user.id !== event.ownerId) {
      res.sendStatus(401); // unauthorized
    }

    if (event) {
      await event.destroy();
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
