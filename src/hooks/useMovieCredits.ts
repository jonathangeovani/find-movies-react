import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { MovieCreditsData } from "../types";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = import.meta.env.VITE_API_KEY;

async function getMovieCredits(
  movieId: string,
  language: string
): AxiosPromise<MovieCreditsData> {
  return axios.get(
    `${API_URL}movie/${movieId}/credits?language=${language}&api_key=${API_KEY}`
  );
}

export function useMovieCredits(movieId: string, language: string) {
  const query = useQuery({
    queryFn: () => getMovieCredits(movieId, language),
    queryKey: ["movie-credits"],
    retry: 2,
  });

  return {
    ...query,
    cast: query.data?.data.cast,
    crew: query.data?.data.crew,
  };
}
