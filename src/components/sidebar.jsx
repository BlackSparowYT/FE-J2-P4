import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';


function Header() {

    const nav = useRef();

    function openNav()  { nav.current.style.height = "100%"; };
    function closeNav() { nav.current.style.height = "0%"; };
    

    return (
        <header>
            <div className="sidebar">
                <div className="sidebar__logo">
                    <h2>Vak Roddels</h2>
                </div>
                <div className="sidebar__items">
                    <Link className='item' to={"/"}><p>Home</p></Link>
                </div>
            </div>
        </header>
    );
}

export default Header;