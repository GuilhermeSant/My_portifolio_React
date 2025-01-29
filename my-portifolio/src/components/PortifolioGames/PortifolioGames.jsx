export const PortifolioGames = () => {
  return (
    <section>
        <div className="container-projects">
          <a
            href="https://gamejolt.com/games/SPACE2D/888515"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./img/space2d.webp"
              alt="Game Space 2D"
              className="port-img"
            />
          </a>
          <h3>
            Game criado com Unity e programado em C#, para Windows. Estilo
            infinity run com tema de espaço, possuindo power-ups e ondas de
            inimigos.
            <p>
              Clique na imagem para visitar o site para mais detalhes do jogo!
            </p>
          </h3>
        </div>
        <div className="container-projects">
          <a
            href="https://gamejolt.com/games/SpaceDestroy/888501"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./img/spacegame.webp"
              alt="Game Space Mobile"
              className="port-img"
            />
          </a>
          <h3>
            Game criado com Unity e programado em C#, para Android. Estilo
            infinity run com deslize horizontal, tema de espaço, power-ups,
            ondas de inimigos e super tiro recarregável.
            <p>
              Clique na imagem para visitar o site para mais detalhes do jogo!
            </p>
          </h3>
        </div>
        <div className="container-projects">
          <a
            href="https://gamejolt.com/games/InsaneGamesXP/466821"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./img/plot-twist.webp"
              alt="Game Platformer"
              className="port-img"
            />
          </a>
          <h3>
            Game criado com Unity e programado em C#, para Windows. Estilo
            plataforma, com ação de pular e atacar com espada, inimigos variados
            e um boss final.
            <p>
              Clique na imagem para visitar o site para mais detalhes do jogo!
            </p>
          </h3>
        </div>
    </section>
  );
};
