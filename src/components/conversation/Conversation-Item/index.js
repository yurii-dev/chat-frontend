import React from "react";
import getMessages from "../../../context/actions/home/getMessages";
import ReactTimeAgo from "react-time-ago";

import "./ConversationItem.scss";
const ConversationItem = ({
  data: {
    user,
    textMessage,
    date,
    active,
    id,
    lastMessageOwner,
    lastMessageRead,
  },
  setShowMessage,
  setUser,
  messageDispatch,
  setEmptyMessage,
  checkedUserId,
  meId,
}) => {
  let online = new Date().getTime() - new Date(date).getTime() < 1000 * 60 * 5;
  const [unread, setUnread] = React.useState(false);

  React.useEffect(() => {
    if (lastMessageOwner != meId && lastMessageRead == false) {
      setUnread(true);
    } else {
      setUnread(false);
    }
  }, [lastMessageOwner, lastMessageRead, meId]);

  return (
    <div
      className={`conversation ${checkedUserId === user._id ? "active" : ""}`}
      onClick={() => {
        setShowMessage(true);
        setUser(user);
        getMessages(id)(messageDispatch);
        setEmptyMessage(false);
        setUnread(false);
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

      <div className="conversation-message">
        {textMessage}
        {unread && <span class="dot unread"></span>}
      </div>
    </div>
  );
};

export default ConversationItem;
