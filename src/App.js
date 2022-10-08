import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} className="logo" alt="dictionary app logo"></img>
        </header>
        <main className="m-3">
          <Dictionary />
        </main>
      </div>
    </div>
  );
}

export default App;
