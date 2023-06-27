import { GET_AUTH_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER, USER_LOADING } from "../constants/actionTypes"
import axios from "axios"
import { toast } from 'react-toastify';

const toastOptions = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}

//loading user
export const userLoading = () => async (dispatch) => {
  dispatch({ type: USER_LOADING })
}

//register user
export const registerUser = (formData) => async (dispatch) => {
  dispatch(userLoading())
  try {
    const res = await axios.post("/api/auth/register", formData)
    if (res) {
      toast.success(res.data.msg, toastOptions);
    }
    dispatch({
      type: REGISTER_USER,
      payload: res.data
    })
  } catch (error) {
    console.dir(error)
    const { errors, msg } = error.response.data
    if (msg) {
      toast.error(msg, toastOptions)
    } else if (errors) {
      errors.forEach((err) => toast.error(err.msg, toastOptions))
    }
  }
}

//login user
export const loginUser = (formData) => async (dispatch) => {
  dispatch(userLoading())
  try {
    const res = await axios.post("/api/auth/login", formData)
    if (res) {
      toast.success(res.data.msg, toastOptions);
    }
    dispatch({
      type: LOGIN_USER,
      payload: res.data
    })
  } catch (error) {
    console.dir(error)
    const { errors, msg } = error.response.data
    if (msg) {
      toast.error(msg, toastOptions)
    } else if (errors) {
      errors.forEach((err) => toast.error(err.msg, toastOptions))
    }
  }
}

//logout user
export const logoutUser = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER })
}

//get auth user
export const getAuthUser = () => async (dispatch) => {
  dispatch(userLoading())
  try {
    //headers
    const config = {
      headers: {
        'auth-token': localStorage.getItem("token")
      }
    }
    const res = await axios.get('/api/auth/user', config)
    dispatch({
      type: GET_AUTH_USER,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}