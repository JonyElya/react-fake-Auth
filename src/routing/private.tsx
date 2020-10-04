import React, { FC } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { checkAuthStatus } from "../store/user/action";

interface Props extends RouteProps {
  component: any;
}

const PrivateRoute: FC<Props> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuthStatus() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
