import "./App.css";
import Card from "./Components/Card/index.js";
import LightModeQuestion from "./Components/images/LightModeQuestion.png";

function App() {
  return (
    <div className="App">
      <Card src={LightModeQuestion} alt="FlashCards" />
      {/* <Card src= alt />
      <Card src alt />
      <Card src alt />
      <Card src alt />
      <Card src alt /> */}
    </div>
  );
}

export default App;
