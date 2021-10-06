import React from "react";
import Grid, { GridDirection, GridSpacing } from "@material-ui/core/Grid/Grid";
import Issue from "../Issue/Issue";
import { IIssue } from "../Issue/Issue";

interface IIsueList {
  data: IIssue[];
  isMaster: boolean;
  isLobbyPage: boolean;
  handlerEditIssue?: (id: string) => void;
  handlerDeleteIssue?: (id: string) => void;
  handlerAddIssue?: () => void;
}

const IssueList = ({
  data,
  isMaster,
  isLobbyPage,
  handlerEditIssue,
  handlerDeleteIssue,
  handlerAddIssue,
}: IIsueList): JSX.Element => {
  const dir: GridDirection = isLobbyPage ? "row" : "column";
  const spacing: GridSpacing = isLobbyPage ? 2 : 4;

  return (
    <Grid
      container
      spacing={spacing}
      direction={dir}
      alignItems="stretch"
      justifyContent="center"
    >
      {data &&
        Array.isArray(data) &&
        data.map((issue) => (
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
      {isMaster && handlerAddIssue && (
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
