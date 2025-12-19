import "./Results.css";
import type { processedResult } from "../../utils/calculateStats";

interface Props {
  result: processedResult;
}

const Results = ({ result }: Props) => {
  return (
    <div>
      {result.WPM} WPM {result.accuracy}% Accuracy
    </div>
  );
};

export default Results;
