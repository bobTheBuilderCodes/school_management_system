import { Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <Paper elevation={5} className="login_container">
      <Typography
        variant="h5"
        fontWeight={"bold"}
        color="#555"
        textAlign="center"
      >
        Log in
      </Typography>
      <form action="">
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

        <Button fullWidth variant="contained" style={{ marginTop: "20px" }}>
          Log in
        </Button>
      </form>
      <Typography style={{ marginTop: "20px", float: "right" }}>
        Don't have an account yet?{" "}
        <span
          style={{
            color: "#1976d2",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          <Link style={{ color: "#1976d2" }} to={"/"}>
            Create one
          </Link>
        </span>
      </Typography>
      <Typography mt={2} style={{ opacity: "30%" }}>
        School Management System
      </Typography>
    </Paper>
  );
};

export default Login;
