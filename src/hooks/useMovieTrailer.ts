import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { MovieTrailerData } from "../types";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = import.meta.env.VITE_API_KEY;

async function getMovieTrailer(
  movieId: string,
  language: string
): AxiosPromise<MovieTrailerData> {
  return axios.get(
    language !== ""
      ? `${API_URL}movie/${movieId}/videos?language=${language}&api_key=${API_KEY}`
      : `${API_URL}movie/${movieId}/videos?api_key=${API_KEY}`
  );
}

export function useMovieTrailer(movieId: string, language = "") {
  const query = useQuery({
    queryFn: () => getMovieTrailer(movieId, language),
    queryKey: ["movie-trailer"],
    retry: 2,
  });

  return {
    ...query,
    id: query.data?.data.id,
    results: query.data?.data.results,
    refetchTrailer: query.refetch,
  };
}
