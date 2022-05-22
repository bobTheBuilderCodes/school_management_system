import { Button, Divider, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("email", `rt`);
  };

  return (
    <div className="signUp">
      <Paper elevation={5} className="signUp_container">
        <Typography
          variant="h5"
          color={"#555"}
          fontWeight={"bold"}
          textAlign="center"
        >
          Sign Up
        </Typography>
        <form action="" onSubmit={handleSubmit}>
          <TextField
            size="small"
            variant="filled"
            fullWidth
            placeholder="Eg.something@gmail.com"
            label="Email"
            margin="normal"
          />

          <TextField
            size="small"
            variant="filled"
            fullWidth
            placeholder="************"
            label="Password"
            margin="normal"
          />
          <TextField
            size="small"
            variant="filled"
            fullWidth
            placeholder="************"
            label="Confirm Password"
            margin="normal"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ marginTop: "20px" }}
          >
            Sign Up
          </Button>
        </form>
        <Typography
          style={{ color: "grey", marginTop: "20px", float: "right" }}
        >
          Already have an account yet?{" "}
          <span
            style={{
              color: "#1976d2",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            <Link style={{ color: "#1976d2" }} to={"/login"}>
              Log in
            </Link>
          </span>
        </Typography>
        <Divider />
        <Typography mt={2} style={{ opacity: "30%" }}>
          School Management System
        </Typography>
      </Paper>
    </div>
  );
};

export default SignUp;
