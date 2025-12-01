import { useState } from "react";
import "./styles/variables.css";
import "./styles/App.css";
import TextBox from "./components/TextBox/TextBox";
import Results from "./components/Results/Results";

function App() {
  const [showResults, setDisplayResults] = useState(false);

  return (
    <>
      <div className="centered-page">
        {!showResults ? (
          <TextBox
            backClassName="black-back-text"
            frontCorrClassName="correctly-typed-text"
            frontIncClassName="incorrectly-typed-text"
            wordCount={20}
            onFinished={() => setDisplayResults(true)}
          ></TextBox>
        ) : (
          <Results WPM={100}></Results>
        )}
      </div>
    </>
  );
}

export default App;
