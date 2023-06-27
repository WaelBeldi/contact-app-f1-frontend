import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from "./components/Home"
import ContactList from "./components/ContactList"
import AddEdit from "./components/AddEdit"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import { useDispatch } from 'react-redux';
import { getAuthUser } from './redux/actions/authActions';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const getUser = () => dispatch(getAuthUser())

  useEffect(()=>{
    if(localStorage.getItem("token")){
      getUser()
    }
  },[])
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_list" element={<PrivateRoute><ContactList /></PrivateRoute>} />
        <Route path="/add" element={<PrivateRoute><AddEdit /></PrivateRoute>} />
        <Route path="/edit/:id" element={<PrivateRoute><AddEdit /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
