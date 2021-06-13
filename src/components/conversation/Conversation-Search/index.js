import React from "react";
import "./ConversationSearch.scss";
import uploadAvatar from "../../../context/actions/home/uploadAvatar";
import uploadUsername from "../../../context/actions/home/uploadUsername";
import uploadPasswordAction from "../../../context/actions/home/uploadPassword";
import deleteAccountAction from "../../../context/actions/home/deleteAccount";
import { useHistory } from "react-router-dom";
import { UPLOAD_PASSWORD_SUCCESS } from "../../../constants/actionTypes";
function ConversationSearch({
  meState: {
    me: { data },
  },
  deleteAccountState: { deleteAccount },
  deleteAccountDispatch,
  uploadAvatarState,
  uploadAvatarDispatch,
  uploadUsernameState,
  uploadUsernameDispatch,
  uploadPasswordState: { uploadPassword },
  uploadPasswordDispatch,
}) {
  const history = useHistory();
  // --- inputs state ---
  const [name, setName] = React.useState("");
  const [newPass, setNewPass] = React.useState("");
  const [repPass, setRepPass] = React.useState("");
  // --- show modal ---
  const [show, setShow] = React.useState(false);
  // --- show upload btn ---
  const [showUpload, setShowUpload] = React.useState(false);
  // --- set avatar ---
  const [avatar, setAvatar] = React.useState("");

  // --- set username ---
  React.useEffect(() => {
    if (data && data.user.username) {
      setName(data.user.username);
    }
  }, [data]);

  // --- change password ---
  const changePassword = (e) => {
    e.preventDefault();
    if (newPass === repPass) {
      if (newPass.length < 8) {
        alert("minimum 8 characters");
      } else {
        uploadPasswordAction({
          user: {
            password: repPass,
          },
        })(uploadPasswordDispatch);
      }
    } else {
      alert("passwords not seems");
    }
  };

  React.useEffect(() => {
    if (uploadPassword.data === true) {
      alert("your password changed :)");
      setNewPass("");
      setRepPass("");
      // uploadPasswordDispatch({
      //   type: UPLOAD_PASSWORD_SUCCESS,
      //   payload: false,
      // });
    }
  }, [uploadPassword.data]);

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
            uploadAvatar({ avatar: reader.result })(uploadAvatarDispatch);
            setAvatar(reader.result);
          };
        }
      } else {
        return alert("File not supported!");
      }
    }
  };

  // --- change avatar ---
  React.useEffect(() => {
    if (data && data?.user?.avatar) {
      setAvatar(data?.user?.avatar);
    }
  }, [data]);

  // --- check delete account state ---
  React.useEffect(() => {
    if (deleteAccount.data === true) {
      localStorage.removeItem("token");
      history.push("/login");
    }
  }, [deleteAccount.data]);

  return (
    <div id="search-container">
      <div className="account">
        {data && <img src={avatar} onClick={() => setShow(true)} />}
        {show && (
          <div id="myModal" class="modal">
            <div class="modal-content-wrapper">
              <span class="close" onClick={() => setShow(false)}>
                &times;
              </span>
              <div className="modal-content">
                <label
                  htmlFor="upload-avatar"
                  className="upload-avatar"
                  onMouseEnter={() => setShowUpload(true)}
                  onMouseLeave={() => setShowUpload(false)}
                >
                  <input
                    style={{ display: "none" }}
                    id="upload-avatar"
                    name="upload-avatar"
                    type="file"
                    accept="image/*"
                    onChange={getImg}
                  />
                  <img src={avatar} />
                  {showUpload && (
                    <button className="upload-image-btn">+</button>
                  )}
                </label>
                <div className="title">Username</div>
                <div className="username">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <button
                    onClick={() =>
                      uploadUsername({
                        user: {
                          username: name,
                        },
                      })(uploadUsernameDispatch)
                    }
                  >
                    change
                  </button>
                </div>
                <div className="title">Change password</div>
                <form className="password-form">
                  <input
                    type="password"
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                    placeholder="new password"
                  />
                  <input
                    type="password"
                    value={repPass}
                    onChange={(e) => setRepPass(e.target.value)}
                    placeholder="repeat password"
                  />
                  <button onClick={changePassword}>change</button>
                </form>
                <button
                  className="btn-remove"
                  onClick={() => deleteAccountAction()(deleteAccountDispatch)}
                >
                  delete account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <input className="search-input" type="text" placeholder="Search" />
    </div>
  );
}

export default ConversationSearch;
