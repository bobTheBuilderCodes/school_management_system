import { Divider, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./PersonalInformationData.css";

const PersonalInformationData = () => {
  const { username } = useParams();
  const { students } = useSelector((state) => state.students);
  console.log(students);

  return (
    <div>
      {students
        .filter((student) => student.studentName === username)
        .map((student, index) => (
          <div className="personal_information" key={index}>
            <div>
              <Typography fontWeight={"bold"} color="GrayText" m={2}>
                Gender{" "}
                <span>
                  {" "}
                  <Typography>{student.studentGender}</Typography>
                </span>
              </Typography>
              <Divider style={{ width: "40vw", opacity: "0.9" }} />
            </div>
            <div>
              <Typography fontWeight={"bold"} color="GrayText" m={2}>
                Nationality{" "}
                <span>
                  {" "}
                  <Typography>Ghanaian</Typography>
                </span>
              </Typography>
              <Divider style={{ width: "40vw", opacity: "0.9" }} />
            </div>
            <div>
              <Typography fontWeight={"bold"} color="GrayText" m={2}>
                Date of Birth
                <span>
                  {" "}
                  <Typography>{student.studentDateOfBirth}</Typography>
                </span>
              </Typography>
              <Divider style={{ width: "40vw", opacity: "0.9" }} />
            </div>

            <div>
              <Typography fontWeight={"bold"} color="GrayText" m={2}>
                Guardian/Parent Name
                <span>
                  {" "}
                  <Typography>{student.parentName || "No name"}</Typography>
                </span>
              </Typography>
              <Divider style={{ width: "40vw", opacity: "0.9" }} />
            </div>
            <div>
              <Typography fontWeight={"bold"} color="GrayText" m={2}>
                Parent's Mobile Number{" "}
                <span>
                  {" "}
                  <Typography>{student.guardianMobileNumber}</Typography>
                </span>
              </Typography>
              <Divider style={{ width: "40vw", opacity: "0.9" }} />
            </div>
            <div>
              <Typography fontWeight={"bold"} color="GrayText" m={2}>
                Residence{" "}
                <span>
                  {" "}
                  <Typography>{student.studentTown}</Typography>
                </span>
              </Typography>
              <Divider style={{ width: "40vw", opacity: "0.9" }} />
            </div>
            <div>
              <Typography fontWeight={"bold"} color="GrayText" m={2}>
                Class{" "}
                <span>
                  {" "}
                  <Typography>{student.studentLevel}</Typography>
                </span>
              </Typography>
            </div>
            <div>
              <Typography fontWeight={"bold"} color="GrayText" m={2}>
                Language
                <span>
                  {" "}
                  <Typography>English</Typography>
                </span>
              </Typography>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PersonalInformationData;
