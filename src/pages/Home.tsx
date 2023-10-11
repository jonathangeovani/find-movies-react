import { createContext, useEffect, useState } from "react";
import { SearchInput, SearchResults } from "../components";
import { MoviesContainer, Pagination } from "../components";
import { useMovies, useAppContext } from "../hooks";
import { HomeContextContent } from "../types";

export const HomeContext = createContext<HomeContextContent | null>(null);

interface HomeProps {
  title: string;
}

const Home = ({ title }: HomeProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { language } = useAppContext();
  const { movies, totalPages, totalResults, isFetching, refetch } = useMovies(
    language,
    searchTerm,
    currentPage
  );

  useEffect(() => {
    refetch();
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
    refetch();
  }, [currentPage]);

  return (
    <HomeContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        currentPage,
        setCurrentPage,
        movies,
        totalPages,
        totalResults,
        isFetching,
        refetch,
      }}
    >
      <h1>{title} &nbsp;</h1>
      <SearchInput />
      <SearchResults />
      {!isFetching && <MoviesContainer />}
      {!isFetching && <Pagination />}
    </HomeContext.Provider>
  );
};

export default Home;
