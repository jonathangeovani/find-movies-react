import { useAppContext } from "../../hooks";

export default function PageNotFound() {
  const { language } = useAppContext();

  return (
    <div className="center-content">
      <h1>
        {language == "pt-BR" ? "Página não encontrada" : "Page not found"}!
        &nbsp;
      </h1>
      <p>
        {language == "pt-BR"
          ? "A página solicitada não existe"
          : "The requested page does not exist"}
        . &nbsp; &nbsp;
      </p>
    </div>
  );
}
