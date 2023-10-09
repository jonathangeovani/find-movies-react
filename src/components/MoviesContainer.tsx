import { MovieCard } from "../components";

interface MoviesContainerProps {
  movies: never[];
}

export default function MoviesContainer({ movies }: MoviesContainerProps) {
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
