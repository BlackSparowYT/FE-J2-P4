import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import firebase from '../../firebase.js';

const Logout = () => {
  const navigate = useNavigate();

  try {
    signOut(firebase.auth);
  } catch (err) {
    console.error(err)
  }

  navigate('/');

  return (
    <h1>Logging out</h1>
  )
}

export default Logout