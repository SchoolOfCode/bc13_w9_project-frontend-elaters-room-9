import "./App.css";
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
      <Card
        src={LightModeQuestion}
        alt="FlashCards"
        id="FlashCards"
        Title="FlashCards"
        link={}
      />
      <Card
        src={LightModeCalendar}
        alt="Calendar"
        id="Calendar"
        Title="Calendar"
        link={}
      />
      <Card
        src={LightModeDocument}
        alt="Notes and Documents"
        id="NotesandDocuments"
        Title="Notes and Documents"
        link={}
      />
      <Card src={LightModeGames} alt="Games" id="Games" Title="Games" link={}/>
      <Card src={LightModeVideo} alt="Videos" id="Videos" Title="Videos" link={}/>
      <Card
        src={LightModeFitness}
        alt="Exercise - an App for 30 Minute daily workout"
        id="Exercise"
        Title="Exercise"
        link={}
      />
    </div>
  );
}

export default App;
