import "./App.scss";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Boryspil" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anna Rudenko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/RudenkoAnna/application-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://stunning-taffy-859f8a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>{" "}
          and{" "}
          <a
            href="https://adjusted-second-project.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            backend project hosted on Render
          </a>
        </footer>
      </div>
    </div>
  );
}
