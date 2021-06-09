import React from "react";
import "./ChatForm.scss";
import createDialogRequest from "../../context/actions/home/dialogs/createDialog";
import getMessages from "../../context/actions/home/getMessages";
import attachmentIcon from "../../images/attachment.png";

function ChatForm({
  createDialogDispatch,
  user,
  setShowDialogs,
  createDialogState,
  dialogDispatch,
  messageDispatch,
  dialogState,
  setEmptyMessage,
}) {
  // --- get createDialog ---
  const { createDialog } = createDialogState;
  // --- change message ---
  const [value, setValue] = React.useState("");
  // --- state attachments ---
  const [attachState, setAttachState] = React.useState([]);

  // send message -------
  const sendMessage = (e) => {
    e.preventDefault();
    createDialogRequest({
      data: {
        message: {
          partnerId: user.id ? user.id : user._id,
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
        (d) =>
          user.username == d.partner.username ||
          user.username == d.author.username
      );
      setShowDialogs(true);
      setEmptyMessage(false);
      if (dialogID.length > 0) {
        getMessages(dialogID[0]._id)(messageDispatch);
      }
    }
  }, [createDialog, dialogState.dialog.data]);

  // ------------- upload img from pc --------------
  const getImg = async (e) => {
    const file = e.target.files[0];
    const imageType = /image.*/;
    if (file) {
      const size = await (file.size / (1024 * 1024)).toFixed(2);
      if (size > 1) {
        return alert("File too large");
      }
      if (file.type.match(imageType)) {
        const reader = new FileReader();
        if (file && reader) {
          reader.readAsDataURL(file);
          reader.onload = function () {
            setAttachState(reader.result);
          };
        }
      } else {
        return alert("File not supported!");
      }
    }
  };

  return (
    <form id="chat-form">
      <div title="Add Attachment"></div>
      <input
        type="text"
        placeholder={attachState.length > 0 ? "" : "Type a message"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage(e);
          }
        }}
      />
      <div className="attachments-list">
        {attachState.length > 0 &&
          [attachState].map((i) => {
            return (
              <div className="attachment-wrapper">
                <img src={i} className="attachment-image" />
                <span className="attachment-cross">x</span>
              </div>
            );
          })}
      </div>
      {value.length > 0 ? (
        <button onClick={(e) => sendMessage(e)}>Send</button>
      ) : (
        <label htmlFor="upload-photo">
          <input
            style={{ display: "none" }}
            id="upload-photo"
            name="upload-photo"
            type="file"
            accept="image/*"
            onChange={getImg}
          />
          <img
            className="attachment-icon"
            src={attachmentIcon}
            alt="attachment"
          />
        </label>
      )}
    </form>
  );
}

export default ChatForm;
