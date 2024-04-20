import { useAppContext, useHomeContext } from "../../hooks";
import "./style.scss";

export default function SearchResults() {
  const { language } = useAppContext();
  const { totalResults, isFetching } = useHomeContext();

  return (
    <div className="search-results">
      {!isFetching ? (
        totalResults! > 0 ? (
          <p>
            {language === "pt-BR"
              ? `Resultado da busca: ${totalResults}`
              : `Results: ${totalResults}`}
          </p>
        ) : (
          <p>
            {language === "pt-BR"
              ? "Nenhum filme encontrado"
              : "No movie found"}
          </p>
        )
      ) : (
        <p>{language === "pt-BR" ? "Carregando..." : "Loading..."}</p>
      )}
    </div>
  );
}
