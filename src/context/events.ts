const EVENTS = {
  connection: "connection",
  CLIENT: {
    CREATE_ROOM: "CREATE_ROOM",
    CREATE_TASK: "CREATE_TASK",
    SEND_ROOM_MESSAGE: "SEND_ROOM_MESSAGE",
    JOIN_ROOM: "JOIN_ROOM",
  },
  SERVER: {
    ROOMS: "ROOMS",
    TASKS: "TASKS",
    USERS: "USERS",
    JOINED_ROOM: "JOINED_ROOM",
    ROOM_MESSAGE: "ROOM_MESSAGE",
    TO_LOBBY: "TO_LOBBY",
    TO_GAME: "TO_GAME",
    TO_RESULT: "TO_RESULT",
  },
};

export default EVENTS;