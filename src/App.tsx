import { useState } from "react";
import "./styles/App.css";
import TextBox from "./components/TextBox/TextBox";
import Results from "./components/Results/Results";
import ControlBar from "./components/ControlBar/ControlBar";
import { useTestOptionsContext } from "./context/TestOptionsContext";
import type { newScore } from "./types/scoreTypes.ts";

function App() {
  const { testOptions } = useTestOptionsContext();

  const [restartSignal, setRestartSignal] = useState(0);

  const [showResults, setDisplayResults] = useState(false);
  const [score, setScore] = useState<newScore | null>(null);

  const handleFinished = (score: newScore) => {
    setScore(score);
    setDisplayResults(true);
  };

  const handleRestart = () => {
    setScore(null);
    setDisplayResults(false);
    setRestartSignal((n) => n + 1);
  };

  return (
    <div className="page">
      <h1>Typing Speed Test</h1>
      <div className="centered-page">
        <div className="content">
          {!showResults ? (
            <TextBox
              wordCount={testOptions.wordCount}
              restartSignal={restartSignal}
              onFinished={handleFinished}
            ></TextBox>
          ) : (
            <Results result={score!}></Results>
          )}
        </div>
        <div className="bottom-row">
          <ControlBar onRestart={handleRestart} />
        </div>
      </div>
    </div>
  );
}

export default App;
