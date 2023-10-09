interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  language: string;
  getNextPage: (page: number) => void;
}

export default function Pagination(props: PaginationProps) {
  return (
    <div className="pagination">
      {props.currentPage > 1 && (
        <span
          className="arrow"
          onClick={() => {
            props.getNextPage(props.currentPage - 1);
          }}
        >
          &lt;
        </span>
      )}
      {props.totalResults > 0 && (
        <span className="page-index">
          {props.currentPage}
          {props.language === "pt-BR" ? " de " : " of "}
          {props.totalPages}
        </span>
      )}
      {props.totalPages > 1 && props.totalPages > props.currentPage && (
        <span
          className="arrow"
          onClick={() => {
            props.getNextPage(props.currentPage + 1);
          }}
        >
          &gt;
        </span>
      )}
    </div>
  );
}
