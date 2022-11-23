import "./App.css";
import "./Components/greeting/greeting.css";
import React from "react";
import Videos from "./Components/Videos";
import Fitness from "./Components/Fitness";

import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Games from "./Components/Games";


// Need to change the element in lines 24, 25 and 26 to match flashcards, calendar and documents component import

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/videos" element={<Videos />}></Route>
            <Route exact path="/fitness" element={<Fitness />}></Route>
            <Route exact path="/games" element={<Games />}></Route>
            <Route exact path="/flashcards" element={<Games />}></Route>
            <Route exact path="/calendar" element={<Games />}></Route>
            <Route exact path="/documents" element={<Games />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
