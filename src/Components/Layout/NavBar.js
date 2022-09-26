import React from "react";
import { Outlet, Link } from "react-router-dom";
import './NavBar.css';
import logo from "./logo.svg";

function NavBar() {
    return(
    <div className='navbar'>
      <ul>

        <li style={{fontSize: 28}}>
          <Link to="/">Portfolio App</Link>
        </li>
        <img src={logo} alt="logo" style={{ height: 65, width: 65, marginTop: 0, marginLeft: -15}}></img>
        
        <li className="active" style={{float: "right", marginTop: 8, marginRight: 32}}>
            <Link to="portfolio">launch app</Link>
        </li>

      </ul>

      <Outlet />
    </div>
    ); 
}

export default NavBar;