import "./Results.css";
import type { newScore } from "../../types/scoreTypes";

interface Props {
  result: newScore;
}

const Results = ({ result }: Props) => {
  return (
    <div className="results-page-wrap">
      <div className="results">
        {result.wpm} WPM {result.accuracy}% Accuracy
      </div>
    </div>
  );
};

export default Results;
