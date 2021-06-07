import React from "react";
import ReactTimeAgo from "react-time-ago";

import "./Message.scss";
function Message({ isMe, text, date, avatar }) {
  return (
    <div className={`message-row ${isMe ? "you" : "other"}-message`}>
      <div className="message-content">
        {!isMe && <img className="message-image" src={avatar}></img>}
        <div className="message-text">
          {text}
          <span className="message-date-hours">
            {new Date(date).toLocaleTimeString()}
          </span>
        </div>
        <div className="message-time">
          <ReactTimeAgo
            date={date}
            locale="en"
            style={{ fontSize: 14 }}
            timeStyle="round-minute"
          />
        </div>
      </div>
    </div>
  );
}

export default Message;
