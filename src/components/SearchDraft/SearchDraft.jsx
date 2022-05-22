import { Button, TextField } from "@mui/material";
import React from "react";
import "./SearchDraft.css";

const SearchDraft = () => {
  return (
    <div className="searchAndAddDraft">
      <div>
        <form>
          <TextField
            size="small"
            variant="filled"
            style={{ width: 300 }}
            type="search"
            placeholder="Search by keywords"
            label="Search previous drafts"
            autoComplete="true"
            autoFocus
          />
        </form>
      </div>
      {/* <div>
        <p>Yes</p>
      </div> */}
    </div>
  );
};

export default SearchDraft;
