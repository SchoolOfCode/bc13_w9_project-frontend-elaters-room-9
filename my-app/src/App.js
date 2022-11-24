import "./App.css";
import Greeting from "./Components/greeting/greeting";
import './Components/greeting/greeting.css'
import Menu from "./Components/menu/menu";
import React from 'react';
import Card from "./Components/Card/index.js";
import LightModeQuestion from "./Components/images/LightModeQuestion.png";
import LightModeCalendar from "./Components/images/LightModeCalendar.png";
import LightModeDocument from "./Components/images/LightModeDocument.png";
import LightModeGames from "./Components/images/LightModeGames.png";
import LightModeVideo from "./Components/images/LightModeVideo.png";
import LightModeFitness from "./Components/images/LightModeFitness.png";


function App() {
  

  return (
    <div className="App">
    <Menu/>
     <Greeting name={'Bob'}/>
    
  
    <div className="container">
      <Card
        src={LightModeQuestion}
        alt="FlashCards"
        id="FlashCards"
        Title="FlashCards"
      />
      <Card
        src={LightModeCalendar}
        alt="Calendar"
        id="Calendar"
        Title="Calendar"
      />
      <Card
        src={LightModeDocument}
        alt="Documents"
        id="Documents"
        Title="Documents"
      />
      <Card src={LightModeGames} alt="Games" id="Games" Title="Games" />
      <Card src={LightModeVideo} alt="Videos" id="Videos" Title="Videos" />
      <Card
        src={LightModeFitness}
        alt="Exercise - an App for 30 Minute daily workout"
        id="Exercise"
        Title="Exercise"
      />
      </div>
    </div>
  );
};

export default App;