import React from "react";
import "./navBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {


    return (
        <>
        <nav className="navbar">
          <ul>
            <Link to="/">
            <li><ion-icon name="home"></ion-icon></li>
            </Link>
            <Link to="/AboutMe">
            <li><ion-icon name="person"></ion-icon></li>
            </Link>
            <Link to="/Resume">
            <li><ion-icon name="briefcase"></ion-icon></li>
            </Link>
            <Link to="/Portafolio">
            <li><ion-icon name="easel"></ion-icon></li>
            </Link>
            <Link to="/Skills">
            <li><ion-icon name="rocket"></ion-icon></li>
            </Link>
            <Link to="/Contact">
            <li><ion-icon name="paper-plane"></ion-icon></li>
            </Link>
          </ul>
        </nav>
        </>
    )
}



export default NavBar;