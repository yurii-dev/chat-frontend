import React, { useContext } from "react";
import ConversationItem from "../Conversation-Item";
import "./ConversationList.scss";
function ConversationList({ dialogState, meState }) {
  console.log(dialogState, meState);
  const { dialog } = dialogState;
  const { me } = meState;

  return (
    <div id="conversation-list">
      {dialog.data &&
        me.data &&
        dialog.data.dialogs.map((dialog) => {
          // --- data dialog ---
          const data = {
            user: null,
            textMessage: null,
            date: null,
            active: null,
          };
          // --- check owner dialog ---
          if (dialog.author.id === me.data.user.id) {
            data.user = dialog.partner;
          } else {
            data.user = dialog.author;
          }
          // --- add last message data -------
          data.textMessage = dialog.lastMessage.text;
          data.date = dialog.lastMessage.createdAt;
          // --- check new message ----
          if (me.data.user.id === dialog.lastMessage.user) {
            data.active = false;
          } else {
            if (dialog.lastMessage.read) {
              data.active = false;
            } else {
              data.active = true;
            }
          }
          return <ConversationItem data={data} />;
        })}
    </div>
  );
}

export default ConversationList;
