export type HomeContextContent = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  movies: [] | undefined;
  totalPages: number | undefined;
  totalResults: number | undefined;
  refetch: () => void;
};
