import React from "react";
import "./FindUsers.scss";

const FindUsers = ({
  listUsers,
  setUser,
  setEmptyMessage,
  setShowMessage,
}) => {
  return (
    <div
      className="conversation"
      onClick={() => {
        setUser(listUsers);
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
