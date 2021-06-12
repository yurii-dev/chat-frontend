import React from "react";

import "./ConversationSearch.scss";

function ConversationSearch({
  meState: {
    me: { data },
  },
}) {
  // --- show modal ---
  const [show, setShow] = React.useState(false);

  return (
    <div id="search-container">
      <div className="account">
        {data && <img src={data?.user?.avatar} onClick={() => setShow(true)} />}
        {show && (
          <div id="myModal" class="modal">
            <div class="modal-content-wrapper">
              <span class="close" onClick={() => setShow(false)}>
                &times;
              </span>
              <div className="modal-content">
                <img src={data?.user?.avatar} />
                <div className="title">Username</div>
                <div className="username">
                  <input type="text" value="username" />
                  <button>change</button>
                </div>
                <div className="title">Change password</div>
                <form className="password-form">
                  <input type="text" placeholder="new password" />
                  <input type="text" placeholder="repeat password" />
                  <button>change</button>
                </form>
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
