import React from "react";
import GameSummary from "../components/GameSummary/GameSummaryContainer";
import IssueList from "../components/IssueList/IssueListContainer";

const Lobby = (): JSX.Element => {
  const copyLink = (): void => {
    console.log("Link copied");
  };

  const startGame = (): void => {
    console.log("Start Game");
  };

  const canсelGame = (): void => {
    console.log("Canсel Game");
  };

  const exitGame = (): void => {
    console.log("Exit Game");
  };

  return (
    <div className="container">
      <h1>Lobby page</h1>
      <GameSummary
        handlerCancelGame={canсelGame}
        handlerCopyLink={copyLink}
        handlerExitGame={exitGame}
        handlerStartGame={startGame}
      />
      <IssueList />
    </div>
  );
};
export default Lobby;
