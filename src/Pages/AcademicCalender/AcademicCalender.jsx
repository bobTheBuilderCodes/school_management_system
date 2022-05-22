import { Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SchoolActivities from "../../components/SchoolActivities/SchoolActivities";
import SchoolCalender from "../../components/SchoolCalender/SchoolCalender";
import "./AcademicCalender.css";

const AcademicCalender = () => {
  return (
    <div>
      <Navbar />
      <div className="academicCalender_container">
        <SchoolCalender />
        <SchoolActivities />
      </div>
    </div>
  );
};

export default AcademicCalender;
