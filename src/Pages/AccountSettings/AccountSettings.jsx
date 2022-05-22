// import { TextField } from "@material-ui/core";
import { Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";

const AccountSettings = () => {
  const [searched, setSearched] = useState("");
  const [lists, setLists] = useState([]);

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "30px auto",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLists([searched, ...lists]);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("lists"));
    setLists(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);
  return (
    <div style={style}>
      {/* <form onSubmit={handleSubmit}>
        <input value={searched} onChange={(e) => setSearched(e.target.value)} />
        <Button type="submit">Click </Button>
      </form> */}
      {lists.map((list) => (
        <h1>{list}</h1>
      ))}
    </div>
  );
};

export default AccountSettings;
