import logo from "./logo.svg";
import "./App.css";
import { CountButton } from "./CountButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>fldorxm tlwkrgkqslek</code> and save to reload.
        </p>
        <p>리액트 시작합니다.</p>
        <CountButton>아이들</CountButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
