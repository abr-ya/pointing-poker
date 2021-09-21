import React, { useEffect } from "react";
import EVENTS from "../../context/config/events";
import { useSockets } from "../../context/socket.context";

interface IRoomConnector {
  roomName: string;
}

interface IRoom {
  name: string;
}

const RoomConnector = ({ roomName }: IRoomConnector): JSX.Element => {
  const { socket, roomId, rooms } = useSockets();
  useEffect(() => {
    const roomsArray: IRoom[] = Object.values(rooms);
    console.log(roomsArray);
    if (roomsArray.some((room) => room.name === roomName)) {
      console.log("подключаемся!");
      joinRoom(roomName);
    } else {
      console.log("создаем!");
      createRoom(roomName);
    }
  }, [rooms]);

  const createRoom = (roomName) => {
    // emit room created event
    console.log("создать комнату", { roomName });
    socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName });
  };

  const joinRoom = (roomName) => {
    socket.emit(EVENTS.CLIENT.JOIN_ROOM, roomName);
  };

  return <div>{roomId || "нет id комнаты"}</div>;
};

export default RoomConnector;
