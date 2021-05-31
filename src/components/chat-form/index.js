import React from "react";
import "./ChatForm.scss";
function ChatForm({ createDialogDispatch }) {
  return (
    <form id="chat-form">
      <div title="Add Attachment"></div>
      <input type="text" placeholder="type a message" />
      <button>Send</button>
    </form>
  );
}

export default ChatForm;
