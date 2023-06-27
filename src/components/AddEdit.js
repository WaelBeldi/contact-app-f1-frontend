import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { editContact, postContact } from '../redux/actions/contactActions'

const AddEdit = () => {
  const dispatch = useDispatch()
  const [contact, setContact] = useState({ name: "", email: "", phone: "" })
  
  const userReducer = useSelector(state => state.contactReducer.user)
  console.log(userReducer)

  const edit = useSelector(state => state.editReducer.edit)

  useEffect(() => {
    edit ? setContact(userReducer) : setContact({ name: "", email: "", phone: "" })
  }, [userReducer, edit])

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const handleContact = () => {
    if(!edit) {
      dispatch(postContact(contact))
    } else {
      dispatch(editContact(userReducer._id, contact))
    }
  }
  return (
    <div style={{ margin: "1rem auto", width: 500 }}>
      <TextField
        sx={{ marginBottom: "0.5rem" }}
        label="Name"
        variant="outlined"
        fullWidth
        value={contact.name}
        name="name"
        onChange={handleChange} />
      <TextField
        sx={{ marginBottom: "0.5rem" }}
        label="Email"
        variant="outlined"
        fullWidth
        value={contact.email}
        name="email"
        onChange={handleChange} />
      <TextField
        sx={{ marginBottom: "0.5rem" }}
        label="Phone"
        variant="outlined"
        fullWidth
        value={contact.phone}
        name="phone"
        onChange={handleChange} />
      <Link to="/contact_list">
        <Button
          variant="contained"
          fullWidth
          onClick={handleContact}>Save</Button>
      </Link>
    </div>
  )
}

export default AddEdit