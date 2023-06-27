import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { toggleFalse } from '../redux/actions/editActions';
import Login from './Login';
import Register from './Register';
import { logoutUser } from '../redux/actions/authActions';

const NavBar = () => {
  const dispatch = useDispatch()

  const isAuth = useSelector(state => state.authReducer.isAuth);
  const user = useSelector(state => state.authReducer.user)

  const logout = () => {
    dispatch(logoutUser())
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <Button sx={{ my: 2, color: 'white' }}>
                Home
              </Button>
            </Link>
            {isAuth ?
              (<>
                <Link to="/contact_list">
                  <Button sx={{ my: 2, color: 'white' }}>
                    Contact List
                  </Button>
                </Link>
                <Link to="/add">
                  <Button sx={{ my: 2, color: 'white' }}
                    onClick={() => dispatch(toggleFalse())}>
                    Add Contact
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button sx={{ my: 2, color: 'white' }}>
                    Profile
                  </Button>
                </Link>
              </>)
              : <></>}
          </Box>
          {isAuth ?
            <>
              <span>Bienvenue</span>
              <Button variant="contained"
              onClick={logout}>
                Logout
              </Button>
            </>
            :
            <>
              <Login />
              <Register />
            </>}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar