import { useContext, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import NotFound from "../components/NotFound";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { firebase } from "../firebase/firebaseConfig";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { Context } from "../store/ContextProvider";
import { types } from "../types";
const RouterApp = () => {
  // const [isLoged, setIsLoged] = useState(false);
  const { isLoged, setIsLoged, dispatchAuth } = useContext(Context);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setIsLoged(true);
        dispatchAuth({
          type: types.LOGIN,
          payload: { uid: user.uid, displayName: user.displayName },
        });
      } else {
        setIsLoged(false);
      }
    });
  }, [setIsLoged, dispatchAuth]);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <PublicRoute exact path="/login" isLoged={isLoged} component={Login} />
        <PublicRoute
          exact
          path="/register"
          isLoged={isLoged}
          component={Register}
        />

        <PrivateRoute exact path="/home" isLoged={isLoged} component={Home} />

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
