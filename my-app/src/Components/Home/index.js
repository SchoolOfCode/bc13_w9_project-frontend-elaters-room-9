import LightModeQuestion from "../images/LightModeQuestion.png";
import LightModeCalendar from "../images/LightModeCalendar.png";
import LightModeDocument from "../images/LightModeDocument.png";
import LightModeGames from "../images/LightModeGames.png";
import LightModeVideo from "../images/LightModeVideo.png";
import LightModeFitness from "../images/LightModeFitness.png";
import Card from "../Card/index.js";
import Menu from "../menu/menu";
import Greeting from "../greeting/greeting";
import React from "react";
import { CALENDAR_ROUTE, DOCUMENTS_ROUTE, FITNESS_ROUTE, GAMES_ROUTE, QUIZ_ROUTE, VIDEOS_ROUTE } from "../../constants/ROUTES";
import './home.css';

const Home = () => {
  

  return (
      <div className="Home">
    <Menu/>
     <Greeting name={'Francesca'}/>
     <div className="cardContainer">
      <Card
        src={LightModeQuestion}
        alt="FlashCards"
        id="FlashCards"
        title="FlashCards"
        route={QUIZ_ROUTE}
      />
      <Card
        src={LightModeCalendar}
        alt="Calendar"
        id="Calendar"
        title="Calendar"
        route={CALENDAR_ROUTE}
      />
      <Card
        src={LightModeDocument}
        alt="Documents"
        id="Documents"
        title="Documents"
        route={DOCUMENTS_ROUTE}
      />
      <Card
        src={LightModeGames}
        alt="Games"
        id="Games"
        title="Games"
        route={GAMES_ROUTE}
      />
      <Card
        src={LightModeVideo}
        alt="Videos"
        id="Videos"
        title="Videos"
        route={VIDEOS_ROUTE}
      />
      <Card
        src={LightModeFitness}
        alt="Exercise - an App for 30 Minute daily workout"
        id="Exercise"
        title="Exercise"
        route={FITNESS_ROUTE}
      />
    </div>
    </div>
  );
};

export default Home;
