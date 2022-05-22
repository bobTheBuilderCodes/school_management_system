import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(one, two, three, four, five, six, form1, form2, form3) {
  return {
    one,
    two,
    three,
    four,
    five,
    six,
    form1,
    form2,
    form3,
  };
}

const rows = [
  createData("Mathematics", 79, 75, 94, 85, 62, 70, 74, 60, 90),
  createData("Integrated Science", 57, 94, 75, 43, 62, 70, 74, 98, 60),
  createData("Social Studies", 86, 88, 64, 60, 62, 70, 74, 60, 89),
  createData("French", 62, 70, 74, 60, 62, 70, 74, 60, 98),
  createData(
    "Religious and Moral Education",
    75,
    77,
    67,
    67,
    73,
    62,
    70,
    74,
    60,
    78
  ),
  createData(
    "Information Communication and Technology",
    56,
    50,
    49,
    69,
    62,
    70,
    74,
    87,
    60
  ),
];

export default function Grade() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Subjects</TableCell>
            <TableCell align="right">Class One</TableCell>
            <TableCell align="right">Class Two</TableCell>
            <TableCell align="right">Class Three</TableCell>
            <TableCell align="right">Class Four</TableCell>
            <TableCell align="right">Class Five</TableCell>
            <TableCell align="right">Class Six</TableCell>
            <TableCell align="right">Form One</TableCell>
            <TableCell align="right">Form Two</TableCell>
            <TableCell align="right">Form Three</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.one}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.one}
              </TableCell>
              <TableCell align="right">{row.two}</TableCell>
              <TableCell align="right">{row.three}</TableCell>
              <TableCell align="right">{row.four}</TableCell>
              <TableCell align="right">{row.five}</TableCell>
              <TableCell align="right">{row.six}</TableCell>
              <TableCell align="right">{row.form1}</TableCell>
              <TableCell align="right">{row.form2}</TableCell>
              <TableCell align="right">{row.form3}</TableCell>
              <TableCell align="right">{row.form3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
