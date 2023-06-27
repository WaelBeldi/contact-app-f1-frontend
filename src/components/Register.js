import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import {registerUser} from "../redux/actions/authActions"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Register() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const handleRegister = () => {
    const newUser = {firstName, lastName, email, password}
    dispatch(registerUser(newUser))
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">Register</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Register
          </Typography>
          <TextField
            sx={{ marginBottom: "0.5rem" }}
            label="Firstname"
            variant="outlined"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} />
          <TextField
            sx={{ marginBottom: "0.5rem" }}
            label="Lastname"
            variant="outlined"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} />
          <TextField
            sx={{ marginBottom: "0.5rem" }}
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <TextField
            sx={{ marginBottom: "0.5rem" }}
            label="Password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" />
          <Button
            sx={{ marginBottom: "0.5rem" }}
            variant="contained"
            fullWidth
            onClick={() => {handleRegister(); handleClose()}}>Register</Button>
          <Button
            variant="contained"
            fullWidth
            onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}