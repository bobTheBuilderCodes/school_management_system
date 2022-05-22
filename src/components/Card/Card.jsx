import { Paper, Typography } from "@mui/material";
import React from "react";
import "./Card.css";

const Card = ({ title, number, details_one, details_two }) => {
  return (
    <Paper elevation={2} className="card_container">
      <Typography color={"GrayText"}>{title}</Typography>
      <Typography
        fontSize={50}
        fontWeight={"medium"}
        color={"InactiveCaptionText"}
      >
        {number}
      </Typography>
      <div className="break_down">
        <Typography color={"InactiveCaptionText"}>{details_one}</Typography>
        <Typography color={"InactiveCaptionText"} style={{ marginTop: "5px" }}>
          {details_two}
        </Typography>
      </div>
    </Paper>
  );
};

export default Card;
