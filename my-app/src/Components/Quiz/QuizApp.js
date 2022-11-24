import Quiz from "../Quiz/Quiz";
import { QuizProvider } from "../Context/Quiz";
import "./Quiz.css";

function QuizApp() {
  return (
    <div>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  );
}
export default QuizApp;
