import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Segment } from "semantic-ui-react";
import Header from "../../components/Header";

function SetPasswordUI({
  form: { onChange, form, error, loginFormValid, onSubmit, loading },
}) {
  return (
    <div>
      <Header />
      <Grid centered>
        <Grid.Column
          style={{ maxWidth: 600, marginTop: 25, textAlign: "center" }}
        >
          <Segment>
            <Form>
              <p style={{ fontSize: 24 }}>Set Password</p>
              <p style={{ fontSize: 16 }}>Please type your new password</p>
              <Form.Field style={{ textAlign: "left" }}>
                <Form.Input
                  value={form.password || ""}
                  onChange={onChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                  label="Password"
                />
              </Form.Field>
              <Form.Field style={{ textAlign: "left" }}>
                <Form.Input
                  value={form.repeatPassword || ""}
                  onChange={onChange}
                  name="repeatPassword"
                  type="password"
                  placeholder="Repeat a password"
                  label="Repeat a password"
                />
              </Form.Field>
              <Button
                onClick={onSubmit}
                disabled={loginFormValid || loading}
                fluid
                loading={loading}
                primary
                type="submit"
              >
                Send
              </Button>

              <Link to="/login">Login</Link>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default SetPasswordUI;
