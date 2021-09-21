import React from "react";
import Grid, { GridDirection, GridSpacing } from "@material-ui/core/Grid/Grid";
import Issue from "../Issue/Issue";
import { IIssue } from "../Issue/Issue";
import CircularProgress from "@material-ui/core/CircularProgress";
import { RootStateType } from "../../redux/ReduxProvider";
import { useSelector } from "react-redux";

interface IIsueList {
  data: IIssue[];
  loading: boolean;
}

const IssueList = ({ data, loading }: IIsueList): JSX.Element => {
  const status = useSelector((state: RootStateType) => state.game.status);
  const isMaster = useSelector(
    (state: RootStateType) => state.currentUser.is_master,
  );
  const dir: GridDirection = status === "lobby" ? "row" : "column";
  const spacing: GridSpacing = status === "lobby" ? 2 : 4;

  const makeIssues = (): IIssue[] => {
    if (isMaster === true) {
      data.push({ issueText: "Create new Issue", priority: "", id: 0 });
    }
    return data;
  };

  return loading ? (
    <CircularProgress />
  ) : (
    <Grid container spacing={spacing} direction={dir} alignItems="stretch">
      {makeIssues().map((issue) => (
        <Issue
          id={issue.id}
          issueText={issue.issueText}
          key={issue.id}
          priority={issue.priority}
        />
      ))}
    </Grid>
  );
};

export default IssueList;
