import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary App</h1>
        </header>
        <main className="main-section">
          <Dictionary />
        </main>
        <footer>Coded by Gabriela Canelas</footer>
      </div>
    </div>
  );
}
