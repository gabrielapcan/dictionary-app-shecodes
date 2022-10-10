import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} alt="dictionary app logo" className="app-logo" />
        </header>
        <main className="main-section">
          <Dictionary default="home" />
        </main>
        <footer>
          <a
            href="https://github.com/gabrielapcan/dictionary-app-shecodes"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            label="github repository"
          >
            Open-source
          </a>{" "}
          code using React by{" "}
          <a
            href="https://relaxed-puppy-1f4f1f.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            label="portfolio website"
          >
            Gabriela Canelas
          </a>
          <p className="social-links">
            <a
              className="footer-link"
              href="https://github.com/gabrielapcan/"
              target="_blank"
              rel="noopener noreferrer"
              label="GitHub"
            >
              <i className="fa-brands fa-github-alt"></i>
            </a>
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/gabrielacanelas"
              target="_blank"
              rel="noopener noreferrer"
              label="LinkedIn profile"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              className="footer-link"
              href="https://www.instagram.com/gabrielapcan/"
              target="_blank"
              rel="noopener noreferrer"
              label="Instagram profile"
            >
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
