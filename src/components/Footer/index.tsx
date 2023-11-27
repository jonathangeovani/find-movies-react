import { useAppContext } from "../../hooks";

export default function Footer() {
  const { language } = useAppContext();

  return (
    <footer>
      {language == "pt-BR" ? (
        <p>Desenvolvido por Jonathan Geovani | 2023</p>
      ) : (
        <p>Developed by Jonathan Geovani | 2023</p>
      )}
    </footer>
  );
}
