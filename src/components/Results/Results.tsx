import "./Results.css";
import type { processedResult } from "../../utils/calculateStats";

interface Props {
  result: processedResult;
}

const Results = ({ result }: Props) => {
  return (
    <div className="results-page-wrap">
      <div className="results">
        {result.WPM} WPM {result.accuracy}% Accuracy
      </div>
    </div>
  );
};

export default Results;
