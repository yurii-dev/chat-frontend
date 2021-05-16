import React from "react";
import { Link } from "react-router-dom";
import { Form, Grid, Segment } from "semantic-ui-react";
import Header from "../../components/Header";

function VerifyUI() {
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
              <Link to="/login" style={{ fontSize: 26 }}>
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
