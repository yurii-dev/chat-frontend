import React from "react";

import "./ChatTitle.scss";
function ChatTitle({ user }) {
  return (
    <div id="chat-title">
      <span>{user.username}</span>
    </div>
  );
}

export default ChatTitle;
