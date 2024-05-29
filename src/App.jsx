import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebase from "./firebase.js";
import Sidebar from "./components/sidebar.jsx";
// import Footer from './components/footer.jsx';
import Home from "./pages/home.jsx";
import Error404 from "./pages/404.jsx";
import Login from "./pages/auth/login.jsx";
import Logout from "./pages/auth/Logout.jsx";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const url = window.location.href;
    if (url.includes("/account")) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [location]);

  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }); 
  
  return (
    <>
      {
        showSidebar ? <Sidebar isloggedin={isLoggedIn} /> : null
      }
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/404" Component={Error404} />
        <Route path="*" Component={Error404} />
        <Route path="/account/login" Component={Login} />
        <Route path="/account/logout" Component={Logout} />
      </Routes>
    </>
  );
}

export default App;
