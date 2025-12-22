import { useState, useEffect, useRef } from "react";
import generateText from "../../utils/generateText.ts";
import type { rawResult } from "../../utils/calculateStats.ts";
import "./TextBox.css";

interface Props {
  wordCount: number;
  backClassName: string;
  frontCorrClassName: string;
  frontIncClassName: string;
  restartSignal: number;
  onFinished: (data: rawResult) => void;
}

const TextBox = ({
  wordCount,
  backClassName,
  frontCorrClassName,
  frontIncClassName,
  restartSignal,
  onFinished,
}: Props) => {
  const [typed, setTyped] = useState("");
  const [wordList, setWordList] = useState(generateText({ wordCount }));

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
    setWordList(generateText({ wordCount }));
    setTyped("");
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      setTime(0);
    }
  }, [restartSignal]);

  return (
    <div>
      Time: {time}s
      <div className="textbox-wrap" tabIndex={0} onKeyDown={handleKeyDown}>
        {typed.split("").map((_, index) => (
          <span
            key={index}
            className={
              typed[index] === wordList[index]
                ? frontCorrClassName
                : frontIncClassName
            }
          >
            {wordList[index]}
          </span>
        ))}
        <span className="caret" />
        {wordList.split("").map(
          (char, index) =>
            index >= typed.length && (
              <span key={index} className={backClassName}>
                {char}
              </span>
            )
        )}
      </div>
    </div>
  );
};

export default TextBox;
