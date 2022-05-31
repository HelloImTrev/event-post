import React from "react";

// router
import { Link } from "react-router-dom";

//MUI
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const Slides = () => {
  var items = [
    {
      image: "/images/concert2.jpg",
      name: "concerts",
    },
    {
      image: "/images/sports2.jpg",
      name: "sports",
    },
    {
      image: "/images/cooking.jpg",
      name: "cooking",
    },
    {
      image: "/images/yoga.jpg",
      name: "yoga",
    },
    {
      image: "/images/dinner.jpg",
      name: "dinner",
    },
  ];
  return (
    <div style={{ zIndex: "-1", width: "100%", height: "100%" }}>
      <Carousel animation="slide" indicators={false} sx={{ height: "100%" }}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

function Item({ item }) {
  return (
    <Paper className="item" sx={{ height: "80%", width: "100%" }}>
      <img
        className="imageCarousel"
        src={item.image}
        alt={item.name}
        style={{ width: "100%", height: "600px", display: "block"}}
      />
    </Paper>
  );
}

export default Slides;
