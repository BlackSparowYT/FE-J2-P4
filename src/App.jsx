import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebase from "./firebase.js";
import Sidebar from "./components/sidebar.jsx";
// import Footer from './components/footer.jsx';
import Home from "./pages/home.jsx";
import Error404 from "./pages/404.jsx";
import Login from "./pages/auth/login.jsx";
import Register from "./pages/auth/register.jsx";
import Logout from "./pages/auth/logout.jsx";
import Account from "./pages/auth/account.jsx";
import Settings from "./pages/auth/settings.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    const url = window.location.pathname;

    let regex = /^\/auth\/(login|register|logout)$/;

    if (regex.test(url)) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }


    if (
      url.includes("/account") ||
      url.includes("/post/add/") ||
      url.includes("/post/edit/")
    ) {
      if (!isLoggedIn) {
        navigate("/");
      }
    }
  }, [firebase.auth.currentUser, location]);




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
        <Route path="/account/settings" Component={Settings} />

        <Route path="/auth/login" Component={Login} />
        <Route path="/auth/register" Component={Register} />
        <Route path="/auth/logout" Component={Logout} />

      </Routes>
    </>
  );
};

export default App;
