import {GET_CONTACT, GET_CONTACT_FAIL, GET_CONTACT_LOAD, GET_CONTACT_SUCCESS} from "../constants/actionTypes"
import axios from "axios"

export const getContacts = () => async (dispatch) => {
  dispatch({type: GET_CONTACT_LOAD})
  try {
    const result = await axios.get("/api/contact")
    console.log(result)
    dispatch({type: GET_CONTACT_SUCCESS, payload: result.data.response})
  } catch (error) {
    dispatch({type: GET_CONTACT_FAIL, payload: error})
    console.log(error)
  }
}

export const getContact = (id) => async (dispatch) => {
  try {
    const result = await axios.get(`/api/contact/${id}`)
    dispatch({type: GET_CONTACT, payload: result.data.response})
  } catch (error) {
    console.log(error)
  }
}

export const postContact = (contact) => async (dispatch) => {
  try {
    await axios.post("/api/contact", contact)
    dispatch(getContacts())
  } catch (error) {
    console.log(error)
  }
}

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contact/${id}`)
    dispatch(getContacts())
  } catch (error) {
    console.log(error)
  }
}

export const editContact = (id, contact) => async (dispatch) => {
  try {
    await axios.put(`/api/contact/${id}`, contact)
    dispatch(getContacts())
  } catch (error) {
    console.log(error)
  }
}