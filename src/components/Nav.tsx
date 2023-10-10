import { Link } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";

export default function Nav() {
  const { language, setLanguage } = useAppContext();
  return (
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
          <Link to="/">Página Inicial</Link>
          <Link to="/about">Sobre</Link>
        </div>
      ) : (
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      )}
    </nav>
  );
}
