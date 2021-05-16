import LoginContainer from "../containers/Login";
import RegisterContainer from "../containers/Register";
import VerifyContainer from "../containers/Verify";
import HomeContainer from "../containers/Home";

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
    path: "/",
    title: "P-Chat",
    component: HomeContainer,
    needsAuth: true,
  },
];

export default routes;
