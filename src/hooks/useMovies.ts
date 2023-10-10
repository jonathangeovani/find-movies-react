import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = import.meta.env.VITE_API_KEY;

interface MovieData {
  page: number;
  results: [];
  total_pages: number;
  total_results: number;
}

async function getMovies(
  language: string,
  title: string,
  page: number
): AxiosPromise<MovieData> {
  return axios.get(
    title !== ""
      ? `${API_URL}search/movie?query=${title}&language=${language}&page=${page}&api_key=${API_KEY}`
      : `${API_URL}discover/movie?with_genres=10751&language=${language}&page=${page}&api_key=${API_KEY}`
  );
}

export function useMovies(language: string, title: string, page = 1) {
  const query = useQuery({
    queryFn: () => getMovies(language, title, page),
    queryKey: ["all-movies"],
    retry: 2,
  });

  return {
    ...query,
    movies: query.data?.data.results,
    totalPages: query.data?.data.total_pages,
    totalResults: query.data?.data.total_results,
  };
}
