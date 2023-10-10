import { useAppContext } from "../hooks/useAppContext";
import { useHomeContext } from "../hooks/useHomeContext";

export default function SearchResults() {
  const { language } = useAppContext();
  const { totalResults } = useHomeContext();

  return (
    <div className="search-results">
      {totalResults! > 0 ? (
        <h2>
          {language === "pt-BR"
            ? `Resultado da busca: ${totalResults}`
            : `Results: ${totalResults}`}
        </h2>
      ) : (
        <h2>
          {language === "pt-BR" ? "Nenhum filme encontrado" : "No moive found"}
        </h2>
      )}
    </div>
  );
}
