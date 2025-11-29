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
      <div className={frontCorrClassName}>{typed}</div>
      <div className={backClassName}>{wordList}</div>
    </div>
  );
};

export default TextBox;
