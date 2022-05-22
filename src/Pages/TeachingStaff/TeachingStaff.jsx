import { Typography } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchAndAddStaff from "../../components/SearchAndAddStaff/SearchAndAddStaff";
import StaffList from "../../components/StaffList/StaffList";
import "./TeachingStaff.css";
const TeachingStaff = () => {
  return (
    <div className="staff">
      <Navbar />
      <div className="teachers_container">
        <SearchAndAddStaff />
        <StaffList />
      </div>
    </div>
  );
};

export default TeachingStaff;
