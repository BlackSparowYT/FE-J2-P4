import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFolderOpen, faHouse, faRightFromBracket, faRightToBracket, faGear, faGamepad } from "@fortawesome/free-solid-svg-icons";
import user from "../controller/User";

function Sidebar(props) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      const name = await user.getUserName();
      setUserName(name);
    };

    fetchUserName();
  }, [props.isloggedin]);

  const LinkTo = (to, icon, title) => {
    return (
      <Link className="item" to={to}>
        <FontAwesomeIcon icon={icon} /><p>{title}</p>
      </Link>
    );
  };

  return (
    <header>
      {props.isloggedin}
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
            {!props.isLoggedIn ? (
                <Link className="item" to={"/post/add"}>
                    <i className="vlx-icon vlx-icon--plus"></i>
                    <p>Roddel!</p>
                </Link>
                ) : null
            }
        </div>
        <div className="sidebar__items sidebar__items--bottom">
          {props.isloggedin ?
            <>
              {LinkTo('/auth/settings', faGear, 'Settings')}
              {LinkTo('/account', faRightFromBracket, userName || 'Loading...')}
            </>
            :
            LinkTo('/auth/login', faRightToBracket, 'Login')
          }
        </div>
      </div>
    </header>
  );
}

export default Sidebar;
