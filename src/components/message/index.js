import React from "react";

import "./Message.scss";
function Message({ isMe, text, date }) {
  return (
    <div className={`message-row ${isMe ? "you" : "other"}-message`}>
      <div className="message-content">
        <div className="message-text">{text}</div>
        <div className="message-time">
          {new Date(date).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}

export default Message;
