import MoviesContainer from ".";
import { render, screen } from "@testing-library/react";

const mockMovies = [
  {
    id: 1,
    title: "test title 1",
    release_date: "1234/12/1",
    vote_average: 5,
    poster_path: "test poster 2",
  },
  {
    id: 2,
    title: "test title 2",
    release_date: "1234/12/1",
    vote_average: 5,
    poster_path: "test poster 2",
  },
];

vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
}));

vi.mock("../../hooks", () => ({
  useHomeContext: () => ({
    movies: mockMovies,
  }),
}));

describe("MoviesContaier", () => {
  it("should render properly", () => {
    render(<MoviesContainer />);

    const moviesContainer = screen.getByText("", { selector: "div.container" });
    const movieCard = screen.getAllByText("", { selector: "div.movie" });

    expect(moviesContainer).toBeInTheDocument();
    expect(movieCard).toHaveLength(2);
  });
});
