import Quiz from "../Quiz/Quiz";
import { QuizProvider } from "../Context/Quiz";
import "./Quiz.css";

function QuizApp() {
  return (
    <div className="QuizDiv">
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  );
}
export default QuizApp;
