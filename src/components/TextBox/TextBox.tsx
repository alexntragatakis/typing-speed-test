import "./TextBox.css";
import { useState, useEffect, useRef } from "react";
import generateText from "../../utils/generateText.ts";
import type { rawResult } from "../../types/resultTypes.ts";
import type { testOptions } from "../../types/testOptions.ts";

interface Props {
  testOptions: testOptions;
  restartSignal: number;
  onFinished: (data: rawResult) => void;
}

const TextBox = ({ testOptions, restartSignal, onFinished }: Props) => {
  const [typed, setTyped] = useState("");
  const [wordList, setWordList] = useState(
    generateText({ wordCount: testOptions.wordCount })
  );

  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key.length === 1) {
      setTyped((typed) => typed + e.key);
    }
    if (e.key === "Backspace") {
      setTyped((typed) => typed.slice(0, -1));
    }
  };

  if (!started && typed.length > 0) {
    setStarted(true);
    if (startTimeRef.current === null) {
      startTimeRef.current = Date.now();
    }
  }

  useEffect(() => {
    if (started && timerRef.current === null) {
      timerRef.current = window.setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [started]);

  useEffect(() => {
    if (typed.length >= wordList.length) {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
      if (startTimeRef.current !== null) {
        const elapsedTime = Date.now() - startTimeRef.current;
        startTimeRef.current = null;
        const result: rawResult = {
          time: elapsedTime,
          typed: typed,
          wordList: wordList,
        };
        onFinished(result);
      }
    }
  }, [typed, onFinished]);

  useEffect(() => {
    setStarted(false);
    setWordList(generateText({ wordCount: testOptions.wordCount }));
    setTyped("");
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      setTime(0);
    }
    if (startTimeRef.current !== null) {
      startTimeRef.current = null;
    }
  }, [restartSignal]);

  return (
    <div>
      Time: {time}s
      <div
        className="textbox-wrap"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        style={{
          ["--front-correct-color" as any]: testOptions.style.frontCorrColor,
          ["--front-incorrect-color" as any]: testOptions.style.frontIncColor,
          ["--back-color" as any]: testOptions.style.backColor,
        }}
      >
        {typed.split("").map((_, index) => (
          <span
            key={index}
            className={
              typed[index] === wordList[index]
                ? "correctly-typed-text"
                : "incorrectly-typed-text"
            }
          >
            {wordList[index]}
          </span>
        ))}
        <span className="caret" />
        {wordList.split("").map(
          (char, index) =>
            index >= typed.length && (
              <span key={index} className={"back-text"}>
                {char}
              </span>
            )
        )}
      </div>
    </div>
  );
};

export default TextBox;
