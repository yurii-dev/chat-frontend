import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Segment } from "semantic-ui-react";
import Header from "../../components/Header";

function ForgotPasswordUI({
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
              <p style={{ fontSize: 24 }}>Forgot Password</p>
              <p style={{ fontSize: 16 }}>
                An email has been sent to your mail with a link to confirm your
                account
              </p>
              <p style={{ fontSize: 16 }}>Already confirmed?</p>
              <Form.Field>
                <Form.Input
                  value={form.email || ""}
                  onChange={onChange}
                  name="email"
                  type="email"
                  placeholder="E-Mail"
                  label="E-Mail"
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

export default ForgotPasswordUI;
