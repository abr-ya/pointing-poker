import React, { createContext, useContext, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import EVENTS from "./events";
import { useDispatch } from "react-redux";
import { goToLobby, goToGame, goToResult } from "../redux/actions/gameActions";

const SOCKET_URL = process.env.CHAT_URL;

export interface IRoom {
  name: string;
  id: string;
}

interface IMessage {
  message: string;
  time: string;
  username: string;
  isMy?: boolean;
}

interface Context {
  socket: Socket;
  username?: string;
  setUsername: (name: string) => void;
  messages: IMessage[];
  setMessages: (data: IMessage[]) => void;
  roomId?: string;
  rooms: { [key: string]: IRoom };
  issues: any;
}

const socket = io(SOCKET_URL);

const SocketContext = createContext<Context>({
  socket,
  setUsername: () => false,
  setMessages: () => false,
  rooms: {},
  messages: [],
  issues: [],
});

const SocketsProvider = (props: any): JSX.Element => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");
  const [rooms, setRooms] = useState({});
  const [users, setUsers] = useState([]);
  const [issues, setIssues] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    window.onfocus = function () {
      document.title = "Planning Poker App";
    };
  }, []);

  useEffect(() => {
    socket.on(EVENTS.SERVER.TO_LOBBY, (data) => {
      console.log("to_lobby", data);
      dispatch(goToLobby());
    });

    socket.on(EVENTS.SERVER.TO_GAME, (data) => {
      console.log("to_game", data);
      dispatch(goToGame());
    });

    socket.on(EVENTS.SERVER.TO_RESULT, (data) => {
      console.log("to_result", data);
      dispatch(goToResult());
    });

    socket.on(EVENTS.SERVER.ROOMS, (value) => {
      setRooms(value);
    });

    socket.on(EVENTS.SERVER.TASKS, (value) => {
      console.log("получены таски", value);
      setIssues(value);
    });

    socket.on(EVENTS.SERVER.USERS, (value) => {
      console.log("пользователи комнаты", value);
      setUsers(value);
    });

    socket.on(EVENTS.SERVER.JOINED_ROOM, (value) => {
      setRoomId(value);
      setMessages([]);
    });

    socket.on(EVENTS.SERVER.ROOM_MESSAGE, ({ message, username, time }) => {
      console.log("socket-context", "newMes:", message);
      if (!document.hasFocus()) {
        document.title = "New message...";
      }

      setMessages((messages) => [...messages, { message, username, time }]);
    });
  }, [socket]);

  useEffect(() => {
    console.log("socket id change", socket.id);
  }, [socket.id]);

  return (
    <SocketContext.Provider
      value={{
        socket,
        username,
        setUsername,
        rooms,
        roomId,
        messages,
        setMessages,
        users,
        issues,
      }}
      {...props}
    />
  );
};

export const useSockets = () => useContext(SocketContext);

export default SocketsProvider;
