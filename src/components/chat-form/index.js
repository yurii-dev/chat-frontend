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
  setValueSearch,
  setShowSearch,
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
          attachments: attachState,
        },
      },
      dialogDispatch,
    })(createDialogDispatch);
    setValue("");
    setValueSearch("");
    setShowSearch(false);
    setAttachState([]);
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
            const arr = [...attachState];
            if (arr.includes(reader.result)) {
              return;
            } else {
              arr.push(reader.result);
            }
            console.log(arr);
            setAttachState(arr);
          };
        }
      } else {
        return alert("File not supported!");
      }
    }
  };

  // --- remove attachment ---
  const deleteAttachment = (img) => {
    const arr = [...attachState];
    const seekItem = attachState.indexOf(img);
    if (seekItem !== -1) {
      if (arr.length === 1) {
        setAttachState([]);
      } else {
        arr.splice(seekItem, 1);
        setAttachState(arr);
      }
    } else {
      return;
    }
  };

  // --- change input ---
  const onChnage = (e) => {
    setValue(e.target.value);
  };

  return (
    <form id="chat-form">
      <div className="attachment-wrapper">
        <div className="attachments-list">
          {attachState.length > 0 &&
            attachState.map((i, index) => {
              return (
                <div className="attachment" key={index}>
                  <img src={i} className="attachment-image" />
                  <span
                    className="attachment-cross"
                    onClick={() => deleteAttachment(i)}
                  >
                    x
                  </span>
                </div>
              );
            })}
        </div>
      </div>
      <label htmlFor="upload-photo">
        <input
          style={{ display: "none" }}
          id="upload-photo"
          name="upload-photo"
          type="file"
          accept="image/*"
          onChange={getImg}
          disabled={attachState.length > 4}
        />
        <img
          className="attachment-icon"
          src={attachmentIcon}
          alt="attachment"
        />
      </label>
      <input
        type="text"
        placeholder="Type a message"
        value={value}
        onChange={onChnage}
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
