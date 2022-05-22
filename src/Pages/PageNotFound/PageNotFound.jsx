import { Button, Typography } from "@mui/material";
import React from "react";
import "./PageNotFound.css";
import pageNotFound from "../../assets/images/pageNotFound.png";
import { Box } from "@mui/system";

const PageNotFound = () => {
  return (
    <Box className="pageNotFound_container">
      <Typography
        variant="h5"
        fontWeight={"bold"}
        marginBottom={6}
        textAlign="center"
        color={"GrayText"}
      >
        Sorry, this page does not exist
      </Typography>
      <img src={pageNotFound} width="380px" style={{ marginBottom: "35px" }} />
      <Button variant="contained" href="./dashboard">
        Go Back Home
      </Button>
    </Box>
  );
};

export default PageNotFound;
