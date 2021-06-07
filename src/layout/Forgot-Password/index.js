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

function ForgotPasswordUI({
  form: { onChange, form, loginFormValid, onSubmit, loading, fieldErrors },
}) {
  return (
    <div>
      <Header />

      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 25 }}>
          <SemanticHeader>Forgot Password?</SemanticHeader>
          <Segment>
            <Form>
              {/* <p style={{ fontSize: 18, textAlign: "center" }}>
                Forgot Password?
              </p> */}
              <p style={{ fontSize: 14 }}>
                Enter your email and we'll send you instructions on how to reset
                your password.
              </p>

              <Form.Field>
                <Form.Input
                  value={form.email || ""}
                  onChange={onChange}
                  name="email"
                  type="email"
                  placeholder="E-Mail"
                  label="E-Mail"
                  error={
                    fieldErrors.email && {
                      content: fieldErrors.email,
                      pointing: "below",
                    }
                  }
                />
              </Form.Field>
              <Button
                onClick={onSubmit}
                disabled={loginFormValid || loading}
                fluid
                loading={loading}
                primary
                type="submit"
                style={{ fontSize: 16 }}
              >
                Send me reset instructions
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

export default ForgotPasswordUI;
