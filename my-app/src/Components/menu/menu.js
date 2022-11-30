/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { GiPadlock } from 'react-icons/gi'
import React, {useState, useEffect} from 'react';
import './menu.css'

const Menu = () => {
  const[click,setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      const json = localStorage.getItem("elaters-dark-mode");
      const currentMode = JSON.parse(json);
      if (currentMode) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }, []);

    useEffect(() => {
      if (darkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      const json = JSON.stringify(darkMode);
    localStorage.setItem("elaters-dark-mode", json);
    }, [darkMode]);

    return(
    <div className='navbar'>
      <div className='logo'><a href="https://schoolofcode.co.uk"></a></div>
      <div className='btnMenu'>
          <div className='navbarRight' onClick={handleClick}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li><a href='#'>Settings</a></li>
          <li><a href='#'><GiPadlock className='icon'/>Log Out</a></li>
      </ul>
      <button className='btn' onClick={()=> setDarkMode(!darkMode)}></button>
      </div>
    </div>
)}
export default Menu