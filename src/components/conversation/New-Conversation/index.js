import React from "react";
import getUsers from "../../../context/actions/home/listUsers";

import "./NewConversation.scss";

const NewConversation = ({ listUsersDispatch }) => {
  // --- state for input ---
  const [show, setShow] = React.useState(false);
  // --- state for input values ---
  const [value, setValue] = React.useState("");
  // --- find users -----
  const findUsers = (event) => {
    if (event.keyCode === 13) {
      getUsers(value)(listUsersDispatch);
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
      <button onClick={() => setShow(!show)}>+</button>
    </div>
  );
};

export default NewConversation;
