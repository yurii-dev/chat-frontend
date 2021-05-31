import React, { useContext } from "react";
import ConversationItem from "../Conversation-Item";
import "./ConversationList.scss";
import FindUsers from "../../conversation/FindUsers/FindUsers";
function ConversationList({
  dialogState,
  meState,
  showDialogs,
  listUsersState,
  setShowMessage,
  setUserName,
  messageDispatch,
  setEmptyMessage,
}) {
  const { dialog } = dialogState;
  const { me } = meState;
  const { listUsers } = listUsersState;

  return (
    <div id="conversation-list">
      {showDialogs
        ? dialog.data &&
          me.data &&
          dialog.data.dialogs.map((dialog) => {
            // --- data dialog ---
            const data = {
              user: null,
              textMessage: null,
              date: null,
              active: null,
              id: null,
            };
            // --- check owner dialog ---
            if (dialog.author._id === me.data.user.id) {
              data.user = dialog.partner;
            } else {
              data.user = dialog.author;
            }
            // --- add last message data -------
            data.textMessage = dialog.lastMessage.text;
            data.date = dialog.lastMessage.createdAt;
            data.id = dialog._id;
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
            return (
              <ConversationItem
                {...{
                  data,
                  setShowMessage,
                  setUserName,
                  messageDispatch,
                  setEmptyMessage,
                }}
              />
            );
          })
        : listUsers.data &&
          listUsers.data.map((l) => {
            return (
              <FindUsers
                listUsers={l}
                {...{
                  setUserName,
                  setEmptyMessage,
                  setShowMessage,
                }}
              />
            );
          })}
    </div>
  );
}

export default ConversationList;
