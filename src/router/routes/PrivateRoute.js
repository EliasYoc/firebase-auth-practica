import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ isLoged, component: Component, ...rest }) => {
  // console.log("privRoute", isLoged);
  return (
    <Route {...rest}>
      {isLoged ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
