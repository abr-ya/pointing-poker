import React, { useEffect, useRef } from "react";
import EVENTS from "../../context/config/events";
import { useSockets } from "../../context/socket.context";
import { Button } from "@material-ui/core";
import styles from "./chat.scss";
import cn from "classnames";

interface IChat {
  username: string;
}

const Chat = ({ username }: IChat): JSX.Element => {
  const { socket, messages, roomId, setMessages } = useSockets();
  const newMessageRef = useRef(null);
  const messageEndRef = useRef(null);

  useEffect(() => {
    console.log("chat!", socket);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
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
        isMy: true,
      },
    ]);

    newMessageRef.current.value = "";
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log("messages", messages);
  }, [messages]);

  if (!roomId) {
    return <div />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.messageList}>
        {messages.map(({ message, username, time, isMy }, index) => {
          return (
            <div
              key={index}
              className={cn(styles.message, { [styles.my]: isMy })}
            >
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
        <form onSubmit={handleSendMessage}>
          <input placeholder="your message ..." ref={newMessageRef} />
          <Button type="submit" variant="contained" color="primary">
            send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
