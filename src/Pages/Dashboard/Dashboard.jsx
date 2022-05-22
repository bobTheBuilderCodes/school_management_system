import { Divider, Typography } from "@mui/material";
import React from "react";
import Card from "../../components/Card/Card";
import Chart from "../../components/Chart/Chart";
import Navbar from "../../components/Navbar/Navbar";
import "./Dashboard.css";
import dashboard_data from "../../DashboardData";
import { useSelector } from "react-redux";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="dashboard_container">
        {dashboard_data.map(
          ({ title, number, details_one, details_two }, index) => (
            <Card
              title={title}
              number={number}
              details_one={details_one}
              details_two={details_two}
              key={index}
            />
          )
        )}
      </div>
      <Divider style={{ opacity: "80%", marginBottom: 50 }} />
      <Chart />
    </>
  );
};

export default Dashboard;
