import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector(state => state.authReducer.user)
  console.log(user)
  return (
    <div>
      <h1>Firstname: {user.firstName}</h1>
      <h1>Lastname: {user.lastName}</h1>
      <h1>Email: {user.email}</h1>
    </div>
  )
}

export default Profile