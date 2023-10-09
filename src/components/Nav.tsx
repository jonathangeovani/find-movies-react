import { Link } from "react-router-dom";

interface NavProps {
  language: string;
  setLanguage: (newLanguage: string) => void;
}

export default function Nav(props: NavProps) {
  return (
    <nav>
      {props.language === "pt-BR" ? (
        <div className="languages">
          <span
            onClick={() => {
              props.setLanguage("en-US");
            }}
          >
            EN
          </span>
          |
          <span
            className="activated"
            onClick={() => props.setLanguage("pt-BR")}
          >
            BR
          </span>
        </div>
      ) : (
        <div className="languages">
          <span
            className="activated"
            onClick={() => {
              props.setLanguage("en-US");
            }}
          >
            EN
          </span>
          |<span onClick={() => props.setLanguage("pt-BR")}>BR</span>
        </div>
      )}
      {props.language === "pt-BR" ? (
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
