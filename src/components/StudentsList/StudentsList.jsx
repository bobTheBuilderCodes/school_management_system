import React, { useEffect, useState } from "react";
import "./StudentsList.css";
import studentNotFound from "../../assets/images/studentNotFound.png";

import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStudents } from "../../Slices/studentSlice";
import searchStudentByName from "../../Slices/studentSlice";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  height: "auto",
  p: 4,
};

const StudentsList = () => {
  const navigate = useNavigate();
  const { username } = useParams();

  // Modal
  const dispatch = useDispatch();

  const students = useSelector((state) => state.students.students);

  const [studentNumber, setStudentNumber] = useState(1);
  const [studentName, setStudentName] = useState(students.studentName);
  const [studentGender, setStudentGender] = useState("Male");
  const [studentLevel, setStudentLevel] = useState("");
  const [studentDateOfBirth, setStudentDateOfBirth] = useState("");
  const [studentTown, setStudentTown] = useState("Tutuka");
  const [guardianMobileNumber, setGuardianMobileNumber] =
    useState("0243546544");
  const [parentName, setParentName] = useState("Kojo Nkansah");
  const [allStudent, setAllStudent] = useState(
    JSON.parse(window.localStorage.getItem("students"))
      ? [JSON.parse(window.localStorage.getItem("students"))]
      : []
  );

  console.log("allStudent", allStudent);
  console.log("allStudent", typeof allStudent);
  console.log("students", students);
  console.log("students", typeof students);
  // Search student by name
  let [searchedStudent, setSearchedStudent] = useState("");

  // Filter

  const [filteredCategory, setFilteredCategory] = useState("");

  const filteredStudents = (e) => {
    students.filter(({ studentLevel }) => {
      if (filteredCategory == "") {
        return studentLevel;
      } else if (filteredCategory.includes(studentLevel)) {
        return studentLevel;
      } else {
        return studentLevel;
      }
    });

    setFilteredCategory(e.target.value);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Get students data from browswer

  useEffect(() => {
    return () => {
      const data = allStudent;
      setAllStudent(data);
    };
  }, []);

  // Store students data in browser
  useEffect(() => {
    window.localStorage.setItem(
      "students",
      JSON.stringify({ ...students, studentName })
    );
  }, [students]);

  const handleAddStudent = (e) => {
    e.preventDefault();
    handleClose();
    // setGetStudent([getStudent, ...students]);
    setStudentNumber((studentNumber) => studentNumber + 1);
    dispatch(
      addStudents({
        studentNumber,
        studentName,
        studentGender,
        studentDateOfBirth,
        guardianMobileNumber,
        studentTown,
        parentName,
        studentLevel,
      })
    );
  };

  const editStudentDetails = (e) => {
    handleOpen();
    setStudentName(studentName);
  };

  return (
    <Box className="studentsList_container">
      <div>
        {/* Search and Add students */}
        <div className="searchAndAddStudent">
          {/* Filter students by category */}
          <div>
            <FormControl size="small">
              <InputLabel id="demo-simple-select-label">Filter</InputLabel>
              <Select
                style={{ width: 200 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filteredCategory}
                onChange={filteredStudents}
                label="Filter"
                // onChange={handleChange}
              >
                <MenuItem value={"All Students"}>All Students</MenuItem>
                <MenuItem value={"K.G One"}>K.G One</MenuItem>
                <MenuItem value={"K.G Two"}>K.G Two</MenuItem>
                <MenuItem value={"Class One"}>Class One</MenuItem>
                <MenuItem value={"Class Two"}>Class Two</MenuItem>
                <MenuItem value={"Class Three"}>Class Three</MenuItem>
                <MenuItem value={"Class Four"}>Class Four</MenuItem>
                <MenuItem value={"Class Five"}>Class Five</MenuItem>
                <MenuItem value={"Class Six"}>Class Six</MenuItem>
                <MenuItem value={"JHS One"}>JHS One</MenuItem>
                <MenuItem value={"JHS Two"}>JHS Two</MenuItem>
                <MenuItem value={"JHS Three"}>JHS Three</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* Search students by name */}
          <div>
            <form>
              <TextField
                size="small"
                variant="filled"
                style={{ width: 300 }}
                type="search"
                placeholder="Search Student by name"
                label="Enter student name"
                autoComplete="true"
                autoFocus
                onChange={(e) => setSearchedStudent(e.target.value)}
              />
            </form>
          </div>

          {/* Modal */}
          <div>
            <Button
              onClick={handleOpen}
              variant="contained"
              style={{ float: "right" }}
            >
              Add Student
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Paper sx={style}>
                <form onSubmit={handleAddStudent}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    fontWeight="bold"
                    mt={-2}
                    mb={2}
                    component="h2"
                  >
                    Add Student
                  </Typography>
                  <Divider />
                  <TextField
                    autoFocus
                    autoCapitalize="true"
                    size="small"
                    variant="filled"
                    fullWidth
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Student's fullname"
                    label="Student's fullname"
                    margin="normal"
                    required
                  />

                  <RadioGroup required>
                    <div style={{ display: "flex" }}>
                      <div>
                        <FormControlLabel
                          value="Male"
                          control={<Radio />}
                          label="Male"
                          onChange={(e) => setStudentGender(e.target.value)}
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          value="Female"
                          control={<Radio />}
                          label="Female"
                          onChange={(e) => setStudentGender(e.target.value)}
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          value="Other"
                          control={<Radio />}
                          label="Other"
                          onChange={(e) => setStudentGender(e.target.value)}
                        />
                      </div>
                    </div>
                  </RadioGroup>

                  <FormControl
                    fullWidth
                    size="small"
                    style={{ marginTop: 20, marginBottom: 20 }}
                  >
                    <InputLabel id="demo-simple-select-label">Class</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={studentLevel}
                      label="Class"
                      onChange={(e) => setStudentLevel(e.target.value)}
                      required
                    >
                      <MenuItem
                        onChange={(e) => setStudentLevel(e.target.value)}
                        value={"K.G One"}
                      >
                        K.G One
                      </MenuItem>
                      <MenuItem
                        onChange={(e) => setStudentLevel(e.target.value)}
                        value={"K.G Two"}
                      >
                        K.G Two
                      </MenuItem>
                      <MenuItem
                        onChange={(e) => setStudentLevel(e.target.value)}
                        value={"Class One"}
                      >
                        Class One
                      </MenuItem>
                      <MenuItem
                        onChange={(e) => setStudentLevel(e.target.value)}
                        value={"Class Two"}
                      >
                        Class Two
                      </MenuItem>
                      <MenuItem
                        onChange={(e) => setStudentLevel(e.target.value)}
                        value={"Class Three"}
                      >
                        Class Three
                      </MenuItem>
                      <MenuItem
                        onChange={(e) => setStudentLevel(e.target.value)}
                        value={"Class Four"}
                      >
                        Class Four
                      </MenuItem>
                      <MenuItem
                        onChange={(e) => setStudentLevel(e.target.value)}
                        value={"Class Five"}
                      >
                        Class Five
                      </MenuItem>
                      <MenuItem
                        onChange={(e) => setStudentLevel(e.target.value)}
                        value={"Class Six"}
                      >
                        Class Six
                      </MenuItem>
                      <MenuItem
                        onChange={(e) => setStudentLevel(e.target.value)}
                        value={"JHS One"}
                      >
                        JHS One
                      </MenuItem>
                      <MenuItem
                        onChange={(e) => setStudentLevel(e.target.value)}
                        value={"JHS Two"}
                      >
                        JHS Two
                      </MenuItem>
                      <MenuItem
                        onChange={(e) => setStudentLevel(e.target.value)}
                        value={"JHS Three"}
                      >
                        JHS Three
                      </MenuItem>
                    </Select>
                  </FormControl>
                  {/* <Divider /> */}
                  <TextField
                    type="date"
                    size="small"
                    fullWidth
                    required
                    value={studentDateOfBirth}
                    onChange={(e) => setStudentDateOfBirth(e.target.value)}
                  />
                  <TextField
                    style={{ marginTop: 20 }}
                    type="text"
                    size="small"
                    placeholder="Eg. Obuasi?"
                    label="Residence"
                    fullWidth
                    value={studentTown}
                    onChange={(e) => setStudentTown(e.target.value)}
                    required
                  />
                  <TextField
                    style={{ marginTop: 20 }}
                    size="small"
                    variant="filled"
                    fullWidth
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="Parent/Guardian's name"
                    label="Parent/Guardian's name"
                    margin="normal"
                    required
                  />
                  <TextField
                    style={{ marginTop: 20 }}
                    size="small"
                    type={"tel"}
                    variant="filled"
                    value={guardianMobileNumber}
                    onChange={(e) => setGuardianMobileNumber(e.target.value)}
                    fullWidth
                    placeholder="Eg. 024 XXX XXXX"
                    label="Parent/Guardian's number"
                    margin="normal"
                    required
                  />
                  <Box mt={4}>
                    <Button type="submit" fullWidth variant="contained">
                      Admit Student
                    </Button>
                  </Box>
                </form>
              </Paper>
            </Modal>
          </div>
        </div>

        {/* Map through students lists */}

        {students.length ? (
          students
            .filter(({ studentName }) => {
              if (searchedStudent === "") {
                return studentName;
              } else if (
                studentName
                  .toLowerCase()
                  .includes(searchedStudent.toLowerCase())
              ) {
                return studentName;
              }
            })
            .filter(({ studentLevel }) => {
              if (
                filteredCategory === "All Students" ||
                filteredCategory === ""
              ) {
                return studentLevel;
              } else if (studentLevel === filteredCategory) {
                return studentLevel;
              }
            })

            .map(
              (
                {
                  studentNumber,
                  studentName,
                  studentGender,
                  studentLevel,
                  guardianMobileNumber,
                },
                index
              ) => (
                <Box my={2}>
                  <div className="wrapper">
                    <div
                      key={index}
                      className="studentContainer"
                      onClick={() => navigate(`/studentProfile/${studentName}`)}
                    >
                      <div>
                        <Typography>{studentNumber}</Typography>
                      </div>
                      <div>
                        <Typography>{studentName}</Typography>
                      </div>

                      <div>
                        <Typography>{studentGender}</Typography>
                      </div>
                      <div>
                        <Typography>{studentLevel}</Typography>
                      </div>
                      <div>
                        <Typography>{guardianMobileNumber}</Typography>
                      </div>
                    </div>
                    {/* Icons */}
                    <div className="icons">
                      <Edit
                        style={{ marginRight: "-30px" }}
                        onClick={editStudentDetails}
                      />
                      <Delete style={{ marginLeft: 10 }} />
                    </div>
                  </div>

                  <Divider />
                </Box>
              )
            )
        ) : (
          <div className="studentNotFound">
            <img width="480" src={studentNotFound} alt="No student" />

            <Typography variant="h6" color="GrayText" fontWeight={"bold"}>
              Hmm,looks like you haven't added any student yet.
            </Typography>
          </div>
        )}
      </div>
    </Box>
  );
};

export default StudentsList;
