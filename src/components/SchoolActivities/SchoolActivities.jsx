import { Close } from "@mui/icons-material";

import { Divider, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./SchoolActivities.css";

const SchoolActivities = () => {
  const [activity, setActivity] = useState("");

  const [schoolActivities, setSchoolActivities] = useState([]);

  console.log(4 + 3);

  console.log(schoolActivities);

  const submitHandler = (e) => {
    e.preventDefault();

    setSchoolActivities([...schoolActivities, activity]);
    setActivity("");
  };

  useEffect(() => {
    const data = window.localStorage.getItem("schoolActivities");
    setSchoolActivities(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "schoolActivities",
      JSON.stringify(schoolActivities)
    );
  }, [schoolActivities]);

  const deleteHandler = (id) => {
    schoolActivities.filter(({ schoolActivity }) => schoolActivity !== id);
    window.localStorage.removeItem("schoolActivities");
    console.log(schoolActivities.length);
  };

  return (
    <div className="schoolActivities_container">
      <div className="schoolCalender">
        {schoolActivities.map((schoolActivity, index) => (
          <Paper elevation={3} className="activity" key={index}>
            <Typography>{schoolActivity}</Typography>
            <Close onClick={() => deleteHandler(index)} className="closeIcon" />
          </Paper>
        ))}
      </div>

      <div className="addActivity">
        <form onSubmit={submitHandler}>
          <TextField
            required
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            variant="filled"
            size="small"
            placeholder="Press Enter to save"
            label="Add school activity"
            fullWidth
          />
        </form>
      </div>
    </div>
  );
};

export default SchoolActivities;
