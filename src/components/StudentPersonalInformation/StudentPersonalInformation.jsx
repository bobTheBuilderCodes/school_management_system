import React from "react";
import "./StudentPersonalInformation.css";
import Bob from "../../assets/images/Bob.jpeg";
import { Avatar, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const StudentPersonalInformation = () => {
  const { username } = useParams();
  const { students } = useSelector((state) => state.students);
  const currentDate = new Date();

  return (
    <div className="studentPersonalInformation_container">
      <div className="studentInformation">{`${username.slice(0, 1)}`}</div>
      {students
        .filter((student) => student.studentName == username)
        .map((studentProfile, index) => {
          return (
            <div className="details" key={index}>
              <Typography variant="h3" color={"GrayText"} fontWeight={"bold"}>
                {username}
              </Typography>
              <Typography variant="h5" fontWeight={400} color={"GrayText"}>
                {`${username.slice(0, 2)}-${
                  studentProfile.studentNumber
                }${currentDate.getDay()}${currentDate.getMonth()}-${currentDate.getFullYear()}`}
              </Typography>
            </div>
          );
        })}
      {/* <div className="details">
        <Typography variant="h3" color={"#555"} fontWeight={"bold"}>
          {username}
        </Typography>
        <Typography variant="h5" color={"GrayText"}>
          NE-200468-17
        </Typography>
      </div> */}
    </div>
  );
};

export default StudentPersonalInformation;
