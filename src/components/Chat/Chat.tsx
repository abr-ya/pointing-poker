import React, { useEffect, useRef } from "react";
import EVENTS from "../../context/config/events";
import { useSockets } from "../../context/socket.context";
import styles from "./chat.scss";

function MessagesContainer() {
  const { socket, messages, roomId, username, setMessages } = useSockets();
  const newMessageRef = useRef(null);
  const messageEndRef = useRef(null);

  useEffect(() => {
    console.log("chat!", socket);
  }, []);

  function handleSendMessage() {
    const message = newMessageRef.current.value;

    if (!String(message).trim()) {
      return;
    }

    console.log("отправить", roomId, message, username);
    socket.emit(EVENTS.CLIENT.SEND_ROOM_MESSAGE, { roomId, message, username });

    const date = new Date();

    setMessages([
      ...messages,
      {
        username: "You",
        message,
        time: `${date.getHours()}:${date.getMinutes()}`,
      },
    ]);

    newMessageRef.current.value = "";
  }

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!roomId) {
    return <div />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.messageList}>
        {messages.map(({ message, username, time }, index) => {
          return (
            <div key={index} className={styles.message}>
              <div key={index} className={styles.messageInner}>
                <span className={styles.messageSender}>
                  {username} - {time}
                </span>
                <span className={styles.messageBody}>{message}</span>
              </div>
            </div>
          );
        })}
        <div ref={messageEndRef} />
      </div>
      <div className={styles.messageBox}>
        <textarea
          rows={1}
          placeholder="Tell us what you are thinking"
          ref={newMessageRef}
        />
        <button onClick={handleSendMessage}>SEND</button>
      </div>
    </div>
  );
}

export default MessagesContainer;
