import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { PersonMoviesData } from "../types";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = import.meta.env.VITE_API_KEY;

async function getPersonMovies(
  personId: string,
  language: string
): AxiosPromise<PersonMoviesData> {
  return axios.get(
    `${API_URL}person/${personId}/movie_credits?language=${language}&api_key=${API_KEY}`
  );
}

export function usePersonMovies(personId: string, language: string) {
  const query = useQuery({
    queryFn: () => getPersonMovies(personId, language),
    queryKey: ["person-movies"],
    retry: 2,
  });

  return {
    ...query,
    cast: query.data?.data.cast,
    moviesIsFetching: query.isFetching,
    refetchMovies: query.refetch,
  };
}
