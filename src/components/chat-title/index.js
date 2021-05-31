import React from "react";

import "./ChatTitle.scss";
function ChatTitle({ userName }) {
  return (
    <div id="chat-title">
      <span>{userName}</span>
    </div>
  );
}

export default ChatTitle;
