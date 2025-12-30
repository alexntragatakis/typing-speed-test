import "./Options.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { testOptions, style } from "../../types/testOptions";

// TODO: Fix settings resetting when navigating to options

const Options = () => {
  const defaultTheme: style = {
    backGroundColor: "--default-pagebg",
    textBoxColor: "--default-boxbg",
    backColor: "--default-black-back-text",
    frontCorrColor: "--default-correctly-typed-text",
    frontIncColor: "--default-incorrectly-typed-text",
  };

  const lightTheme: style = {
    backGroundColor: "--light-pagebg",
    textBoxColor: "--light-boxbg",
    backColor: "--light-black-back-text",
    frontCorrColor: "--light-correctly-typed-text",
    frontIncColor: "--light-incorrectly-typed-text",
  };

  const darkTheme: style = {
    backGroundColor: "--dark-pagebg",
    textBoxColor: "--dark-boxbg",
    backColor: "--dark-black-back-text",
    frontCorrColor: "--dark-correctly-typed-text",
    frontIncColor: "--dark-incorrectly-typed-text",
  };

  const [wordCount, setWordCount] = useState<number>(25);
  const [appStyle, setAppStyle] = useState<style>(defaultTheme);

  useEffect(() => {
    const root = document.documentElement;

    /* change the runtime variables */
    root.style.setProperty("--pagebg", "var(" + appStyle.backGroundColor + ")");
    root.style.setProperty("--boxbg", "var(" + appStyle.textBoxColor + ")");
    root.style.setProperty("--back-text", "var(" + appStyle.backColor + ")");
    root.style.setProperty(
      "--correctly-typed-text",
      "var(" + appStyle.frontCorrColor + ")"
    );
    root.style.setProperty(
      "--incorrectly-typed-text",
      "var(" + appStyle.frontIncColor + ")"
    );
  }, [appStyle]);

  return (
    <>
      <h1>Test Options</h1>
      <div>Word Count:</div>
      <div className="btn-group" role="group" aria-label="word count buttons">
        <input
          type="radio"
          className="btn-check"
          name="btnradio-wordcount"
          id="wc-10"
          autoComplete="off"
          checked={wordCount === 10}
          onClick={() => setWordCount(10)}
        />
        <label className="btn btn-outline-secondary" htmlFor="wc-10">
          10
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio-wordcount"
          id="wc-25"
          autoComplete="off"
          checked={wordCount === 25}
          onClick={() => setWordCount(25)}
        />
        <label className="btn btn-outline-secondary" htmlFor="wc-25">
          25
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio-wordcount"
          id="wc-50"
          autoComplete="off"
          checked={wordCount === 50}
          onClick={() => setWordCount(50)}
        />
        <label className="btn btn-outline-secondary" htmlFor="wc-50">
          50
        </label>
      </div>
      <div>Theme:</div>
      <div className="btn-group" role="group" aria-label="theme buttons">
        <input
          type="radio"
          className="btn-check"
          name="btnradio-theme"
          id="t-light"
          autoComplete="off"
          checked={appStyle.backColor === lightTheme.backColor}
          onChange={() => setAppStyle(lightTheme)}
        />
        <label className="btn btn-outline-secondary" htmlFor="t-light">
          Light
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio-theme"
          id="t-default"
          autoComplete="off"
          checked={appStyle.backColor === defaultTheme.backColor}
          onChange={() => setAppStyle(defaultTheme)}
        />
        <label className="btn btn-outline-secondary" htmlFor="t-default">
          Default
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio-theme"
          id="t-dark"
          autoComplete="off"
          checked={appStyle.backColor === darkTheme.backColor}
          onChange={() => setAppStyle(darkTheme)}
        />
        <label className="btn btn-outline-secondary" htmlFor="t-dark">
          Dark
        </label>
      </div>
      <Link to="/typing-speed-test/">
        <button>Back</button>
      </Link>
    </>
  );
};

export default Options;
