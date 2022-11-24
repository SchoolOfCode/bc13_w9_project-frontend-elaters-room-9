/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { FiMoon } from 'react-icons/fi'
import { TiThMenu } from 'react-icons/ti'
import { GiPadlock } from 'react-icons/gi'
import React, {useState} from 'react';
import './menu.css'

const Menu = () => {
  const[click,setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [darkMode, setDarkMode] = React.useState(false);

    React.useEffect(() => {
      const json = localStorage.getItem("elaters-dark-mode");
      const currentMode = JSON.parse(json);
      if (currentMode) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }, []);

    React.useEffect(() => {
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
      <div className='container'>
      <h1>
      <div className='navbar-left'><a href="https://schoolofcode.co.uk">School of Code logo</a></div></h1>
          <div className='navbar-right' onClick={handleClick}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <button className='btn' onClick={()=> setDarkMode(!darkMode)}><FiMoon className='icon'/></button>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li><a href='#'>Settings</a></li>
          <li><a href='#'><GiPadlock className='icon'/>Log Out</a></li>
      </ul>
  
    </div>
  </div>
)}
export default Menu