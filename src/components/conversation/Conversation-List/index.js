import React, { useContext } from "react";
import ConversationItem from "../Conversation-Item";
import "./ConversationList.scss";
import FindUsers from "../../conversation/FindUsers/FindUsers";
function ConversationList({ dialogState, meState, showDialogs, listUsersState, setShowMessage, setUser, user, messageDispatch, setEmptyMessage }) {
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
              lastMessageOwner: null,
              lastMessageRead: null,
            };
            // --- check owner dialog ---
            if (dialog.author._id === me.data.user.id) {
              data.user = dialog.partner;
              data.date = dialog.partner.last_seen;
            } else {
              data.user = dialog.author;
              data.date = dialog.author.last_seen;
            }
            // --- add last message data -------
            data.textMessage = dialog.lastMessage.text;
            data.lastMessageOwner = dialog.lastMessage.user;
            data.lastMessageRead = dialog.lastMessage.read;
            // data.date = dialog.lastMessage.createdAt;
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
                checkedUserId={user?._id}
                {...{
                  data,
                  setShowMessage,
                  setUser,
                  messageDispatch,
                  setEmptyMessage,
                }}
                meId={me.data.user.id}
              />
            );
          })
        : listUsers.data &&
          listUsers.data.map((l) => {
            return (
              <FindUsers
                listUsers={l}
                {...{
                  setUser,
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
