import { useAppContext, useHomeContext } from "../hooks";

export default function Pagination() {
  const { language } = useAppContext();
  const { currentPage, setCurrentPage, totalResults, totalPages } =
    useHomeContext();

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <span
          className="arrow"
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          &lt;
        </span>
      )}
      {totalResults! > 0 && (
        <span className="page-index">
          {currentPage}
          {language === "pt-BR" ? " de " : " of "}
          {totalPages}
        </span>
      )}
      {totalPages! > 1 && totalPages! > currentPage && (
        <span
          className="arrow"
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          &gt;
        </span>
      )}
    </div>
  );
}
