import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import GameSummary from "../components/GameSummary/GameSummaryContainer";
import IssueList from "../components/IssueList/IssueListContainer";
import MembersList from "../components/MembersList/MembersListContainer";
import SettingsLobby from "../components/SettingsLobby/SettingsLobby";
import { IGameSettings } from "../interfaces";
import { setSettings } from "../redux/actions/gameActions";

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
  const classes = useStyles();
  const dispatch = useDispatch();

  const handlerCopyLink = (): void => {
    console.log("Link copied");
  };

  const handlerStartGame = (): void => {
    console.log("Start Game");
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

  // const [settingsData, setSettings] = useState<IGameSettings>();

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
            <IssueList />
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
            <Button
              type="submit"
              form="settingsForm"
              variant="contained"
              color="primary"
            >
              Save settings
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default Lobby;
