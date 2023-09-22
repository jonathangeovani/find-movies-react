interface MovieCardProps {
  Title: string;
  Year: string;
  imdbID?: string;
  Type: string;
  Poster: string;
}

const MovieCard = ({ Title, Year, Type, Poster }: MovieCardProps) => {
  return (
    <div className="movie">
      <div>
        <p>{Year}</p>
      </div>
      <div>
        <img
          src={Poster !== "N/A" ? Poster : "http://via.placeholder.com/300x400"}
          alt={Title}
        />
      </div>
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
