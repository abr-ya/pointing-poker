import React, { useRef, useState, useEffect } from "react";
import classes from "./main.scss";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { ButtonGroup } from "react-bootstrap"; // ToDo - почему не Material?
import ButtonPrim from "../../components/ButtonPrim/ButtonPrim";
import ModalCreateUser from "../../components/Modal/ModalCreateUser";
import EVENTS from "../../context/config/events";
import { useSockets } from "../../context/socket.context";

interface IMain {
  newGameSaga: () => void;
  connectGameSaga: (id: string) => void;
  gameID: string | undefined;
}

const useStyles = makeStyles({
  logo: {
    marginTop: 50,
  },
  // ToDo надо или нет?
  btn: {
    width: 200,
  },
  content: {
    marginLeft: 20,
  },
  create: {
    width: 180,
  },
});

const Main = ({ newGameSaga, connectGameSaga, gameID }: IMain): JSX.Element => {
  const { socket } = useSockets();
  const cl = useStyles();
  const gameIdRef = useRef(null);

  const newGameHandler = () => {
    console.log("создание игры - отправить на сервер и создать комнату?"); // выйти бы на уровень,
    // когда это будет просто "создать комнату"
    newGameSaga();
  };

  const gameConnectHandler = () => {
    connectGameSaga(gameIdRef.current.value);
    gameIdRef.current.value = "";
  };

  // CreateUser
  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);

  const cancelFunc = () => {
    setIsCreateUserOpen(false);
  };

  const confirmFunc = (data) => {
    console.log("onSubmit");
    console.log(data);
    setIsCreateUserOpen(false);
  };
  // CreateUser end

  useEffect(() => {
    if (gameID) {
      console.log(
        "MainPage: gameID",
        gameID,
        "время создавать пользователя и комнату!",
      );
      socket.emit(EVENTS.CLIENT.CREATE_ROOM, gameID);
      setIsCreateUserOpen(true);
    }
  }, [gameID]);

  return (
    <div className="container">
      <Paper elevation={3} className={classes.paper}>
        <Grid container direction="column" spacing={10} alignItems="center">
          <Grid
            item
            container
            direction="row"
            md={12}
            xs={6}
            justifyContent="center"
            className={cl.logo}
          >
            <img alt="Logo" src="images/Logo.png" className={classes.img} />
            <div className={classes.title}>
              <h1 className={classes.title__string1}>Poker</h1>
              <h1 className={classes.title__string2}>Planning</h1>
            </div>
          </Grid>
          <Grid item md={12} xs={6}>
            <h3 className={classes.green}>Start your planning:</h3>
            <ButtonGroup>
              <Typography variant="body1" className={cl.create}>
                Create session:
              </Typography>
              <ButtonPrim text="Start your game" handler={newGameHandler} />
            </ButtonGroup>
          </Grid>
          <Grid item md={12} xs={6}>
            <h3 className={classes.green}>OR:</h3>
            <Typography variant="body1">
              Connect to lobby by <span className={classes.green}>ID:</span>
            </Typography>
            <ButtonGroup>
              <input placeholder="Game ID" ref={gameIdRef} />
              <ButtonPrim text="Connect" handler={gameConnectHandler} />
            </ButtonGroup>
          </Grid>
        </Grid>
      </Paper>
      <ModalCreateUser
        isOpen={isCreateUserOpen}
        confirmFunc={confirmFunc}
        cancelFunc={cancelFunc}
      />
    </div>
  );
};

export default Main;
