import React from "react";
import Grid, { GridDirection, GridSpacing } from "@material-ui/core/Grid/Grid";
import Issue from "../Issue/Issue";
import { IIssue } from "../Issue/Issue";
import CircularProgress from "@material-ui/core/CircularProgress";

interface IIsueList {
  data: IIssue[];
  loading: boolean;
  isMaster: boolean;
  isLobbyPage: boolean;
}

const IssueList = ({
  data,
  loading,
  isMaster,
  isLobbyPage,
}: IIsueList): JSX.Element => {
  const dir: GridDirection = isLobbyPage ? "row" : "column";
  const spacing: GridSpacing = isLobbyPage ? 2 : 4;

  const handlerEditIssue = (issueID: string) => {
    console.log("edit issue ID=", issueID);
  };

  const handlerDeleteIssue = (issueID: string) => {
    console.log("delete issue ID=", issueID);
  };

  const handlerAddIssue = () => {
    console.log("Add new issue");
  };

  return loading ? (
    <CircularProgress />
  ) : (
    <Grid container spacing={spacing} direction={dir} alignItems="stretch">
      {data.map((issue) => (
        <Issue
          id={issue.id}
          issueText={issue.issueText}
          key={issue.id}
          priority={issue.priority}
          isMaster={isMaster}
          isLobby={isLobbyPage}
          handlerEditIssue={handlerEditIssue}
          handlerDeleteIssue={handlerDeleteIssue}
        />
      ))}
      {isMaster && (
        <Issue
          id={"0"}
          issueText={"Create new Issue"}
          key={0}
          priority={""}
          isMaster={isMaster}
          isLobby={isLobbyPage}
          handlerAddIssue={handlerAddIssue}
        />
      )}
    </Grid>
  );
};

export default IssueList;
