import "./App.css";
import Greeting from "./Components/greeting/greeting";
import './Components/greeting/greeting.css'
import Menu from "./Components/menu/menu";
import React from 'react';
import Card from "./Components/Card/index.js";
import LightModeQuestion from "./Components/images/LightModeQuestion.png";


function App() {
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

  return (
    <div className="App">
    <header><Greeting name={'Fred'}/></header>
    <Menu/>
    <button onClick={()=> setDarkMode(!darkMode)}>Toggle Dark Mode</button>
    </div>
  );
};

export default App;
