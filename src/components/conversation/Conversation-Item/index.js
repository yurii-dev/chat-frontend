import React from "react";
import getMessages from "../../../context/actions/home/getMessages";

import "./ConversationItem.scss";
const ConversationItem = ({
  data: { user, textMessage, date, active, id },
  setShowMessage,
  setUser,
  messageDispatch,
  setEmptyMessage,
}) => {
  return (
    <div
      className={`conversation ${active ? "active" : ""}`}
      onClick={() => {
        setShowMessage(true);
        setUser(user);
        getMessages(id)(messageDispatch);
        setEmptyMessage(false);
      }}
    >
      <img src={user.avatar} />
      <div className="title-text">{user.username}</div>
      <div className="created-date">{new Date(date).toLocaleDateString()}</div>
      <div className="conversation-message">{textMessage}</div>
    </div>
  );
};

export default ConversationItem;
