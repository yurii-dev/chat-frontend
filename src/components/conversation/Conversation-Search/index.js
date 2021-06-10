import React from "react";

import "./ConversationSearch.scss";

function ConversationSearch({
  meState: {
    me: { data },
  },
}) {
  // --- show modal ---
  const [show, setShow] = React.useState(false);
  // Get the modal
  const modalRef = React.createRef(null);

  return (
    <div id="search-container">
      <div className="account">
        {data && <img src={data?.user?.avatar} onClick={() => setShow(true)} />}
        {show && (
          <div id="myModal" class="modal">
            <div class="modal-content">
              <span class="close" onClick={() => setShow(false)}>
                &times;
              </span>
              <p>Some text in the Modal..</p>
            </div>
          </div>
        )}
      </div>
      <input type="text" placeholder="Search" />
    </div>
  );
}

export default ConversationSearch;
