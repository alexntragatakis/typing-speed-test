import "./Results.css";
import type { processedResult } from "../../utils/calculateStats";

interface Props {
  result: processedResult;
  onRestart: () => void;
}

const Results = ({ result, onRestart }: Props) => {
  return (
    <div className="results-page-wrap">
      <div className="results">
        {result.WPM} WPM {result.accuracy}% Accuracy
      </div>
      <div className="buttons">
        <button className="" onClick={onRestart}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default Results;
