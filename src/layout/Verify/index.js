import React from "react";
import { Link } from "react-router-dom";
import { Form, Grid, Segment } from "semantic-ui-react";
import Header from "../../components/Header";
import { useHistory } from "react-router";
import { GlobalContext } from "../../context/Provider";
import { REGISTER_SUCCESS } from "../../constants/actionTypes";

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
        <Grid.Column
          style={{ maxWidth: 550, marginTop: 25, textAlign: "center" }}
        >
          <Segment>
            <Form>
              <p style={{ fontSize: 24 }}>Сonfirm your account</p>
              <p style={{ fontSize: 16 }}>
                An email has been sent to your mail with a link to confirm your
                account
              </p>
              <p style={{ fontSize: 16 }}>Already confirmed?</p>
              <Link onClick={goTo} style={{ fontSize: 26 }}>
                Login
              </Link>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default VerifyUI;
