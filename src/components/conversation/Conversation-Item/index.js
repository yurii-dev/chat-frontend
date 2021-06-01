import React from "react";
import getMessages from "../../../context/actions/home/getMessages";
import ReactTimeAgo from "react-time-ago";

import "./ConversationItem.scss";
const ConversationItem = ({
  data: { user, textMessage, date, active, id },
  setShowMessage,
  setUser,
  messageDispatch,
  setEmptyMessage,
}) => {
  let online = new Date().getTime() - new Date(date).getTime() < 1000 * 60 * 5;

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
      {online ? (
        <div className="created-date">
          <span class="dot"></span>
        </div>
      ) : (
        <div className="created-date">
          <ReactTimeAgo date={date} locale="en" />
        </div>
      )}

      <div className="conversation-message">{textMessage}</div>
    </div>
  );
};

export default ConversationItem;
