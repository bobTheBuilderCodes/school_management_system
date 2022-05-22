import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import StudentDetails from "../../components/StudentDetails/StudentDetails";
import StudentPersonalInformation from "../../components/StudentPersonalInformation/StudentPersonalInformation";
import "./StudentProfile.css";

const StudentProfile = () => {
  let params = useParams();
  useEffect(() => {
    console.log("params ", params);
  }, []);

  return (
    <div className="student">
      <Navbar />
      <div className="studentProfile_container">
        <StudentPersonalInformation />
        <StudentDetails />
      </div>
    </div>
  );
};

export default StudentProfile;
