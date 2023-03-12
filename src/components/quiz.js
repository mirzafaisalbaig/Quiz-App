import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState } from "react";
import { useContext } from "react";
import { GameContext } from "../helpers/context";
export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChoosen, setOPtionChoosen] = useState("");

  const { score, setScore, game, setGame } = useContext(GameContext);

  const chooseOption = (option) => {
    setOPtionChoosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer == optionChoosen) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer == optionChoosen) {
      setScore(score + 1);
    }
    setGame("finished");
  };

  return (
    <div className="quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
          onClick={() => {
            chooseOption("optionA");
          }}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz} id="next-btn">
          finish quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="next-btn">
          Next Question
        </button>
      )}
    </div>
  );
}
