import React from "react";
import { Image, Item, List, Placeholder } from "semantic-ui-react";

function DialogUI({
  state: {
    dialog: { loading, error, data },
  },
}) {
  console.log("loading", loading);
  console.log("data", data.dialogs);

  return (
    <div>
      {loading ? (
        <>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
          </Placeholder>
        </>
      ) : (
        <Item.Group>
          {data?.dialogs?.length &&
            data.dialogs.map((element) => (
              <Item>
                <img
                  style={{ width: 40, height: 40, borderRadius: 50 }}
                  src={element.partner.avatar}
                ></img>
                <Item.Content>
                  <Item.Header>{element.partner.username}</Item.Header>
                  <Item.Meta>
                    <span> {element.lastMessage.createdAt}</span>
                  </Item.Meta>
                  <Item.Description>
                    {element.lastMessage.text}
                  </Item.Description>
                </Item.Content>
              </Item>
            ))}
        </Item.Group>
      )}
    </div>
  );
}

export default DialogUI;
