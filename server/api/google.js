const router = require("express").Router();
const axios = require("axios");
const {
  models: { User },
} = require("../db");
module.exports = router;

router.get("/data/:place_id", async (req, res, next) => {
  try {
    var config = {
      method: "get",
      url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.params.place_id}&key=${process.env.GOOGLE_API_KEY}`,
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

    res.json(data);
  } catch (err) {
    next(err);
  }
});
