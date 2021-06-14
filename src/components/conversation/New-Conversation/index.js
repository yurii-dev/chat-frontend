import React from "react";
import getUsers from "../../../context/actions/home/listUsers";
import icon from "../../../images/back-arrow.png";

import "./NewConversation.scss";

const NewConversation = ({
  listUsersDispatch,
  setShowDialogs,
  showDialogs,
  valueSearch,
  setValueSearch,
  showSearch,
  setShowSearch,
  setShowMessage,
}) => {
  // --- find users -----
  const findUsers = (event) => {
    if (event.keyCode === 13) {
      getUsers(valueSearch)(listUsersDispatch);
      setShowDialogs(false);
      setValueSearch("");
    }
  };

  //search method some time after the user stops typing
  const debouncedSearchTerm = useDebounce(valueSearch, 600);

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      getUsers(valueSearch)(listUsersDispatch);
      setShowDialogs(false);
    }
  }, [debouncedSearchTerm]);

  return (
    <div id="new-message-container">
      {showSearch && (
        <input
          className="filter"
          value={valueSearch}
          onChange={(e) => setValueSearch(e.target.value)}
          onKeyUp={findUsers}
          placeholder="Type name"
          autoFocus
        />
      )}
      {showDialogs ? (
        <button
          onClick={() => {
            setShowMessage(false);
            setShowSearch(!showSearch);
            setValueSearch("");
          }}
        >
          +
        </button>
      ) : (
        <img
          onClick={() => {
            setShowDialogs(true);
            setShowSearch(false);
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
