// import { TextField } from "@material-ui/core";
import { Edit, FilePresent } from "@mui/icons-material";
import { Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";

const AccountSettings = () => {
  const style = {
    display: "grid",
    placeItems: "center",
  };

  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState("");
  // Functions
  const handleForms = (e) => {
    e.preventDefault();
    setNames([name, ...names]);
    setName("");
  };

  const editName = (id, updatedName) => {
    [...names].map((name) => {
      if (name.id === id) {
        setName(updatedName);
      }
    });
  };

  console.log(names);
  return (
    <div style={style}>
      <h1>You can try out new stuff here</h1>
      <form onSubmit={handleForms}>
        <TextField
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          size="small"
        />
        <Button type="submit">Save</Button>
      </form>
      {names.map((name, index) => (
        <div key={index}>
          <h3>{name}</h3>
          <Edit onClick={editName(index, "Updated name")} />
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default AccountSettings;
