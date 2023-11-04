import { SetURLSearchParams } from "react-router-dom";

export type HomeContextContent = {
  searchTerm: string | null;
  setSearchParams: SetURLSearchParams;
  currentPage: number;
  // setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  movies: [] | undefined;
  totalPages: number | undefined;
  totalResults: number | undefined;
  isFetching: boolean;
  refetch: () => void;
};
