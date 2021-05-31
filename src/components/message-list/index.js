import React from "react";
import Message from "../message";
import "./MessageList.scss";

function MessageList({ messageState: { message }, meState: { me } }) {
  return (
    <div className="chat-message-list">
      {message.data !== null &&
        me.data !== null &&
        message.data.messages.length > 0 &&
        message.data.messages.map((m) => {
          let isMe = false;
          if (m.user === me.data.user.id) {
            isMe = true;
          } else {
            isMe = false;
          }
          return <Message isMe={isMe} text={m.text} date={m.createdAt} />;
        })}
    </div>
  );
}

export default MessageList;
