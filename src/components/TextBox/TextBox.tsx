import { useState } from "react";
import generateText from "../../utils/generateText.ts";
import "./TextBox.css";

interface Props {
  wordCount: number;
  backClassName: string;
  frontCorrClassName: string;
  frontIncClassName: string;
}

const TextBox = ({
  wordCount,
  backClassName,
  frontCorrClassName,
  frontIncClassName,
}: Props) => {
  const [typed, setTyped] = useState("");
  const [wordList] = useState(generateText({ wordCount }));

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key.length === 1) {
      setTyped((typed) => typed + e.key);
    }
    if (e.key === "Backspace") {
      setTyped((typed) => typed.slice(0, -1));
    }
  };

  return (
    <div className="text-wrapper" tabIndex={0} onKeyDown={handleKeyDown}>
      {typed.split("").map((char, index) => (
        <span
          key={index}
          className={
            typed[index] === wordList[index]
              ? frontCorrClassName
              : frontIncClassName
          }
        >
          {char}
        </span>
      ))}
      {wordList.split("").map(
        (char, index) =>
          index >= typed.length && (
            <span key={index} className={backClassName}>
              {char}
            </span>
          )
      )}
    </div>
  );
};

export default TextBox;
