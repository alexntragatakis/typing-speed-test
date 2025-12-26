import "./Options.css";
import { Link } from "react-router-dom";

const Options = () => {
  return (
    <>
      <h1>This is the Options page</h1>
      <Link to="/typing-speed-test/">
        <button>Back</button>
      </Link>
    </>
  );
};

export default Options;
