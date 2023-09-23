interface MovieCardProps {
  Title: string;
  Year: string;
  imdbID?: string;
  Vote: string;
  Poster: string;
}

const MovieCard = ({ Title, Year, Vote, Poster }: MovieCardProps) => {
  return (
    <div className="movie">
      <div>
        <p>{Vote} / 10</p>
      </div>
      <div>
        <img
          src={
            Poster
              ? "https://image.tmdb.org/t/p/w500/" + Poster
              : "https://via.placeholder.com/300x400"
          }
          alt={Title}
        />
      </div>
      <div>
        <span>{Year.slice(0, 4)}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
