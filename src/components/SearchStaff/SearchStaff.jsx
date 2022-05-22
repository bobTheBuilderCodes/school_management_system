import { Button, TextField } from "@mui/material";
import React from "react";
import "./SearchStaff.css";

const SearchStaff = () => {
  return (
    <div className="searchStaff">
      <div>
        <form>
          <TextField
            size="small"
            variant="filled"
            style={{ width: 300 }}
            type="search"
            placeholder="Search Staff by name"
            label="Enter staff name"
            autoComplete="true"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default SearchStaff;
