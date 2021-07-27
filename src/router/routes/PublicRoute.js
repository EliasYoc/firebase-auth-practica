import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ isLoged, component: Component, ...rest }) => {
  return (
    <Route {...rest}>{isLoged ? <Redirect to="/home" /> : <Component />}</Route>
  );
};

export default PublicRoute;
