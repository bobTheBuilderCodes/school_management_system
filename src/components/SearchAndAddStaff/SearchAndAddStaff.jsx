import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import AddStaffModal from "../AddStaffModal/AddStaffModal";
import SearchStaff from "../SearchStaff/SearchStaff";

import "./SearchAndAddStaff.css";

const SearchAndAddStaff = () => {
  return (
    <div className="searchAndAddStaff">
      <div>
        <FormControl size="small">
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            style={{ width: 200 }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"Class"}
            label="Class"
            // onChange={handleChange}
          >
            <MenuItem value={30}>Teaching</MenuItem>
            <MenuItem value={30}>Non-Teaching</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <SearchStaff />
      </div>

      <div style={{ display: "flex-end, backgroundColor: green" }}>
        {/* <Button variant="contained" onClick={handleOpen}>
          Add Student
        </Button> */}
        <AddStaffModal />
      </div>
    </div>
  );
};

export default SearchAndAddStaff;
