import { useState } from "react";
import "./App.css";
import { About, Home } from "./pages";

const App = () => {
  const [language, setLanguage] = useState("pt-BR");
  let Container;

  switch (window.location.pathname) {
    case "/":
      Container = <Home language={language} />;
      break;
    case "/about":
      Container = <About language={language} />;
  }

  return (
    <div className="app">
      {language === "pt-BR" ? (
        <div className="languages">
          <span
            onClick={() => {
              setLanguage("en-US");
            }}
          >
            EN
          </span>
          |
          <span className="activated" onClick={() => setLanguage("pt-BR")}>
            BR
          </span>
        </div>
      ) : (
        <div className="languages">
          <span
            className="activated"
            onClick={() => {
              setLanguage("en-US");
            }}
          >
            EN
          </span>
          |<span onClick={() => setLanguage("pt-BR")}>BR</span>
        </div>
      )}
      {language === "pt-BR" ? (
        <div className="nav-links">
          <a href="/">Página Inicial</a>
          <a href="/about">Sobre</a>
        </div>
      ) : (
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </div>
      )}
      {Container}
    </div>
  );
};

export default App;
