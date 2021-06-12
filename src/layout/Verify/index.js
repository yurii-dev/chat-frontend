import React from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Button,
  Image,
  Grid,
  Header as SemanticHeader,
  Segment,
  Message,
} from "semantic-ui-react";
import Header from "../../components/Header";
import { useHistory } from "react-router";
import { GlobalContext } from "../../context/Provider";
import { REGISTER_SUCCESS } from "../../constants/actionTypes";
import exclamationMark from "../../assets/images/exclamation-mark.png";

function VerifyUI() {
  const history = useHistory();
  const { authDispatch } = React.useContext(GlobalContext);

  // --- go to login and skip auth data ---
  const goTo = () => {
    authDispatch({
      type: REGISTER_SUCCESS,
      payload: { verify: false },
    });
    history.push("/login");
  };
  return (
    <div>
      <Header />
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 25 }}>
          <SemanticHeader>Сonfirm your account</SemanticHeader>
          <Segment>
            <Form>
              <p style={{ fontSize: 18, textAlign: "center" }}>
                Verify your email address
              </p>
              <img
                src={exclamationMark}
                style={{
                  display: "block",
                  maxHeight: "200px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "150px",
                }}
              />
              <p style={{ fontSize: 14 }}>
                In order to start using your P-Chat account, you need to confirm
                your email address.
              </p>

              <Segment>
                Already confirmed ? <Link onClick={goTo}>Login</Link>
              </Segment>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default VerifyUI;
