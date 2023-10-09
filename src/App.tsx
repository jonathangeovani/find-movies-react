import { useEffect, useState } from "react";
import "./App.css";
import { About, Home } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

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
        <Navbar language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About language={language} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
