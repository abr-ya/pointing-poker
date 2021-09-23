import React from "react";
import IssueList from "../components/IssueList/IssueListContainer";

const Lobby = (): JSX.Element => {
  return (
    <div className="container">
      <h1>Lobby page</h1>
      <IssueList />
    </div>
  );
};
export default Lobby;
