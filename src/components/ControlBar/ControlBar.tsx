import "./ControlBar.css";

interface Props {
  onRestart: () => void;
}

const ControlBar = ({ onRestart }: Props) => {
  return (
    <div className="buttons">
      <button className="" onClick={onRestart}>
        Restart
      </button>
    </div>
  );
};

export default ControlBar;
