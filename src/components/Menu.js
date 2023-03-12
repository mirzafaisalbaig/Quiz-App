import "../App.css";
import { useContext } from "react";
import { GameContext } from "../helpers/context";
export default function Menu() {
  const { game, setGame, userName, setUserName } = useContext(GameContext);
  return (
    <div className="Menu">
      <h3>Enter Your Name:</h3>
      <input
        type="text"
        placeholder="ex.john wick"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGame("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}
