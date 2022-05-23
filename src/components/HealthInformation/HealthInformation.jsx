import {
  Add,
  Close,
  CloseOutlined,
  CloseTwoTone,
  HealthAndSafety,
  SafetyCheck,
  Send,
  Sick,
} from "@mui/icons-material";
import {
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./HealthInformation.css";

const HealthInformation = () => {
  const [showInputField, setShowInputField] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [allergy, setAllergy] = useState("");
  const [allergyLists, setAllergyLists] = useState([]);

  const toggleInputField = (e) => {
    setShowInputField(!showInputField);
  };
  const handleAllergy = (e) => {
    e.preventDefault();
    setAllergyLists([...allergyLists, allergy]);
    setAllergy("");
  };

  const handleAllergyDeletion = (key) => {
    allergyLists.filter((allergy) => allergy !== allergy.key);
  };

  const iconStyle = {
    // visibility: "hidden",
    ":hover": {
      visibility: "visible",
      backgroundColor: "green",
    },
  };
  useEffect(() => {
    const allergyData = JSON.parse(localStorage.getItem("allergies"));
    setAllergyLists(allergyData);
  }, []);

  useEffect(() => {
    localStorage.setItem("allergies", JSON.stringify(allergyLists));
  }, [allergyLists]);
  return (
    <div className="health_information">
      <Paper className="paper">
        {/* <div className="icon_container" style={{ backgroundColor: "#FC6C40" }}>
          <HealthAndSafety />
        </div> */}
        <div className="allergies_container">
          <form onSubmit={handleAllergy}>
            <Button
              onClick={toggleInputField}
              variant="text"
              endIcon={<Add />}
              style={{ marginRight: 15 }}
            >
              Add Allergies
            </Button>
            {showInputField && (
              <TextField
                autoFocus
                autoCapitalize="true"
                value={allergy}
                onChange={(e) => setAllergy(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {allergy && (
                        <Button type="submit">
                          (
                          <Send
                            type="submit"
                            style={{ color: "#1978D6", cursor: "pointer" }}
                          />
                          )
                        </Button>
                      )}
                    </InputAdornment>
                  ),
                }}
                placeholder="Eg. Allergic to cola"
                size="small"
                variant="standard"
              />
            )}
          </form>
          <div className="allergy_wrapper">
            {allergyLists.map((allergyList, key) => (
              <div
                style={{
                  width: "fit-content",
                  marginBottom: "10px",
                }}
              >
                <Typography
                  key={key}
                  className="allergy"
                  component={"span"}
                  style={{
                    backgroundColor: "#f1f1f1",
                  }}
                  color={"GrayText"}
                >
                  {allergyList}{" "}
                  <span
                    style={{
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#c6c6c6",
                      borderRadius: "50%",
                      marginLeft: "20px",
                      cursor: "pointer",
                    }}
                  >
                    {
                      <CloseTwoTone
                        onClick={handleAllergyDeletion}
                        style={iconStyle}
                      />
                    }
                  </span>
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Paper>
      <Paper className="paper">
        <Box className="icon_container" style={{ backgroundColor: "#EE77A5" }}>
          <SafetyCheck />
        </Box>
      </Paper>
      <Paper className="paper">
        <Box className="icon_container">
          <Sick />
        </Box>
      </Paper>
    </div>
  );
};

export default HealthInformation;
