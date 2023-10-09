interface AboutProps {
  language: string;
}

const About = ({ language }: AboutProps) => {
  return (
    <>
      {language === "pt-BR" ? (
        <>
          <h1>Sobre este projeto &nbsp;</h1>
          <div className="container">
            <p
              style={{
                maxWidth: "50rem",
                color: "#fff",
                fontSize: "1.15rem",
                fontWeight: "400",
                lineHeight: "1.5rem",
              }}
            >
              Este projeto foi concebido com o propósito de aplicar e consolidar
              os conhecimentos adquiridos no desenvolvimento com React e
              Typescript inspirado
              <a
                className="links"
                href="https://www.youtube.com/watch?v=b9eMGE7QtTk"
                target="_blank"
              >
                {" neste vídeo "}
              </a>
              .
              <br />
              <br />
              Esta aplicação utiliza tecnologias modernas para oferecer uma
              experiência interativa e eficiente. No âmago da aplicação está o
              <a className="links" href="https://www.react.dev" target="_blank">
                {" React "}
              </a>
              , uma poderosa biblioteca JavaScript que possibilita a construção
              de interfaces de usuário reativas e dinâmicas. A construção do
              projeto é otimizada e agilizada pelo
              <a
                className="links"
                href="https://www.vitejs.dev"
                target="_blank"
              >
                {" Vite "}
              </a>
              , uma ferramenta de construção de código extremamente rápida, que
              permite um desenvolvimento responsivo e eficaz. Além disso, foram
              aplicados conhecimentos em Typescript para garantir a tipagem
              estática e facilitar a manutenção do código e, a integração da
              <a
                className="links"
                href="https://developer.themoviedb.org/reference/intro/getting-started"
                target="_blank"
              >
                {" API TMDB "}
              </a>
              para o consumo de dados, resultando em uma aplicação completa.
              <br />
              <br />É importante ressaltar que os filmes exibidos neste website
              são obtidos por meio de uma API de terceiros. Não temos
              responsabilidade sobre o conteúdo, a seleção ou as atualizações
              dos filmes apresentados.
              <br />
              <br />
              Você pode acessar o código-fonte no meu repositório no GitHub
              <a
                className="links"
                href="https://github.com/jonathangeovani/find-movies-react"
                target="_blank"
              >
                {" clicando aqui "}
              </a>
              .
            </p>
          </div>
        </>
      ) : (
        <>
          <h1>About this Project &nbsp;</h1>
          <div className="container">
            <p
              style={{
                maxWidth: "50rem",
                color: "#fff",
                fontSize: "1.15rem",
                fontWeight: "400",
                lineHeight: "1.5rem",
              }}
            >
              This project was conceived with the purpose of applying and
              consolidating the knowledge acquired in development with React and
              Typescript, inspired by
              <a
                className="links"
                href="https://www.youtube.com/watch?v=b9eMGE7QtTk"
                target="_blank"
              >
                {" this video "}
              </a>
              .
              <br />
              <br />
              This application utilizes modern technologies to provide an
              interactive and efficient experience. At the core of the
              application is
              <a className="links" href="https://www.react.dev" target="_blank">
                {" React "}
              </a>
              , a powerful JavaScript library that enables the construction of
              reactive and dynamic user interfaces. The project's build is
              optimized and accelerated by
              <a
                className="links"
                href="https://www.vitejs.dev"
                target="_blank"
              >
                {" Vite "}
              </a>
              , an extremely fast code build tool that allows for responsive and
              effective development. Furthermore, knowledge in Typescript was
              applied to ensure static typing and facilitate code maintenance,
              along with integrating the
              <a
                className="links"
                href="https://developer.themoviedb.org/reference/intro/getting-started"
                target="_blank"
              >
                {" TMDB API "}
              </a>
              for data consumption, resulting in a comprehensive application.
              <br />
              <br />
              It's important to emphasize that the movies displayed on this
              website are obtained through a third-party API. We do not have
              responsibility for the content, selection, or updates of the
              presented movies.
              <br />
              <br />
              You can access the source code in my GitHub repository by
              <a
                className="links"
                href="https://github.com/jonathangeovani/find-movies-react"
                target="_blank"
              >
                {" clicking here "}
              </a>
              .
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default About;
