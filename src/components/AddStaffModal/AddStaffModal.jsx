import React from "react";
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

const AddStaffModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Add Staff
      </Button>
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
            >
              Add Staff
            </Typography>
            <Divider />
            <TextField
              autoFocus
              autoCapitalize="true"
              size="small"
              variant="filled"
              fullWidth
              placeholder="Staff's fullname"
              required
              label="Enter name"
              margin="normal"
            />

            <RadioGroup>
              <div style={{ display: "flex" }}>
                <div>
                  <FormControlLabel
                    value="Teaching"
                    control={<Radio />}
                    label="Teaching"
                  />
                </div>
                <div>
                  <FormControlLabel
                    value="Non-Teaching"
                    control={<Radio />}
                    label="Non-Teaching"
                  />
                </div>
              </div>
            </RadioGroup>

            <FormControl
              fullWidth
              size="small"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"Class"}
                label="Class"
                // onChange={handleChange}
              >
                <MenuItem value={30}>KG1</MenuItem>
                <MenuItem value={30}>KG2</MenuItem>
                <MenuItem value={30}>Primary 1</MenuItem>
                <MenuItem value={30}>Primary 2</MenuItem>
                <MenuItem value={30}>Primary 3</MenuItem>
                <MenuItem value={30}>Primary 4</MenuItem>
                <MenuItem value={30}>Primary 5</MenuItem>
                <MenuItem value={30}>Primary 6</MenuItem>
                <MenuItem value={30}>JHS1</MenuItem>
                <MenuItem value={30}>JHS2</MenuItem>
                <MenuItem value={30}>JHS3</MenuItem>
              </Select>
            </FormControl>
            <Divider />

            <TextField
              style={{ marginTop: 20 }}
              size="small"
              variant="filled"
              fullWidth
              placeholder="Subjects Taught"
              label="Enter Subjects"
              margin="normal"
            />
            <TextField
              style={{ marginTop: 20 }}
              size="small"
              type={"tel"}
              variant="filled"
              fullWidth
              required
              placeholder="Eg. 024 XXX XXXX"
              label="Phone number"
              margin="normal"
            />
            <Box mt={4}>
              <Button fullWidth variant="contained">
                Admit Staff
              </Button>
            </Box>
          </form>
        </Paper>
      </Modal>
    </div>
  );
};

export default AddStaffModal;
