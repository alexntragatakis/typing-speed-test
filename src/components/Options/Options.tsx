import "./Options.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { testOptions } from "../../types/testOptions";

interface Props {
  onSave: (data: testOptions) => void;
}

const Options = ({ onSave }: Props) => {
  const [wordCount, setWordCount] = useState<number>(25);
  const [style, setStyle] = useState<testOptions["style"]>({
    backGroundColor: "--default-pagebg",
    textBoxColor: "--default-boxbg",
    backColor: "--default-black-back-text",
    frontCorrColor: "--default-correctly-typed-text",
    frontIncColor: "--default-incorrectly-typed-text",
  });

  const handleSave = () => {
    onSave({
      wordCount: wordCount,
      style: style,
    });
  };

  return (
    <>
      <h1>Test Options</h1>
      <div>Word Count:</div>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          checked={wordCount === 10}
          onClick={() => setWordCount(10)}
        />
        <label className="btn btn-outline-secondary" htmlFor="btnradio1">
          10
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
          checked={wordCount === 25}
          onClick={() => setWordCount(25)}
        />
        <label className="btn btn-outline-secondary" htmlFor="btnradio2">
          25
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
          autoComplete="off"
          checked={wordCount === 50}
          onClick={() => setWordCount(50)}
        />
        <label className="btn btn-outline-secondary" htmlFor="btnradio3">
          50
        </label>
      </div>
      <div>
        <button onClick={handleSave}>Save</button>
        <Link to="/typing-speed-test/">
          <button>Back</button>
        </Link>
      </div>
    </>
  );
};

export default Options;
