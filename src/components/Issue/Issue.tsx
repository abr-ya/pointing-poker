import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import classes from "./Issue.module.scss";
import ManageButtons from "../Buttons/ManageButtons";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
  },
});

export interface IIssue {
  id: number;
  issueText: string;
  priority: string;
}

export interface IIssueProps extends IIssue {
  isMaster: boolean;
  isLobby: boolean;
}

const Issue = ({
  issueText,
  priority,
  isMaster,
  isLobby,
}: IIssueProps): JSX.Element => {
  const cl = useStyles();

  return (
    <Grid item md={4}>
      <Card className={cl.card}>
        <div className={classes.container}>
          <div className={classes.info}>
            <Typography variant="h5" className={classes.issueText}>
              {issueText}
            </Typography>
            <Typography variant="body2" className={classes.priority}>
              {priority}
            </Typography>
          </div>
          {isMaster && (
            <ManageButtons issueText={issueText} isLobby={isLobby} />
          )}
        </div>
      </Card>
    </Grid>
  );
};

export default Issue;
