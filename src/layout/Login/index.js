import React from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Button,
  Grid,
  Header as SemanticHeader,
  Segment,
  Message,
} from "semantic-ui-react";
import Header from "../../components/Header";

function LoginUI({
  form: { onChange, form, error, loginFormValid, onSubmit, loading },
}) {
  return (
    <div>
      <Header />

      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 25 }}>
          <SemanticHeader>Login</SemanticHeader>
          <Segment>
            <Form>
              {error && <Message content={error?.message} negative />}
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
              <Form.Field>
                <Form.Input
                  value={form.password || ""}
                  onChange={onChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                  label="Password"
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
                Submit
              </Button>
              <Segment>
                Need an account <Link to="/register">Register</Link>
              </Segment>
              <Link to="/forgotpassword"> Forgot your password</Link>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default LoginUI;
