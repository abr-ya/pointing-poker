import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameSummary from "../components/GameSummary/GameSummaryContainer";
import IssueList from "../components/IssueList/IssueListContainer";
import MembersList from "../components/MembersList/MembersListContainer";
import SettingsLobby from "../components/SettingsLobby/SettingsLobby";
import { IGameSettings } from "../interfaces";
import { setSettings } from "../redux/actions/gameActions";
import { RootStateType } from "../redux/ReduxProvider";
import { useSockets } from "../context/socket.context";
import EVENTS from "../context/events";
import ModalCreateIssue from "../components/Modal/ModalCreateIssue";

const useStyles = makeStyles(() =>
  createStyles({
    page: {
      padding: "20px",
    },
    bold: {
      fontWeight: "bold",
    },
    input: {
      display: "none",
    },
  }),
);

const Lobby = (): JSX.Element => {
  const { socket, roomId, issues } = useSockets();

  const classes = useStyles();
  const dispatch = useDispatch();
  const settings = useSelector((state: RootStateType) => state.game.settings);

  // CreateTask
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);

  const createTaskCancelFunction = () => {
    setIsCreateTaskOpen(false);
  };

  const createTaskConfirmFunction = (data) => {
    console.log("createTaskConfirmFunction");
    if (roomId) {
      console.log(roomId, data);
      socket.emit(EVENTS.CLIENT.CREATE_TASK, { roomId, ...data });
    } else {
      console.log("Отказано! Не передан Room ID!");
    }
    setIsCreateTaskOpen(false);
  };
  // CreateTask end

  // Issue list
  const handlerEditIssue = (issueID: string) => {
    console.log("edit issue ID=", issueID);
  };

  const handlerDeleteIssue = (issueID: string) => {
    console.log("delete issue ID=", issueID);
  };

  const handlerAddIssue = () => {
    setIsCreateTaskOpen(true);
  };
  // Issue list end

  const handlerCopyLink = (): void => {
    console.log("Link copied");
  };

  const handlerStartGame = (): void => {
    console.log("Start Game");
    console.log(settings);
  };

  const handlerCancelGame = (): void => {
    console.log("Canсel Game");
  };

  const handlerExitGame = (): void => {
    console.log("Exit Game");
  };

  const handlerDeleteUser = (userID: string) => {
    console.log("delete user UserID =", userID);
  };

  const saveSettings = (data: IGameSettings) => {
    dispatch(setSettings(data));
  };

  return (
    <div className="container">
      <Paper elevation={3} className={classes.page}>
        <Grid container direction="column" spacing={6}>
          <Grid item>
            <Typography
              variant="h5"
              component="h1"
              align="center"
              className={classes.bold}
            >
              Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)
            </Typography>
          </Grid>
          <Grid item>
            <GameSummary
              handlerCancelGame={handlerCancelGame}
              handlerCopyLink={handlerCopyLink}
              handlerExitGame={handlerExitGame}
              handlerStartGame={handlerStartGame}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              component="h3"
              align="center"
              className={classes.bold}
              paragraph
            >
              Members:
            </Typography>
            <MembersList handlerDeleteUser={handlerDeleteUser} />
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              component="h3"
              align="center"
              className={classes.bold}
              paragraph
            >
              Issues:
            </Typography>
            <IssueList
              data={issues}
              handlerEditIssue={handlerEditIssue}
              handlerDeleteIssue={handlerDeleteIssue}
              handlerAddIssue={handlerAddIssue}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              component="h3"
              align="center"
              className={classes.bold}
              paragraph
            >
              Game Settings:
            </Typography>
            <SettingsLobby saveSettings={saveSettings} />
          </Grid>
        </Grid>
      </Paper>
      <ModalCreateIssue
        issueIsOpen={isCreateTaskOpen}
        yesFunc={createTaskConfirmFunction}
        noFunc={createTaskCancelFunction}
      />
    </div>
  );
};
export default Lobby;
