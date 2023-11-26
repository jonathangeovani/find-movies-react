import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { PersonDetailsData } from "../types";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = import.meta.env.VITE_API_KEY;

async function getPersonDetails(
  personId: string,
  language: string
): AxiosPromise<PersonDetailsData> {
  return axios.get(
    `${API_URL}person/${personId}?language=${language}&api_key=${API_KEY}`
  );
}

export function usePersonDetails(personId: string, language: string) {
  const query = useQuery({
    queryFn: () => getPersonDetails(personId, language),
    queryKey: ["person-details"],
    retry: 2,
  });

  return {
    ...query,
    id: query.data?.data.id,
    name: query.data?.data.name,
    gender: query.data?.data.gender,
    profile: query.data?.data.profile_path,
    birth_place: query.data?.data.place_of_birth,
    birthday: query.data?.data.birthday,
    deathday: query.data?.data.deathday,
    department: query.data?.data.known_for_department,
    biography: query.data?.data.biography,
    detailsIsFetching: query.isFetching,
    refetchDetails: query.refetch,
  };
}
