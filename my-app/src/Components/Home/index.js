import Card from "../Card/index.js";
import Menu from "../menu/menu";
import Greeting from "../greeting/greeting";
import React from "react";
import { CALENDAR_ROUTE, DOCUMENTS_ROUTE, WELLBEING_ROUTE, GAMES_ROUTE, QUIZ_ROUTE, VIDEOS_ROUTE } from "../../constants/ROUTES";
import './home.css';

const Home = () => {
  

  return (
      <div className="Home">
    <Menu/>
     <Greeting name={'Francesca'}/>
     <div className="cardContainer">
      <Card
        id="FlashCards"
        title="FlashCards"
        route={QUIZ_ROUTE}
      />
      <Card
        id="Calendar"
        title="Calendar"
        route={CALENDAR_ROUTE}
      />
      <Card
        id="Documents"
        title="Documents"
        route={DOCUMENTS_ROUTE}
      />
      <Card
        id="Games"
        title="Games"
        route={GAMES_ROUTE}
      />
      <Card
        id="Videos"
        title="Videos"
        route={VIDEOS_ROUTE}
      />
      <Card
        id="Wellbeing"
        title="Wellbeing"
        route={WELLBEING_ROUTE}
      />
    </div>
    </div>
  );
};

export default Home;
