import React from "react";
import './NavBar.css';
import logo from "./logo.svg";

function NavBar(){
    return(
    <div className='navbar'>

      <ul>

        <li><a style={{fontSize: 28}} href="http://localhost:3000/home">Portfolio App</a></li><img src={logo} alt="logo" style={{ height: 65, width: 65, marginTop: 0, marginLeft: -15}}></img>
        <li style={{float: "right", marginTop: 8, marginRight: 32}}><a className="active" href="http://localhost:3000/portfolio">launch app</a></li>

      </ul>
    </div>
    ); 
}

export default NavBar;