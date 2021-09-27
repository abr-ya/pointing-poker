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

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    formHidden: {
      visibility: "hidden",
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
    contMaster: {
      justifyContent: "space-between",
    },
    contPlayer: {
      justifyContent: "flex-end",
    },
  }),
);

interface IGameSummary {
  masterID?: number; // ???
  linkToLobby?: string; // ???
  role?: string;
}

const GameSummary = ({
  masterID = 1,
  linkToLobby = "http://planning.poker.com/1",
  role = "player",
}: IGameSummary): JSX.Element => {
  const classes = useStyles();

  const copyLink = (): void => {
    console.log("Link copied");
  };

  const startGame = (): void => {
    console.log("Start Game");
  };

  const canсelGame = (): void => {
    console.log("Canсel Game");
  };

  const exitGame = (): void => {
    console.log("Exit Game");
  };

  return (
    <>
      <Typography variant="h5" align="left" gutterBottom>
        Scrum master:
      </Typography>
      <p>Here will be card with Scrum master name {masterID}</p>
      <Grid
        container
        className={cn(classes.form, {
          [classes.formHidden]: role === "player",
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
            defaultValue={linkToLobby}
            variant="outlined"
            size="small"
            fullWidth
            margin="dense"
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={copyLink}
          >
            Copy
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        className={cn(classes.buttonCont, {
          [classes.contMaster]: role === "master",
          [classes.contPlayer]: role === "player",
        })}
      >
        {role === "master" && (
          <>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={startGame}
              >
                Start game
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={canсelGame}
              >
                Cansel game
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
              onClick={exitGame}
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
