import { useState } from "react";
import "./styles/App.css";
import TextBox from "./components/TextBox/TextBox";
import Results from "./components/Results/Results";
import ControlBar from "./components/ControlBar/ControlBar";
import { calculateResults } from "./utils/calculateStats";
import type { rawResult } from "./utils/calculateStats";

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
            testOptions={{
              wordCount: 25,
              style: {
                backGroundColor: "--default-pagebg",
                textBoxColor: "--default-boxbg",
                backColor: "--default-black-back-text",
                frontCorrColor: "--default-correctly-typed-text",
                frontIncColor: "--default-incorrectly-typed-text",
              },
            }}
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
