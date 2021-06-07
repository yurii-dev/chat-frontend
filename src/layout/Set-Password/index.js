import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Segment,
  Header as SemanticHeader,
} from "semantic-ui-react";
import Header from "../../components/Header";

function SetPasswordUI({
  form: { onChange, form, fieldErrors, loginFormValid, onSubmit, loading },
}) {
  return (
    <div>
      <Header />
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 25 }}>
          <SemanticHeader>New Password</SemanticHeader>
          <Segment>
            <Form>
              <p style={{ fontSize: 14 }}>
                Please create a new password that you don't use an any other
                site.
              </p>
              <Form.Field style={{ textAlign: "left" }}>
                <Form.Input
                  value={form.password || ""}
                  onChange={onChange}
                  name="password"
                  type="password"
                  placeholder="Create new password"
                  label="Password"
                  error={
                    fieldErrors.password && {
                      content: fieldErrors.password,
                      pointing: "below",
                    }
                  }
                />
              </Form.Field>
              <Form.Field style={{ textAlign: "left" }}>
                <Form.Input
                  value={form.repeatPassword || ""}
                  onChange={onChange}
                  name="repeatPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm your password"
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
                Change
              </Button>

              <div style={{ fontSize: 14, textAlign: "center", marginTop: 12 }}>
                <Link to="/login">Back to login</Link>
              </div>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default SetPasswordUI;
