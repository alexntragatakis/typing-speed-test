import { useState } from "react";
import "./styles/variables.css";
import "./styles/App.css";
import TextBox from "./components/TextBox/TextBox";
import Results from "./components/Results/Results";
import { calculateWPM, calculateAccuracy } from "./utils/calculateStats";
import type { rawResult } from "./utils/calculateStats";

function App() {
  const [showResults, setDisplayResults] = useState(false);
  const [rawResults, setRawResults] = useState<rawResult | null>(null);

  const handleFinished = (raw: rawResult) => {
    setRawResults(raw);
    setDisplayResults(true);
  };

  return (
    <>
      <div className="centered-page">
        {!showResults ? (
          <TextBox
            backClassName="black-back-text"
            frontCorrClassName="correctly-typed-text"
            frontIncClassName="incorrectly-typed-text"
            wordCount={20}
            onFinished={handleFinished}
          ></TextBox>
        ) : (
          <Results
            WPM={calculateWPM(rawResults!)}
            acc={calculateAccuracy(rawResults!)}
          ></Results>
        )}
      </div>
    </>
  );
}

export default App;
