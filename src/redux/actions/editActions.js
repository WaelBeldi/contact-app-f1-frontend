import {TOGGLE_TRUE, TOGGLE_FALSE} from "../constants/actionTypes"

export const toggleTrue = () => {
  return {
    type: TOGGLE_TRUE
  }
}

export const toggleFalse = () => {
  return {
    type: TOGGLE_FALSE
  }
}