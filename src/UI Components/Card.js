import React, { useState } from "react";
import "../Styles/card.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const card = ({ projectDetails }) => {

  return (
    <div className="card-list">
      {projectDetails.map((item, index) => (
        <Card key={index} className="card">
          <CardContent className="card__content-container">
            <div className="card__image-container">
              <img src={item.image}></img>
            </div>
            <div className="card__data-container">
              <Typography variant="h5" component="div" className="card__name">
                {item.name}
              </Typography>
              <Typography variant="h5" component="div" className="card__email">
                {item.email}
              </Typography>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default card;
