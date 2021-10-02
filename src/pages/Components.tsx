import React, { useState } from "react";
import ButtonPrim from "../components/ButtonPrim/ButtonPrim";
import ModalLobby from "../components/Modal/ModalLobby";
import ModalCreateIssue from "../components/Modal/ModalCreateIssue";
import ModalCreateUser from "../components/Modal/ModalCreateUser";
import FileLoader from "../components/FileLoader/FileLoader";
import { Button } from "@material-ui/core";
import Footer from "../components/Layout/Footer";
import IssueList from "../components/IssueList/IssueListContainer";
import { useSockets } from "../context/socket.context";
import EVENTS from "../context/config/events";

const Components = (): JSX.Element => {
  const { socket, roomId } = useSockets();

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

  const fileLoadHandler = (name: string) => {
    console.log("загрузили файл", name, "(Components, fileLoadHandler)");
  };

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
      <h2>Issues</h2>
      <IssueList />
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
