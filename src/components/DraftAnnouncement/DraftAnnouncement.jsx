import { DeleteForever, Edit } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./draftAnnouncement.css";

const DraftAnnouncement = () => {
  return (
    <Box className="draftAnnouncementContainer">
      <Typography fontWeight={"bolder"} fontSize={20} p={1}>
        Title
      </Typography>
      <Divider />
      <Typography m={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
        nostrum sint fugit dolores maiores quasi distinctio reprehenderit,
        voluptatibus nobis adipisci beatae aperiam dolor, autem alias. Ipsum
        consequuntur dolorum repellendus aspernatur?
      </Typography>
      <Divider />
      <Box className="card_footer">
        <Box>
          <Edit style={{ marginRight: 10, cursor: "pointer" }} />
          <DeleteForever style={{ cursor: "pointer" }} />
        </Box>
        <Box>
          <Typography textAlign="right">24 / 02 / 22</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DraftAnnouncement;
