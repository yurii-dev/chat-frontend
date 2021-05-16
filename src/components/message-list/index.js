import React, { useEffect } from "react";
import Message from "../message";
import "./MessageList.scss";
import getMessages from "../../context/actions/home/getMessages";

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
