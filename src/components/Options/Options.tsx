import "./Options.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { testOptions } from "../../utils/testOptions";

interface Props {
  onSave: (data: testOptions) => void;
}

const Options = ({ onSave }: Props) => {
  const handleSave = () => {};

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
          defaultChecked
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
