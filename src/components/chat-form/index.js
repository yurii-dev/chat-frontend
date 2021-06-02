import React from "react";
import "./ChatForm.scss";
import createDialogRequest from "../../context/actions/home/dialogs/createDialog";

function ChatForm({
  createDialogDispatch,
  user,
  setShowDialogs,
  createDialogState,
}) {
  // --- get createDialog ---
  const { createDialog } = createDialogState;
  // --- change message ---
  const [value, setValue] = React.useState("");

  // send message -------
  const sendMessage = (e) => {
    e.preventDefault();
    createDialogRequest({
      dialog: {
        partnerId: user.id,
        text: value,
        attachments: null,
      },
    })(createDialogDispatch);
  };

  // --- check data ---
  React.useEffect(() => {
    if (createDialog.data === true) {
      setShowDialogs(true);
    }
  }, [createDialog]);
  return (
    <form id="chat-form">
      <div title="Add Attachment"></div>
      <input
        type="text"
        placeholder="Type a message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage(e);
          }
        }}
      />
      <button onClick={(e) => sendMessage(e)}>Send</button>
    </form>
  );
}

export default ChatForm;
