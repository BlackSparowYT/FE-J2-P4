import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import firebase from '../../firebase.js';
import userController from '../../controller/User';

const Logout = () => {
  const navigate = useNavigate();

  try {
    userController.logout();
    navigate('/');
  } catch (err) {
    // console.error(err)
  }

  return (
    <h1>Logging out</h1>
  )
}

export default Logout