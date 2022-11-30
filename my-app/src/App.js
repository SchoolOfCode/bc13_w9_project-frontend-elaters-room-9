import React from "react";
import Documents from './Components/Documents'
import Videos from "./Components/Videos";
import Wellbeing from "./Components/Wellbeing";
import CalendarApp from './Components/Calendar/index'
import QuizApp from './Components/Quiz/QuizApp'
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Games from "./Components/Games";
import {
  CALENDAR_ROUTE,
  DOCUMENTS_ROUTE,
  WELLBEING_ROUTE,
  GAMES_ROUTE,
  HOME_ROUTE,
  QUIZ_ROUTE,
  VIDEOS_ROUTE,
} from "./constants/ROUTES";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path={HOME_ROUTE} element={<Home/>}></Route>
            <Route exact path={VIDEOS_ROUTE} element={<Videos/>}></Route>
            <Route exact path={WELLBEING_ROUTE} element={<Wellbeing/>}></Route>
            <Route exact path={GAMES_ROUTE} element={<Games/>}></Route>
            <Route exact path={QUIZ_ROUTE} element={<QuizApp/>}></Route>
            <Route exact path={CALENDAR_ROUTE} element={<CalendarApp/>}></Route>
            <Route exact path={DOCUMENTS_ROUTE} element={<Documents/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
