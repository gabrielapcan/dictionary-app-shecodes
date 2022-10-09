import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} alt="dictionary app logo" />
        </header>
        <main className="main-section">
          <Dictionary default="home" />
        </main>
        <footer>Coded by Gabriela Canelas</footer>
      </div>
    </div>
  );
}
