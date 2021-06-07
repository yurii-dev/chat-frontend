import React from "react";
import Message from "../message";
import "./MessageList.scss";

function MessageList({ messageState: { message }, meState: { me } }) {
  const messagesEndRef = React.useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };
  React.useEffect(() => {
    scrollToBottom();
  }, [message.data]);
  return (
    <div className="chat-message-list">
      {message.data !== null &&
        me.data !== null &&
        message.data.messages.length > 0 &&
        message.data.messages.map((m) => {
          let isMe = false;
          let avatar = null;
          if (m.user._id === me.data.user.id) {
            isMe = true;
          } else {
            isMe = false;
            avatar = m.user.avatar;
          }
          return (
            <Message
              isMe={isMe}
              text={m.text}
              date={m.createdAt}
              avatar={avatar}
            />
          );
        })}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;
