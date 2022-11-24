import { useContext } from "react";
import { QuizContext } from "../Context/Quiz";
import Question from "./Question";

function Quiz() {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log("quizState", quizState);
  return (
    <div className="quiz QuizDiv">
      {quizState.showResults && (
        <div className="results QuizDiv">
          <div className="congratulations QuizDiv">Congratulations!</div>
          <div className="results-info QuizDiv">
            <div className="QuizDiv endMessage">
              You have completed the quiz!
            </div>
            <div className="QuizDiv endMessage">
              You got {quizState.correctAnswerCount} out of{" "}
              {quizState.questions.length} right.
            </div>
            <div
              className="next-button QuizDiv"
              onClick={() => dispatch({ type: "RESTART" })}
            >
              RESTART
            </div>
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div className="QuizDiv">
          <div className="score QuizDiv">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button QuizDiv"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next question
          </div>
        </div>
      )}
    </div>
  );
}
export default Quiz;
