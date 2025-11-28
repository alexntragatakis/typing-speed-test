import generateText from "../utils/generateText.ts";

interface Props {
  wordCount: number;
}

const TextBox = ({ wordCount }: Props) => {
  return <div>{generateText({ wordCount })}</div>;
};

export default TextBox;
