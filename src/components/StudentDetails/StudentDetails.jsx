import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Divider } from "@mui/material";
import "./StudentDetails.css";
import PersonalInformationData from "../PersonalInformationData/PersonalInformationData";
import Grade from "../Grade/Grade";
import HealthInformation from "../HealthInformation/HealthInformation";
import { useParams } from "react-router-dom";

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const { username, gender } = useParams();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Personal Information" {...a11yProps(0)} />
          <Tab label="Grades" {...a11yProps(1)} />
          <Tab label="Health Information" {...a11yProps(2)} />
          <Tab label="School Assets in Possession" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/* <Box className="edit_profile">
          <Button size="small">Edit Information</Button>
        </Box> */}
        <PersonalInformationData />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grade />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <HealthInformation />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
    </Box>
  );
}
