import { Typography } from "@mui/material";
import React from "react";
import "./HealthInformation.css";

const HealthInformation = () => {
  return (
    <div>
      <div className="information">
        {" "}
        <Typography>Blood Group</Typography>
        <input type="checkbox" />
      </div>
      <div className="information">
        {" "}
        <Typography>Blood Group</Typography>
        <input type="checkbox" />
      </div>
      <div className="information">
        {" "}
        <Typography>Blood Group</Typography>
        <input type="checkbox" />
      </div>
      {/* <div>
        {" "}
        <Typography>Blood Group</Typography>
        <input type="checkbox" />
      </div> */}
    </div>
  );
};

export default HealthInformation;
