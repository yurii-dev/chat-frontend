import React from "react";
import ChatForm from "../../components/chat-form";
import ChatTitle from "../../components/chat-title";
import MessageList from "../../components/message-list";
import ConversationSearch from "../../components/conversation/Conversation-Search";
import ConversationList from "../../components/conversation/Conversation-List";
import NewConversation from "../../components/conversation/New-Conversation";

import "./Home.scss";

function HomeUI({ dialogState, meState }) {
  return (
    <>
      <div id="chat-container">
        <ConversationSearch />
        <ConversationList {...{ dialogState, meState }} />
        <NewConversation />
        <ChatTitle />
        <MessageList />
        <ChatForm />
      </div>
    </>
  );
}

export default HomeUI;
