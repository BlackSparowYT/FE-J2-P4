import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFolderOpen, faHouse, faRightFromBracket, faRightToBracket, faGear, faGamepad } from "@fortawesome/free-solid-svg-icons";
import firebase from "../firebase";
import userController from "../controller/User";
import { doc, onSnapshot } from "firebase/firestore";

function Sidebar(props) {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

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
                onSnapshot(doc(firebase.db, "users", firebase.auth.currentUser.uid), (  snapshot) => {
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
            <Link className="item">
                <FontAwesomeIcon icon={icon} onClick={handleIconClick} />
                <p onClick={handleTitleClick}>{title}</p>
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
                            {LinkTo('/account/settings', faGear, 'Settings')}

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
