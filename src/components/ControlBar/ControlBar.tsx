import "./ControlBar.css";
import { Link } from "react-router-dom";

interface Props {
  onRestart: () => void;
}

const ControlBar = ({ onRestart }: Props) => {
  return (
    <div className="buttons">
      <button className="" onClick={onRestart}>
        Restart
      </button>
      <Link to="/typing-speed-test/options">
        <button className="">Options</button>
      </Link>
    </div>
  );
};

export default ControlBar;
