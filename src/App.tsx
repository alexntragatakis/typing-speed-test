import { useState } from "react";
import "./styles/App.css";
import TextBox from "./components/TextBox/TextBox";
import Results from "./components/Results/Results";
import ControlBar from "./components/ControlBar/ControlBar";
import { calculateResults } from "./utils/calculateStats";
import type { rawResult } from "./types/resultTypes.ts";

function App() {
  const [restartSignal, setRestartSignal] = useState(0);

  const [showResults, setDisplayResults] = useState(false);
  const [rawResults, setRawResults] = useState<rawResult | null>(null);

  const handleFinished = (raw: rawResult) => {
    setRawResults(raw);
    setDisplayResults(true);
  };

  const handleRestart = () => {
    setRawResults(null);
    setDisplayResults(false);
    setRestartSignal((n) => n + 1);
  };

  return (
    <div className="centered-page">
      <div className="content">
        {!showResults ? (
          <TextBox
            wordCount={25}
            restartSignal={restartSignal}
            onFinished={handleFinished}
          ></TextBox>
        ) : (
          <Results result={calculateResults(rawResults!)}></Results>
        )}
      </div>
      <div className="bottom-row">
        <ControlBar onRestart={handleRestart} />
      </div>
    </div>
  );
}

export default App;
