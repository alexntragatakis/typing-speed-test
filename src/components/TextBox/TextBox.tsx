import generateText from "../../utils/generateText.ts";
import "./TextBox.css";

interface Props {
  wordCount: number;
  className: string;
}

const TextBox = ({ wordCount, className }: Props) => {
  return <div className={className}>{generateText({ wordCount })}</div>;
};

export default TextBox;
