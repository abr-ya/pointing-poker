import React, { useState } from "react";
import ButtonPrim from "../components/ButtonPrim/ButtonPrim";
import ModalLobby from "../components/Modal/ModalLobby";
import ModalCreateIssue from "../components/Modal/ModalCreateIssue";
import ModalCreateUser from "../components/Modal/ModalCreateUser";
import FileLoader from "../components/FileLoader/FileLoader";
import { Button, createStyles, Grid, makeStyles } from "@material-ui/core";
import PokerCard from "../components/PokerCard/PokerCard";
import MembersList from "../components/MembersList/MembersListContainer";
import Footer from "../components/Layout/Footer";
import SettingsLobby, {
  ISettings,
} from "../components/SettingsLobby/SettingsLobby";
import IssueList from "../components/IssueList/IssueListContainer";
import { useSockets } from "../context/socket.context";
import EVENTS from "../context/config/events";


const cardValues = [
  "0",
  "1",
  "2",
  "3",
  "5",
  "8",
  "13",
  "21",
  "34",
  "55",
  "89",
  "add",
];

const Components = (): JSX.Element => {
  const { socket, roomId } = useSockets();
  const useStyles = makeStyles(() =>
    createStyles({
      pokerCardContainer: {
        width: "100%",
      },
    }),
  );

  const [settingsData, setSettings] = useState<ISettings>();

  const classes = useStyles();

  const butonClickHandler = () => {
    console.log("Это был клик по кнопке!");
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // CreateUser
  const [isCreateUserOpen, setisCreateUserOpen] = useState(false);

  const cancelFunc = () => {
    setisCreateUserOpen(false);
  };

  const confirmFunc = (data) => {
    console.log("onSubmit");
    console.log(data);
    setisCreateUserOpen(false);
  };
  // CreateUser end

  // CreateTask
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);

  const createTaskCancelFunction = () => {
    setIsCreateTaskOpen(false);
  };

  const createTaskConfirmFunction = (data) => {
    console.log("createTaskConfirmFunction");
    console.log(data);
    socket.emit(EVENTS.CLIENT.CREATE_TASK, { roomId, ...data });
    setIsCreateTaskOpen(false);
  };
  // CreateTask end

  const saveSettings = (data: ISettings) => {
    setSettings(data);
    console.log(data);
  };

  const fileLoadHandler = (name: string) => {
    console.log("загрузили файл", name, "(Components, fileLoadHandler)");
  };

  const cards: JSX.Element[] = cardValues.map((elem: string): JSX.Element => {
    return (
      <PokerCard
        cardValue={elem}
        cardSizeClass="smallCard"
        key={elem}
        lobbyPokerCard
      />
    );
  });

  return (
    <div className="container">
      <h1>Components page</h1>
      <p>
        Это может быть страница для проверки наших компонентов. И не наших
        тоже.))
      </p>
      <h2>Кастомная кнопка</h2>
      <ButtonPrim text="Я кнопка" handler={butonClickHandler} />
      <ButtonPrim
        text="Я доп. кнопка"
        handler={butonClickHandler}
        isAdditional
      />
      <h2>Модальное окно (Kick Player)</h2>
      <ModalLobby
        name="David Blane"
        open={open}
        yesFunc={handleClickOpen}
        noFunc={handleClose}
      />
      <h2>Модальное окно (Create Issue)</h2>
      <ButtonPrim
        text="Create Issue"
        handler={() => setIsCreateTaskOpen(true)}
      />
      <ModalCreateIssue
        issueIsOpen={isCreateTaskOpen}
        yesFunc={createTaskConfirmFunction}
        noFunc={createTaskCancelFunction}
      />
      <h2>Модальное окно (Create User)</h2>
      <ButtonPrim
        text="Create User"
        handler={() => setisCreateUserOpen(true)}
      />
      <ModalCreateUser
        isOpen={isCreateUserOpen}
        confirmFunc={confirmFunc}
        cancelFunc={cancelFunc}
      />
      <h2>FileLoader</h2>
      <FileLoader succesHandler={fileLoadHandler} />

      <h2>Poker Cards</h2>
      <Grid
        className={classes.pokerCardContainer}
        container
        spacing={6}
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
      >
        {cards}
      </Grid>
      <h2>Members</h2>
      <MembersList />
      <h2>Issues</h2>
      <IssueList />
      <SettingsLobby saveSettings={saveSettings} />
      <Button
        type="submit"
        form="settingsForm"
        variant="contained"
        color="primary"
      >
        Save settings
      </Button>
      <Footer />
    </div>
  );
};

export default Components;
