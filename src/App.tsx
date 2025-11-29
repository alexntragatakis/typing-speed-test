import "./styles/variables.css";
import "./styles/App.css";
import TextBox from "./components/TextBox/TextBox";

function App() {
  return (
    <>
      <div className="centered-page">
        <div className="textbox-wrap">
          <TextBox className="text-box" wordCount={20}></TextBox>
        </div>
      </div>
    </>
  );
}

export default App;
