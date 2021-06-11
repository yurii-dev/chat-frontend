import React from "react";
import getUsers from "../../../context/actions/home/listUsers";
import icon from "../../../images/back-arrow.png";

import "./NewConversation.scss";

const NewConversation = ({ listUsersDispatch, setShowDialogs, showDialogs }) => {
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

  //search method some time after the user stops typing
  const debouncedSearchTerm = useDebounce(value, 600);

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      getUsers(value)(listUsersDispatch);
      setShowDialogs(false);
    }
  }, [debouncedSearchTerm]);

  return (
    <div id="new-message-container">
      {show && <input className="filter" value={value} onChange={(e) => setValue(e.target.value)} onKeyUp={findUsers} placeholder="Type name" />}
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

// Hook
function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  React.useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

export default NewConversation;
