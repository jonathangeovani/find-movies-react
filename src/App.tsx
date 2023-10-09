import { useEffect, useState } from "react";
import { About, Home } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";

let storedLanguage = localStorage.getItem("LANG");

const App = () => {
  const [language, setLanguage] = storedLanguage
    ? useState(storedLanguage)
    : useState("pt-BR");

  useEffect(() => {
    localStorage.setItem("LANG", language);
  }, [language]);

  return (
    <Router>
      <div className="app">
        <Nav language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About language={language} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
