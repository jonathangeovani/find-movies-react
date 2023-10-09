interface SearchResultsProps {
  language: string;
  totalResults: number;
}

export default function SearchResults(props: SearchResultsProps) {
  return (
    <div className="empty">
      {props.totalResults > 0 ? (
        <h2>
          {props.language === "pt-BR"
            ? `Resultado da busca: ${props.totalResults}`
            : `Results: ${props.totalResults}`}
        </h2>
      ) : (
        <h2>
          {props.language === "pt-BR"
            ? "Nenhum filme encontrado"
            : "No moive found"}
        </h2>
      )}
    </div>
  );
}
