import { Link } from "react-router-dom";
import "./style.scss";
import Nav from "../Nav";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to={"/"}>
          <h1>Find Movies</h1>
        </Link>
        <Nav />
      </div>
    </header>
  );
}
