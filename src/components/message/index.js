import React from "react";
import ReactTimeAgo from "react-time-ago";

import "./Message.scss";
function Message({ isMe, text, date, avatar, attachments }) {
  return (
    <div className={`message-row ${isMe ? "you" : "other"}-message`}>
      {!isMe && <img className="message-image" src={avatar}></img>}
      <div className="message-content">
        {text.length > 0 && (
          <div className="message-text">
            {text}
            <span className="message-date-hours">
              {new Date(date).toLocaleTimeString()}
            </span>
          </div>
        )}
        {attachments &&
          attachments.map((a) => {
            return <img className="attachment-message" src={a} />;
          })}
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
