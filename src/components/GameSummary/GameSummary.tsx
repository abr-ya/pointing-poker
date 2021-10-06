import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import cn from "classnames";
import React from "react";
import { IUser } from "../../interfaces";
import Member from "../Member/Member";

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    formHidden: {
      // visibility: "hidden",
      display: "none",
    },
    linkLabel: {
      width: "100%",
    },
    buttonCont: {
      width: "100%",
      marginTop: "10px",
      display: "flex",
      flexDirection: "row",
    },
    containerMaster: {
      justifyContent: "space-between",
    },
    containerPlayer: {
      justifyContent: "flex-end",
    },
  }),
);

interface IGameSummary {
  masterInfo: IUser;
  gameID: string;
  role: string;
  status: string;
  handlerStartGame?: () => void;
  handlerCopyLink?: () => void;
  handlerCancelGame?: () => void;
  handlerExitGame: () => void;
}

const GameSummary = ({
  masterInfo,
  gameID,
  role = "player",
  status,
  handlerStartGame,
  handlerCopyLink,
  handlerCancelGame,
  handlerExitGame,
}: IGameSummary): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" align="left" gutterBottom>
        Scrum master:
      </Typography>
      <Member
        isMaster
        id={masterInfo.id}
        name={masterInfo.first_name}
        surname={masterInfo.last_name}
        position={masterInfo.position}
        avatar={masterInfo.image}
      />
      <Grid
        container
        className={cn(classes.form, {
          [classes.formHidden]: role === "player" || status !== "lobby",
        })}
      >
        <Grid item xs={12}>
          <Typography
            className={classes.linkLabel}
            variant="h5"
            align="left"
            gutterBottom
          >
            Link to lobby:
          </Typography>
        </Grid>
        <Grid item className={classes.form} xs={12}>
          <TextField
            id="linkToLobby"
            defaultValue={gameID}
            variant="outlined"
            size="small"
            fullWidth
            margin="dense"
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handlerCopyLink}
          >
            Copy
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        className={cn(classes.buttonCont, {
          [classes.containerMaster]: role === "master",
          [classes.containerPlayer]: role === "player",
        })}
      >
        {role === "master" && (
          <>
            <Grid item>
              <Button
                type="submit"
                form="settingsForm"
                variant="contained"
                color="primary"
                size="large"
                onClick={handlerStartGame}
              >
                Start game
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={handlerCancelGame}
              >
                Canсel game
              </Button>
            </Grid>
          </>
        )}
        {role === "player" && (
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={handlerExitGame}
            >
              Exit game
            </Button>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default GameSummary;
