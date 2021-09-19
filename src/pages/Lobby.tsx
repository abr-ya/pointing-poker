import React from "react";
import { IIssue } from "../components/Issue/Issue";
import IssueList from "../components/IssueList/IssueList";

const data: IIssue[] = [
  { issueText: "1", priority: "1", id: 1 },
  { issueText: "2", priority: "3", id: 2 },
  { issueText: "4", priority: "5", id: 3 },
  { issueText: "6", priority: "7", id: 4 },
  { issueText: "8", priority: "9", id: 5 },
];

const Lobby = (): JSX.Element => (
  <div className="container">
    <h1>Lobby page</h1>
    <IssueList data={data} loading={false} />
  </div>
);

export default Lobby;
