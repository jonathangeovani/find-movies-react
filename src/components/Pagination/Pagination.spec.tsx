import Pagination from ".";
import * as customHooks from "../../hooks";
import { fireEvent, render, screen } from "@testing-library/react";

const handleSetSearchParams = vi.fn();
const appContextSpy = vi.spyOn(customHooks, "useAppContext");
const homeContextSpy = vi.spyOn(customHooks, "useHomeContext");

const mockContext = (
  page = 1,
  totalPages = 1,
  language = "pt-BR",
  totalResults = 1
) => {
  appContextSpy.mockReturnValue({
    language: language,
    setLanguage: vi.fn(),
  });

  homeContextSpy.mockReturnValue({
    searchTerm: "",
    setSearchParams: handleSetSearchParams,
    currentPage: page,
    movies: [],
    totalPages: totalPages,
    totalResults: totalResults,
    isFetching: false,
    refetch: vi.fn(),
  });
};

describe("Pagination", () => {
  it("should render properly", () => {
    mockContext();
    render(<Pagination />);
    const pagination = screen.getByText("", { selector: ".pagination" });

    expect(pagination).toBeInTheDocument();
  });

  it("should render page index with correct text in portuguese", () => {
    mockContext(2, 3, "pt-BR");
    render(<Pagination />);
    const pageIndex = screen.getByTitle(/current page/i);

    expect(pageIndex).toBeInTheDocument();
    expect(pageIndex).toHaveTextContent("2 de 3");
  });

  it("should render page index with correct text in english", () => {
    mockContext(2, 3, "en-US");
    render(<Pagination />);
    const pageIndex = screen.getByTitle(/current page/i);

    expect(pageIndex).toBeInTheDocument();
    expect(pageIndex).toHaveTextContent("2 of 3");
  });

  it("should render both arrows", () => {
    mockContext(2, 3);
    render(<Pagination />);
    const leftArrow = screen.getByTitle(/previous page/i);
    const rightArrow = screen.getByTitle(/next page/i);

    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();
  });

  it("should render just the left arrow", () => {
    mockContext(2, 2);
    render(<Pagination />);
    const leftArrow = screen.getByTitle(/previous page/i);
    const rightArrow = screen.queryByTitle(/next page/i);

    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).not.toBeInTheDocument();
  });

  it("should render just the left arrow", () => {
    mockContext(1, 2);
    render(<Pagination />);
    const leftArrow = screen.queryByTitle(/previous page/i);
    const rightArrow = screen.getByTitle(/next page/i);

    expect(leftArrow).not.toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();
  });

  it("should not render arrows and page index", () => {
    mockContext(1, 1, "pt-BR", 0);
    render(<Pagination />);
    const pageIndex = screen.queryByTitle(/current page/i);
    const leftArrow = screen.queryByTitle(/previous page/i);
    const rightArrow = screen.queryByTitle(/next page/i);

    expect(pageIndex).not.toBeInTheDocument();
    expect(leftArrow).not.toBeInTheDocument();
    expect(rightArrow).not.toBeInTheDocument();
  });

  it("should call setSearchParams when hit arrows", () => {
    mockContext(2, 3);
    render(<Pagination />);
    const rightArrow = screen.getByTitle(/next page/i);
    const leftArrow = screen.getByTitle(/previous page/i);

    fireEvent.click(leftArrow);
    fireEvent.click(rightArrow);

    expect(handleSetSearchParams).toHaveBeenCalledTimes(2);
  });
});
