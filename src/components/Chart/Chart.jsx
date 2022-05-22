import { Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Chart.css";
import { students_population } from "../../DashboardData";
import { charts_and_tables } from "../../DashboardData";
import BarChart from "../BarChart/BarChart";
import PieChart from "../PieChart/PieChart";
import LineChart from "../LineChart/LineChart";

const Chart = ({}) => {
  const classes = "chart_item";

  const [studentsPopulation, setStudentsPopulation] = useState({
    labels: students_population.map(
      (studentPopulation) => studentPopulation.month
    ),
    datasets: [
      {
        label: "Students Population",
        data: students_population.map(
          (studentPopulation) => studentPopulation.population
        ),
        backgroundColor: [" #0a539c", " #1976d2", "#0a539c", " #1976d2"],
        borderRadius: 2,
      },
    ],
  });
  return (
    <div className="chart_container">
      {/* {charts_and_tables.map(({ title }, index) => (
        <Paper
          elevation={10}
          className={
            index == 1
              ? `chart_item`
              : index == 2
              ? `chart_item_table`
              : index == 3
              ? "chart_item"
              : "chart_item_table_2"
          }
        >
          <Typography>{title}</Typography>
        </Paper>
      ))} */}
      <div>
        <Paper className="chart_item line">
          <Typography>
            <LineChart data={studentsPopulation} />
          </Typography>
        </Paper>
      </div>

      <div>
        <Paper className="chart_item bar">
          <Typography>
            {" "}
            <BarChart data={studentsPopulation} />
          </Typography>
        </Paper>
      </div>
      <div>
        <Paper className="chart_item pie">
          <Typography>
            <PieChart data={studentsPopulation} />
          </Typography>
        </Paper>
      </div>
      {/* <div>
        <Paper className="chart_item table_2">
          <Typography>4</Typography>
        </Paper>
      </div> */}
    </div>
  );
};

export default Chart;
