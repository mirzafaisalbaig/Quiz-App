import "../App.css";
import React from "react";
import { useContext } from "react";
import { GameContext } from "../helpers/context";
import { Questions } from "../helpers/Questions";

const EndScreen = () => {
  const { score, setScore, game, setGame, userName } = useContext(GameContext);

  const restartQuiz = () => {
    setScore(0);
    setGame("menu");
  };
  return (
    <div className="finished">
      <h1>Quiz Finished</h1>
      <h3>{userName}</h3>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};
export default EndScreen;
