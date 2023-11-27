import { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Home,
  PageNotFound,
  MovieDetails,
  PersonDetails,
} from "./pages";
import { Footer, Nav } from "./components";
import "./App.scss";
import { AppContextContent } from "./types";

let storedLanguage = localStorage.getItem("LANG");
export const AppContext = createContext<AppContextContent | null>(null);

const App = () => {
  const [language, setLanguage] = storedLanguage
    ? useState(storedLanguage)
    : useState("pt-BR");

  useEffect(() => {
    localStorage.setItem("LANG", language);
  }, [language]);

  return (
    <AppContext.Provider value={{ language, setLanguage }}>
      <Router>
        <Nav />
        <main className="app">
          <Routes>
            <Route path="/" element={<Home title={"Find Movies"} />} />
            <Route path="/about" element={<About />} />
            <Route path="/movie/:movieId" element={<MovieDetails />} />
            <Route path="/person/:personId" element={<PersonDetails />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
};

export default App;
