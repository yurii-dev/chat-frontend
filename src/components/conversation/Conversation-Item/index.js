import React from "react";

import "./ConversationItem.scss";
const ConversationItem = ({ data: { user, textMessage, date, active } }) => {
  return (
    <div className={`conversation ${active ? "active" : ""}`}>
      <img src={user.avatar} />
      <div className="title-text">{user.username}</div>
      <div className="created-date">{new Date(date).toLocaleDateString()}</div>
      <div className="conversation-message">{textMessage}</div>
    </div>
  );
};

export default ConversationItem;
