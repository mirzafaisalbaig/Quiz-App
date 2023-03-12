import "./App.css";
import EndSCreen from "./components/EndSCreen";
import { GameContext } from "./helpers/context";
import Menu from "./components/Menu";
import Quiz from "./components/quiz";

import { useState } from "react";
function App() {
  const [game, setGame] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>QUIZ APP</h1>
      <GameContext.Provider
        value={{ game, setGame, userName, setUserName, score, setScore }}
      >
        {game === "menu" && <Menu />}
        {game === "playing" && <Quiz />}
        {game === "finished" && <EndSCreen />}
      </GameContext.Provider>
    </div>
  );
}

export default App;
