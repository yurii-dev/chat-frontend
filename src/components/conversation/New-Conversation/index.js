import React from "react";
import getUsers from "../../../context/actions/home/listUsers";
import icon from "../../../images/back-arrow.png";

import "./NewConversation.scss";

const NewConversation = ({
  listUsersDispatch,
  setShowDialogs,
  showDialogs,
}) => {
  // --- state for input ---
  const [show, setShow] = React.useState(false);
  // --- state for input values ---
  const [value, setValue] = React.useState("");
  // --- find users -----
  const findUsers = (event) => {
    if (event.keyCode === 13) {
      getUsers(value)(listUsersDispatch);
      setShowDialogs(false);
      setValue("");
    }
  };
  return (
    <div id="new-message-container">
      {show && (
        <input
          className="filter"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={findUsers}
          placeholder="Type name"
        />
      )}
      {showDialogs ? (
        <button onClick={() => setShow(!show)}>+</button>
      ) : (
        <img
          onClick={() => {
            setShowDialogs(true);
            setShow(false);
          }}
          className="back-icon"
          src={icon}
          alt="icon"
        />
      )}
    </div>
  );
};

export default NewConversation;
