import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { Add } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  height: "auto",
  // bgcolor: "background.paper",
  // boxShadow: 24,
  p: 4,
};

const AddNewDraftModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>
        <Add />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <form>
            <Typography
              id="modal-modal-title"
              variant="h6"
              fontWeight="bold"
              mt={-2}
              mb={2}
              component="h2"
              color={"GrayText"}
            >
              Add New Leave Request
            </Typography>
            <Divider />
            <TextField
              autoFocus
              autoCapitalize="true"
              size="small"
              variant="filled"
              fullWidth
              required
              placeholder="Fullname"
              label="Staff's name?"
              margin="normal"
            />

            <FormControl size="small" style={{ marginTop: 5 }}>
              <InputLabel
                style={{ marginTop: 15 }}
                id="demo-simple-select-label"
              >
                Leave
              </InputLabel>
              <Select
                style={{ width: 280, marginTop: 15 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"Class"}
                label="Class"
                // onChange={handleChange}
              >
                <MenuItem value={30}>Annual</MenuItem>
                <MenuItem value={30}>Sick</MenuItem>
              </Select>
            </FormControl>
            <TextareaAutosize
              placeholder="Purpose of leave"
              style={{
                marginTop: "20px",
                minWidth: 280,
                maxWidth: 280,
                maxHeight: 200,
                minHeight: 200,
                padding: 10,
                outline: "none",
                resize: "none",
              }}
            />

            <Box mt={4}>
              <Button fullWidth variant="contained" type="submit">
                Save Leave Request
              </Button>
            </Box>
          </form>
        </Paper>
      </Modal>
    </div>
  );
};

export default AddNewDraftModal;
