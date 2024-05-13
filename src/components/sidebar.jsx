import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="sidebar">
        <div className="sidebar__logo">
          <h2>Vak Roddels</h2>
        </div>
        <div className="sidebar__items">
          <Link className="item" to={"/"}>
            <p>Home</p>
          </Link>
          <Link className="item" to={"/zoeken"}>
            <p>zoeken</p>
          </Link>
          <Link className="item" to={"/Meldingen"}>
            <p>Meldingen</p>
          </Link>
        </div>
        <div className="sidebar__items--bottom">
          <Link className="item" to={"/settings"}>
            <p>Settings</p>
          </Link>
          <Link className="item" to={"/login"}>
            <p>Login</p>
          </Link>
        </div>
 
      </div>
    </header>
  );
}

export default Header;
