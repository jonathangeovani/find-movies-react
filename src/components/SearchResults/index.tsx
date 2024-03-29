import { useAppContext, useHomeContext } from "../../hooks";
import "./style.scss";

export default function SearchResults() {
  const { language } = useAppContext();
  const { totalResults, isFetching } = useHomeContext();

  return (
    <div className="search-results">
      {!isFetching ? (
        totalResults! > 0 ? (
          <h2>
            {language === "pt-BR"
              ? `Resultado da busca: ${totalResults}`
              : `Results: ${totalResults}`}
          </h2>
        ) : (
          <h2>
            {language === "pt-BR"
              ? "Nenhum filme encontrado"
              : "No movie found"}
          </h2>
        )
      ) : (
        <h2>{language === "pt-BR" ? "Carregando..." : "Loading..."}</h2>
      )}
    </div>
  );
}
