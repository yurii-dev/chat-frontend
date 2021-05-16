import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import routes from "./routes";
import { GlobalProvider } from "./context/Provider";
import isAuth from "./utils/isAuth";

const RenderRoute = (route) => {
  const history = useHistory();

  document.title = route.title;

  if (route.needsAuth && !isAuth()) {
    history.push("/login");
  }
  return (
    <Route
      path={route.path}
      exact
      render={(props) => <route.component {...props} />}
    ></Route>
  );
};

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RenderRoute {...route} key={index} />
          ))}
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
