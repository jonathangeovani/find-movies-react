import { MovieCard } from "../components";
import { useHomeContext } from "../hooks/useHomeContext";

export default function MoviesContainer() {
  const { movies } = useHomeContext();

  return (
    <div className="container">
      {movies?.map((movie) => (
        <MovieCard
          key={movie["id"]}
          Title={movie["title"]}
          Year={movie["release_date"]}
          Vote={movie["vote_average"]}
          Poster={movie["poster_path"]}
        />
      ))}
    </div>
  );
}
