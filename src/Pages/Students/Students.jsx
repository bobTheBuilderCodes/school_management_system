import { Button, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import StudentsList from "../../components/StudentsList/StudentsList";
import "./Students.css";

const Students = () => {
  return (
    <div className="student">
      <Navbar />
      <div className="students_container">
        <StudentsList />
        <Divider />
      </div>
    </div>
  );
};

export default Students;
