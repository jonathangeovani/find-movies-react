import SearchResults from ".";
import * as customHooks from "../../hooks";
import { render, screen } from "@testing-library/react";

const appContextSpy = vi.spyOn(customHooks, "useAppContext");
const homeContextSpy = vi.spyOn(customHooks, "useHomeContext");

const mockContext = (
  language = "pt-BR",
  totalResults = 1,
  fetching = false
) => {
  appContextSpy.mockReturnValue({
    language: language,
    setLanguage: vi.fn(),
  });

  homeContextSpy.mockReturnValue({
    searchTerm: "",
    setSearchParams: vi.fn(),
    currentPage: 1,
    movies: [],
    totalPages: 1,
    totalResults: totalResults,
    isFetching: fetching,
    refetch: vi.fn(),
  });
};

describe("SearchResults", () => {
  it("should render properly", () => {
    mockContext();

    render(<SearchResults />);
    const results = screen.getByText("", { selector: ".search-results" });
    const heading = screen.getByRole("heading", { level: 2 });

    expect(results).toBeInTheDocument();
    expect(results).toContainElement(heading);
  });

  it("should render heading with correct text in portuguese", () => {
    mockContext("pt-BR", 10);
    render(<SearchResults />);
    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toHaveTextContent(/resultado da busca: 10/i);
  });

  it("should render heading with correct text in english", () => {
    mockContext("en-US", 10);
    render(<SearchResults />);
    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toHaveTextContent(/results: 10/i);
  });

  it("should render heading with not found message in portuguese", () => {
    mockContext("pt-BR", 0);
    render(<SearchResults />);
    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toHaveTextContent(/nenhum filme encontrado/i);
  });

  it("should render heading with not found message in english", () => {
    mockContext("en-US", 0);
    render(<SearchResults />);
    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toHaveTextContent(/no movie found/i);
  });

  it("should render loading message in portuguese", () => {
    mockContext("pt-BR", 0, true);
    render(<SearchResults />);
    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toHaveTextContent(/carregando.../i);
  });

  it("should render loading message in english", () => {
    mockContext("en-US", 0, true);
    render(<SearchResults />);
    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toHaveTextContent(/loading.../i);
  });
});
