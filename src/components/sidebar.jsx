import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  localStorage.setItem("login", false);

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
          <Link className="item" to={"/meldingen"}>
            <i className="vlx-icon vlx-icon--bell"></i>
            <p>Meldingen</p>
          </Link>
        </div>
        <div className="sidebar__items sidebar__items--bottom">
          {isLoggedIn ? (
            <>
              <Link className="item" to={"/account/settings"}>
                <i className="vlx-icon vlx-icon--gear"></i>
                <p>Settings</p>
              </Link>
              <Link className="item" to={"/account/logout"}>
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

export default Sidebar;
