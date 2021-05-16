import React, { useContext } from "react";
import { GlobalContext } from "../../../context/Provider";
import ConversationItem from "../Conversation-Item";
import "./ConversationList.scss";
function ConversationList({
  state: {
    dialog: { loading, error, data },
  },
}) {
  if (data?.dialogs) {
    const ConversationItems = data.dialogs.map((dialog) => {
      console.log(dialog);
    });
  }
  return (
    <div id="conversation-list">
      <ConversationItem />
      <ConversationItem />
      <ConversationItem />
    </div>
  );
}

export default ConversationList;
