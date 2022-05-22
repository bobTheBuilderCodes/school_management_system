import { Typography } from "@mui/material";
import React from "react";
import AddNewDraft from "../../components/AddNewDraft/AddNewDraft";
import DraftAnnouncement from "../../components/DraftAnnouncement/DraftAnnouncement";
import Navbar from "../../components/Navbar/Navbar";
import SearchAndAddDraft from "../../components/SearchDraft/SearchDraft";
import "./Announcement.css";

const Announcement = () => {
  return (
    <div className="announcement">
      <Navbar />
      <SearchAndAddDraft />
      <div className="announcement_container">
        <DraftAnnouncement draftTitle={"Hi"} draftContent="This is it" />
        <DraftAnnouncement />
        <DraftAnnouncement />
        <DraftAnnouncement />
        <DraftAnnouncement />
        <DraftAnnouncement />
        <DraftAnnouncement />
      </div>
      <div
        style={{
          position: "sticky",
          bottom: "16px",
          right: "16px",
          float: "right",
        }}
      >
        <AddNewDraft />
      </div>
    </div>
  );
};

export default Announcement;
