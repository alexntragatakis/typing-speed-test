import { useEffect, useState } from "react";
import "./ControlBar.css";
import { Link } from "react-router-dom";

interface Props {
  onRestart: () => void;
}

const ControlBar = ({ onRestart }: Props) => {
  const [bootstrapClass, setBootstrapClass] = useState<string>(
    "btn-outline-secondary"
  );
  useEffect(() => {
    const root = document.documentElement;
    if (root.style.getPropertyValue("--pagebg") === "var(--light-pagebg)") {
      setBootstrapClass("btn-outline-dark");
    } else if (
      root.style.getPropertyValue("--pagebg") === "var(--dark-pagebg)"
    ) {
      setBootstrapClass("btn-outline-light");
    } else {
      setBootstrapClass("btn-outline-secondary");
    }
  }, []);

  return (
    <div className="buttons">
      <button className={`btn ${bootstrapClass}`} onClick={onRestart}>
        Restart
      </button>
      <Link to="/typing-speed-test/options">
        <button className={`btn ${bootstrapClass}`}>Options</button>
      </Link>
    </div>
  );
};

export default ControlBar;
