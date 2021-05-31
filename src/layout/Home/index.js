import React from "react";
import ChatForm from "../../components/chat-form";
import ChatTitle from "../../components/chat-title";
import MessageList from "../../components/message-list";
import ConversationSearch from "../../components/conversation/Conversation-Search";
import ConversationList from "../../components/conversation/Conversation-List";
import NewConversation from "../../components/conversation/New-Conversation";

import "./Home.scss";

function HomeUI({
  dialogState,
  meState,
  listUsersState,
  listUsersDispatch,
  messageState,
  messageDispatch,
  createDialogState,
  createDialogDispatch,
}) {
  // --- change dialogs to find users ---
  const [showDialogs, setShowDialogs] = React.useState(true);
  // --- show message ---
  const [showMessage, setShowMessage] = React.useState(false);
  // --- get user name ------
  const [userName, setUserName] = React.useState(null);
  // --- empty message -------
  const [emptyMessage, setEmptyMessage] = React.useState(false);
  // --- find user name ---
  return (
    <>
      <div id="chat-container">
        <ConversationSearch />
        <ConversationList
          {...{
            dialogState,
            meState,
            listUsersState,
            showDialogs,
            setShowMessage,
            setUserName,
            messageDispatch,
            setEmptyMessage,
          }}
        />
        <NewConversation
          {...{
            listUsersDispatch,
            setShowDialogs,
            showDialogs,
          }}
        />
        {showMessage ? (
          <>
            <ChatTitle {...{ userName }} />
            {emptyMessage ? (
              <div className="empty-message"></div>
            ) : (
              <MessageList {...{ messageState, meState }} />
            )}
            <ChatForm {...{ createDialogDispatch }} />
          </>
        ) : (
          <div className="no-message"></div>
        )}
      </div>
    </>
  );
}

export default HomeUI;
