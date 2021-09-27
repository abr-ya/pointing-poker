import React from "react";
import { IGame } from "../interfaces";
import { Main, Lobby, Game, Result } from "./index";
import ButtonPrim from "../components/ButtonPrim/ButtonPrim";
import Footer from "../components/Layout/Footer";

interface IPoker {
  game: IGame;
  goToLobby: () => void;
  goToGame: () => void;
  goToResult: () => void;
}

const Poker = ({
  game,
  goToLobby,
  goToGame,
  goToResult,
}: IPoker): JSX.Element => {
  let Component: React.FC = Main; // default to order page
  switch (game.status) {
    case "lobby":
      Component = Lobby;
      break;
    case "game":
      Component = Game;
      break;
    case "result":
      Component = Result;
      break;
  }

  return (
    <div className="container">
      <h1>Poker</h1>
      <p>
        На этой странице будут проходить все стадии игры. Main - обновить
        страницу)
      </p>
      <h2>Временные кнопки для тестов</h2>
      <ButtonPrim text="lobby" handler={goToLobby} />
      <ButtonPrim text="game" handler={goToGame} />
      <ButtonPrim text="result" handler={goToResult} />
      <p>Текущая стадия: {game.status}</p>
      <Component />
      <Footer />
    </div>
  );
};

export default Poker;
