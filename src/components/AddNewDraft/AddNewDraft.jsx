import { Add } from "@mui/icons-material";
import "./AddNewDraft.css";
import React from "react";
import AddNewDraftModal from "../AddNewDraftModal/AddNewDraftModal";

const AddNewDraft = () => {
  return (
    <div className="addNewDraft_container">
      <AddNewDraftModal />
    </div>
  );
};

export default AddNewDraft;
