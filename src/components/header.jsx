import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';


function Header() {

    const nav = useRef();

    function openNav()  { nav.current.style.height = "100%"; };
    function closeNav() { nav.current.style.height = "0%"; };
    

    return (
        <header>
            <nav className="container">

                <div className="navbar-desktop">
                    <div className="navbar-desktop-sitename">
                        <h2>Vak Roddels</h2>
                    </div>
                    <div className="navbar-desktop-items">
                        <Link to={"/"}><p>Home</p></Link>
                    </div>
                </div>

                <div className="navbar-mobile">
                    <div className="navbar-mobile-sitename">
                        <h2>Vak Roddels</h2>
                    </div>
                    <div className="navbar-mobile-items">
                        <div className="open-nav" onClick={openNav}><i className="da-icon da-icon--bars da-icon--large"></i></div>
                    </div>
                    <div ref={nav} id="navbar-mobile-fullscreen" className="nav-overlay">
                        <p className="closebtn" onClick={closeNav}><i className="da-icon da-icon--xmark da-icon--xxx-large"></i></p>
                        <div className="nav-overlay-content">
                            <Link to={"/"}><p>Home</p></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;