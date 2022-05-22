import "./StaffList.css";
import React from "react";
import Staff from "../Staff/Staff";
import { Box } from "@mui/system";

const StaffList = () => {
  return (
    <Box className="staffsList_container">
      <Staff />
      <Staff />
      <Staff />
    </Box>
  );
};

export default StaffList;
