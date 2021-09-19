import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import classes from "./Issue.module.scss";
import { RootStateType } from "../../redux/ReduxProvider";
import { useSelector } from "react-redux";

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

const Issue = ({ issueText, priority }: IIssue): JSX.Element => {
  const cl = useStyles();
  const status = useSelector((state: RootStateType) => state.game.status);
  const isMaster = useSelector((state: RootStateType) => state.currUser.is_master);

  //const status = "lobby";
  //const isMaster = true;

  const manageButtons = (): JSX.Element => {
    return (
      <>
        {issueText === "Create new Issue" ? (
          <IconButton aria-label="edit issue">
            <AddIcon fontSize="large" />
          </IconButton>
        ) : (
          editButtons()
        )}
      </>
    );
  };

  const editButtons = (): JSX.Element => {
    const buttons: JSX.Element =
      status === "lobby" ? (
        <>
          <IconButton aria-label="edit issue">
            <CreateOutlinedIcon fontSize="large" />
          </IconButton>
          <IconButton color="secondary" aria-label="delete issue">
            <DeleteOutlineIcon fontSize="large" />
          </IconButton>
        </>
      ) : (
        <IconButton aria-label="delete issue">
          <CloseIcon fontSize="large" />
        </IconButton>
      );
    return buttons;
  };

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
          {isMaster && manageButtons()}
        </div>
      </Card>
    </Grid>
  );
};

export default Issue;