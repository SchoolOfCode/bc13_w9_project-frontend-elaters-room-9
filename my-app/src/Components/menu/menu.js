/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { FiMoon } from 'react-icons/fi'
<<<<<<< HEAD
//import { TiThMenu } from 'react-icons/ti'
import { GiPadlock } from 'react-icons/gi'
import React, {useState} from 'react';
=======
import { GiPadlock } from 'react-icons/gi'
import React, {useState, useEffect} from 'react';
>>>>>>> main
import './menu.css'

const Menu = () => {
  const[click,setClick] = useState(false)
  const handleClick = () => setClick(!click)

<<<<<<< HEAD
  const [darkMode, setDarkMode] = React.useState(false);

    React.useEffect(() => {
=======
  const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
>>>>>>> main
      const json = localStorage.getItem("elaters-dark-mode");
      const currentMode = JSON.parse(json);
      if (currentMode) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }, []);

<<<<<<< HEAD
    React.useEffect(() => {
=======
    useEffect(() => {
>>>>>>> main
      if (darkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      const json = JSON.stringify(darkMode);
    localStorage.setItem("elaters-dark-mode", json);
    }, [darkMode]);
<<<<<<< HEAD
    return(
    <div className='navbar'>
      <div className='container'>
      <h1>
      <div className='navbar-left'><a href="https://schoolofcode.co.uk">School of Code logo</a></div></h1>
          <div className='navbar-right' onClick={handleClick}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <button className='btn' onClick={()=> setDarkMode(!darkMode)}><FiMoon className='icon'/></button>
=======

    return(
    <div className='navbar'>
      <div className='logo'><a href="https://schoolofcode.co.uk"></a></div>
      <div className='btnMenu'>
          <div className='navbarRight' onClick={handleClick}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
>>>>>>> main
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li><a href='#'>Settings</a></li>
          <li><a href='#'><GiPadlock className='icon'/>Log Out</a></li>
      </ul>
<<<<<<< HEAD
  
    </div>
  </div>
=======
      <button className='btn' onClick={()=> setDarkMode(!darkMode)}><FiMoon className='icon'/></button>
      </div>
    </div>
>>>>>>> main
)}
export default Menu