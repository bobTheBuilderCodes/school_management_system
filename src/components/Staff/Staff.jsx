import { Delete, Edit } from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";
import React from "react";
import "./Staff.css";
const Staff = () => {
  return (
    <div>
      <div className="staffContainer">
        <div>
          <Typography>1</Typography>
        </div>
        <div>
          <Typography>John Kwame Dwamena</Typography>
        </div>
        <div>
          {" "}
          <Typography>Male</Typography>
        </div>
        <div>
          {" "}
          <Typography>JHS 2</Typography>
        </div>
        <div>
          {" "}
          <Typography>0200022942</Typography>
        </div>
        <div style={{ color: "#666" }}>
          <Edit color="GrayText" />
          <Delete style={{ marginLeft: 10 }} />
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Staff;
