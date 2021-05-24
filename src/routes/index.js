import LoginContainer from "../containers/Login";
import RegisterContainer from "../containers/Register";
import VerifyContainer from "../containers/Verify";
import HomeContainer from "../containers/Home";
import ForgotPasswordContainer from "../containers/Forgot-Password";
import SetPasswordContainer from "../containers/Set-Password";

const routes = [
  {
    path: "/register",
    title: "register",
    component: RegisterContainer,
    needsAuth: false,
  },
  {
    path: "/login",
    title: "login",
    component: LoginContainer,
    needsAuth: false,
  },
  {
    path: "/verify",
    title: "verify",
    component: VerifyContainer,
    needsAuth: false,
  },
  {
    path: "/forgotpassword",
    title: "Reset",
    component: ForgotPasswordContainer,
    needsAuth: false,
  },
  {
    path: "/setpassword",
    title: "Set a new password",
    component: SetPasswordContainer,
    needsAuth: false,
  },
  {
    path: "/",
    title: "P-Chat",
    component: HomeContainer,
    needsAuth: true,
  },
];

export default routes;
