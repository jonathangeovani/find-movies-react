import { createContext, useEffect } from "react";
import { SearchInput, SearchResults } from "../../components";
import { MoviesContainer, Pagination } from "../../components";
import { useMovies, useAppContext } from "../../hooks";
import { HomeContextContent } from "../../types";
import { useSearchParams } from "react-router-dom";

export const HomeContext = createContext<HomeContextContent | null>(null);

interface HomeProps {
  title: string;
}

const Home = ({ title }: HomeProps) => {
  const [searchParams, setSearchParams] = useSearchParams({ q: "", p: "1" });
  const searchTerm = searchParams.get("q");
  const currentPage = Number(searchParams.get("p") || 1);
  const { language } = useAppContext();
  const { movies, totalPages, totalResults, isFetching, refetch } = useMovies(
    language,
    searchTerm || "",
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
        setSearchParams,
        currentPage,
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
