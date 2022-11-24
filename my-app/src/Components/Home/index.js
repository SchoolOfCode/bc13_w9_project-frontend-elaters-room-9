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
import { FITNESS_ROUTE, GAMES_ROUTE, VIDEOS_ROUTE } from "../../constants/ROUTES";

const Home = () => {
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
    <div>
      <div className="Home">
    <Menu/>
     <Greeting name={'Bob'}/>
      <Card
        src={LightModeQuestion}
        alt="FlashCards"
        id="FlashCards"
        title="FlashCards"
        route="/"
      />
      <Card
        src={LightModeCalendar}
        alt="Calendar"
        id="Calendar"
        title="Calendar"
        route="/"
      />
      <Card
        src={LightModeDocument}
        alt="Notes and Documents"
        id="NotesandDocuments"
        title="Notes and Documents"
        route="/"
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
