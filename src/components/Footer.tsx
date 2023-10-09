interface FooterProps {
  language: string;
}

export default function Footer(props: FooterProps) {
  return (
    <footer>
      {props.language == "pt-BR" ? (
        <p>Desenvolvido por Jonathan Geovani | 2023</p>
      ) : (
        <p>Developed by Jonathan Geovani | 2023</p>
      )}
    </footer>
  );
}
