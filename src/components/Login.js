import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/authActions';

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

export default function Login() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    const userLogin = {email, password};
    dispatch(loginUser(userLogin));
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>
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
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <Button
            sx={{ marginBottom: "0.5rem" }}
            variant="contained"
            fullWidth
            onClick={() => {handleLogin(); handleClose()}}>Login</Button>
          <Button
            variant="contained"
            fullWidth
            onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}