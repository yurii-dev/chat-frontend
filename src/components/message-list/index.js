import React from "react";
import Message from "../message";
import "./MessageList.scss";
function MessageList() {
  return (
    <div className="chat-message-list">
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default MessageList;
