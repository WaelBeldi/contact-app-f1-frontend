import { Box, Button, Card, CardActions, CardContent, CardMedia, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteContact, getContact } from '../redux/actions/contactActions'
import { toggleTrue } from '../redux/actions/editActions';

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

const Contact = ({ contact }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch()
  return (
    <Card sx={{ width: 345, margin: "0.5rem" }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://img.freepik.com/free-icon/user_318-159711.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {contact.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {contact.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone: {contact.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/edit/${contact._id}`}>
          <Button variant="contained" color="success"
          onClick={() => { dispatch(getContact(contact._id)); dispatch(toggleTrue()) }}>Edit</Button>
        </Link>
        <Button variant="outlined" color="error" onClick={handleOpen}>Delete</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure you to delete this contact ?
            </Typography>
            <Button variant="contained" onClick={() => dispatch(deleteContact(contact._id))}>Yes</Button>
            <Button variant="outlined" onClick={handleClose}>No</Button>
          </Box>
        </Modal>
      </CardActions>
    </Card>
  )
}

export default Contact