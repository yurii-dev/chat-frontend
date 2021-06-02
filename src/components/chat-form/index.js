import React from "react";
import "./ChatForm.scss";
import createDialogRequest from "../../context/actions/home/dialogs/createDialog";
import getMessages from "../../context/actions/home/getMessages";

function ChatForm({
  createDialogDispatch,
  user,
  setShowDialogs,
  createDialogState,
  dialogDispatch,
  messageDispatch,
  dialogState,
  setEmptyMessage
}) {
  // --- get createDialog ---
  const { createDialog } = createDialogState;
  // --- change message ---
  const [value, setValue] = React.useState("");

  // send message -------
  const sendMessage = (e) => {
    e.preventDefault();
    createDialogRequest({
      data: {
        dialog: {
          partnerId: user.id,
          text: value,
          attachments: null,
        },
      },
      dialogDispatch,
    })(createDialogDispatch);
    setValue("");
  };

  // --- check data ---
  React.useEffect(() => {
    if (
      createDialog.data === true &&
      user &&
      dialogState.dialog.data !== null &&
      dialogState.dialog.data.dialogs
    ) {
      const dialogID = dialogState.dialog.data.dialogs.filter(
        (d) => user.username == d.partner.username
      );
      setShowDialogs(true);
      // setShowMessage(true);
      setEmptyMessage(false);
      if (dialogID.length > 0) {
        getMessages(dialogID[0]._id)(messageDispatch);
      }
    }
  }, [createDialog, dialogState.dialog.data]);

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
