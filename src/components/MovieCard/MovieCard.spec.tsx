import MovieCard from ".";
import { fireEvent, render, screen } from "@testing-library/react";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

const renderMovieCard = () => {
  render(
    <MovieCard
      Title="test title"
      Year="1234/5/6"
      imdbID="id"
      Vote="5"
      Poster="poster"
    />
  );
};

describe("MovieCard", () => {
  it("should render properly", () => {
    renderMovieCard();

    const movieCard = screen.getByText("", { selector: ".movie" });

    expect(movieCard).toBeInTheDocument();
  });

  it("should navigate to /movie/id when click", () => {
    renderMovieCard();

    const movieCard = screen.getByText("", { selector: ".movie" });
    fireEvent.click(movieCard);

    expect(mockNavigate).toHaveBeenCalledWith("/movie/id");
  });

  it("should render the correct vote value", () => {
    renderMovieCard();

    const vote = screen.getByText(/\/ 10/i);

    expect(vote).toHaveTextContent(/5 \/ 10/i);
  });

  it("should render the poster img with correct attributes", () => {
    renderMovieCard();

    const poster = screen.getByRole("img");
    const img = poster.getAttribute("src");
    const alt = poster.getAttribute("alt")?.toLowerCase();

    expect(poster).toBeInTheDocument();
    expect(img).toBe("https://image.tmdb.org/t/p/w500/poster");
    expect(alt).toBe("test title");
  });

  it("should render the correct year value", () => {
    renderMovieCard();

    const year = screen.getByTitle(/release year/i);

    expect(year).toHaveTextContent("1234");
  });

  it("should render the correct title", () => {
    renderMovieCard();

    const heading = screen.getByRole("heading", { level: 3 });

    expect(heading).toHaveTextContent(/test title/i);
  });
});
