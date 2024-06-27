<<<<<<< Updated upstream
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  localStorage.setItem("login", true);
=======
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFolderOpen, faHouse, faRightFromBracket, faRightToBracket, faGear, faGamepad } from "@fortawesome/free-solid-svg-icons";
import firebase from "../firebase";
import userController from "../controller/User";
import { doc, onSnapshot } from "firebase/firestore";

function Sidebar(props) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {

    return firebase.auth.onAuthStateChanged(user => {
      if (user.providerData[0].providerId === "google.com") {
        setUserName(user.displayName);
      } else {
        const fetchUserName = async () => {
          const name = await userController.getUserName();
          setUserName(name);
        };
        fetchUserName();
        onSnapshot(doc(firebase.db, "users", firebase.auth.currentUser.uid), (snapshot) => {
          setUserName(snapshot.data().displayName);
        });
      }
    });
  }, []);

  const LinkTo = (to, icon, title) => {
    const handleIconClick = (e) => {
    e.preventDefault();
    if (icon === faRightFromBracket) {
      navigate("/auth/logout");
    }
  };

  const handleTitleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <Link className="item" >
      <FontAwesomeIcon icon={icon} onClick={handleIconClick} />
      <p onClick={handleTitleClick}>{title}</p>
    </Link>
  );
  };
>>>>>>> Stashed changes

  const isLoggedIn = localStorage.getItem("login") === "true";

  return (
    <header>
      <a>{isLoggedIn}</a>

      <div className="sidebar">
        <div className="sidebar__logo">
          <h2>Vak Roddels</h2>
        </div>
        <div className="sidebar__items">
          <Link className="item" to={"/"}>
            <i className="vlx-icon vlx-icon--house"></i>
            <p>Home</p>
          </Link>
          <Link className="item" to={"/zoeken"}>
            <i className="vlx-icon vlx-icon--search"></i>
            <p>zoeken</p>
          </Link>
          <Link className="item" to={"/Meldingen"}>
            <i className="vlx-icon vlx-icon--bell"></i>
            <p>Meldingen</p>
          </Link>
        </div>
        <div className="sidebar__items sidebar__items--bottom">
          {isLoggedIn ? (
            <>
              <Link className="item" to={"/settings"}>
                <i className="vlx-icon vlx-icon--gear"></i>
                <p>Settings</p>
              </Link>
              <Link className="item" to={"/logout"}>
                <i className="vlx-icon vlx-icon--right-from-bracket"></i>
                <p>Logout</p>
              </Link>
            </>
          ) : (
            <Link className="item" to={"/login"}>
              <i className="vlx-icon vlx-icon--right-to-bracket"></i>
              <p>Login</p>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
