import React, { useEffect } from "react";
import EVENTS from "../../context/config/events";
import { useSockets } from "../../context/socket.context";
import { IRoom } from "../../context/socket.context";

interface IRoomConnector {
  roomName: string;
}

const RoomConnector = ({ roomName }: IRoomConnector): JSX.Element => {
  const { socket, roomId, rooms } = useSockets();
  useEffect(() => {
    const roomsArray: IRoom[] = Object.values(rooms);
    console.log(roomsArray);
    if (roomsArray.some((room) => room.name === roomName)) {
      const idForJoin = roomsArray.find((room) => room.name === roomName).id;
      console.log("подключаемся!", roomName, idForJoin);
      joinRoom(idForJoin);
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

  return <div>{`roomId: ${roomId}` || "нет id комнаты"}</div>;
};

export default RoomConnector;
