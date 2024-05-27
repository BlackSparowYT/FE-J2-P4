import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebase from "./firebase.js";
import Sidebar from "./components/sidebar.jsx";
// import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import Search from './pages/search.jsx';
import Error404 from './pages/404.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Error404 from "./pages/404.jsx";
import Login from "./pages/auth/login.jsx";
import Register from "./pages/auth/register.jsx";
import Logout from "./pages/auth/logout.jsx";
import Account from "./pages/auth/account.jsx";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const url = window.location.href;
    if (url.includes("/auth")) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [location]);


  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [firebase.auth.currentUser]);


  return (
    <>
      {
        showSidebar ? <Sidebar isloggedin={isLoggedIn} /> : null
      }
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/404" Component={Error404} />
        <Route path="*" Component={Error404} />
        <Route path="/account" Component={Account} />
        <Route path="/auth/login" Component={Login} />
        <Route path="/auth/register" Component={Register} />
        <Route path="/auth/logout" Component={Logout} />
      </Routes>
    </>
  );
};

export default App;
