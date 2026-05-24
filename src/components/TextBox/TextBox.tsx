import "./TextBox.css";
import { useState, useEffect, useRef } from "react";
import { useScores } from "../../hooks/useScores.ts";
import generateText from "../../utils/generateText.ts";
import { calculateResults } from "../..//utils/calculateStats";
import type { newScore } from "../../types/scoreTypes.ts";

interface Props {
  wordCount: number;
  restartSignal: number;
  onFinished: (data: newScore) => void;
}

const TextBox = ({ wordCount, restartSignal, onFinished }: Props) => {
  const [typed, setTyped] = useState("");
  const [wordList, setWordList] = useState(
    generateText({ wordCount: wordCount }),
  );
  const { submitScore } = useScores();

  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Typing
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key.length === 1) {
      setTyped((typed) => typed + e.key);
    }
    if (e.key === "Backspace") {
      setTyped((typed) => typed.slice(0, -1));
    }
  };

  // Timer
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

  // Finish test
  useEffect(() => {
    if (typed.length >= wordList.length) {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
      if (startTimeRef.current !== null) {
        const elapsedTime = Date.now() - startTimeRef.current;
        startTimeRef.current = null;

        const result: newScore = calculateResults({
          time: elapsedTime,
          typed,
          wordList,
        });

        submitScore(result);
        onFinished(result);
      }
    }
  }, [typed, submitScore, onFinished]);

  // Restart test
  useEffect(() => {
    setStarted(false);
    setWordList(generateText({ wordCount: wordCount }));
    setTyped("");
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      setTime(0);
    }
    if (startTimeRef.current !== null) {
      startTimeRef.current = null;
    }
  }, [restartSignal]);

  // Render
  return (
    <div>
      Time: {time}s
      <div className="textbox-wrap" tabIndex={0} onKeyDown={handleKeyDown}>
        {typed.split("").map((_, index) => {
          if (typed[index] !== " " && wordList[index] === " ") {
            return (
              <span key={index} className="incorrectly-typed-text">
                -
              </span>
            );
          } else {
            return (
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
            );
          }
        })}
        <span className="caret" />
        {wordList.split("").map(
          (char, index) =>
            index >= typed.length && (
              <span key={index} className={"back-text"}>
                {char}
              </span>
            ),
        )}
      </div>
    </div>
  );
};

export default TextBox;
