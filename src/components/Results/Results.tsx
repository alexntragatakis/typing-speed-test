import "./Results.css";

interface Props {
  WPM: number;
  acc: number;
}

const Results = ({ WPM, acc }: Props) => {
  return (
    <div>
      {WPM} WPM {acc}% Accuracy
    </div>
  );
};

export default Results;
