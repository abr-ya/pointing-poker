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
import Member from "../Member/Member";

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

const MemberInfo = {
  id: "DVasX8",
  first_name: "David",
  last_name: "Blaim",
  position: "Junior",
  image: "Elon_Musk_2015.jpg",
  is_observer: false,
  is_master: true,
  game: "TVasX8",
};

interface IGameSummary {
  masterID?: string;
  lobbyID?: string;
  role?: string;
  handlerStartGame: () => void;
  handlerCopyLink: () => void;
  handlerCancelGame: () => void;
  handlerExitGame: () => void;
}

const GameSummary = ({
  masterID = "DVasX8",
  lobbyID = "http://planning.poker.com/1",
  role = "player",
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
        id={masterID}
        name={MemberInfo.first_name}
        surname={MemberInfo.last_name}
        position={MemberInfo.position}
        avatar={MemberInfo.image}
      />
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
            defaultValue={lobbyID}
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
