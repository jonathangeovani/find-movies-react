import { useEffect, useState } from "react";
import "./App.css";
import { About, Home } from "./pages";

let storedLanguage = localStorage.getItem("LANG");

const App = () => {
  const [language, setLanguage] = storedLanguage
    ? useState(storedLanguage)
    : useState("pt-BR");
  const [page, setPage] = useState(() => {
    return "home";
  });

  useEffect(() => {
    localStorage.setItem("LANG", language);
  }, [language]);

  return (
    <div className="app">
      <nav>
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
            <a onClick={() => setPage("home")}>Página Inicial</a>
            <a onClick={() => setPage("about")}>Sobre</a>
          </div>
        ) : (
          <div className="nav-links">
            <a onClick={() => setPage("home")}>Home</a>
            <a onClick={() => setPage("about")}>About</a>
          </div>
        )}
      </nav>
      {page === "home" && <Home language={language} />}
      {page === "about" && <About language={language} />}
    </div>
  );
};

export default App;
