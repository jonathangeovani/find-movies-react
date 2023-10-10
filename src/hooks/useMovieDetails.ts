import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { MovieDetailsData } from "../types";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = import.meta.env.VITE_API_KEY;

async function getMovieDetails(
  movieId: string,
  language: string
): AxiosPromise<MovieDetailsData> {
  return axios.get(
    `${API_URL}movie/${movieId}?language=${language}&api_key=${API_KEY}`
  );
}

export function useMovieDetails(movieId: string, language: string) {
  const query = useQuery({
    queryFn: () => getMovieDetails(movieId, language),
    queryKey: ["movie-details"],
    retry: 2,
  });

  return {
    ...query,
    banner: query.data?.data.backdrop_path,
    poster: query.data?.data.poster_path,
    title: query.data?.data.title,
    year: query.data?.data.release_date,
    categories: query.data?.data.genres,
    duration: query.data?.data.runtime,
    overview: query.data?.data.overview,
  };
}
