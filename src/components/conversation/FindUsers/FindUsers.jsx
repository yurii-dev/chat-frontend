import React from "react";
import "./FindUsers.scss";

const FindUsers = ({
  listUsers,
  setUserName,
  setEmptyMessage,
  setShowMessage,
}) => {
  return (
    <div
      className="conversation"
      onClick={() => {
        setUserName(listUsers.username);
        setEmptyMessage(true);
        setShowMessage(true);
      }}
    >
      <img src={listUsers.avatar} />
      <div className="title-text">{listUsers.username}</div>
    </div>
  );
};

export default FindUsers;
