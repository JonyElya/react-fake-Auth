import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { NotFound } from "../components/common/404";
import Home from "../components/home";
import { News } from "../components/news";
import { Layout } from "antd";
import HeaderApp from "../components/layouts/header";
import Login from "../components/auth";
import PrivateRoute from "./private";
import Dashboard from "../components/dashboard";

const { Content } = Layout;

const Public: React.FC = () => {
  const match = useRouteMatch();
  const url = match.url;

  return (
    <>
      <Layout className="layout">
        <HeaderApp />
        <Content style={{ padding: "0 50px" }}>
          <Switch>
            <Route path={`${url}news`} component={News} />
            <Route path={`${url}login`} component={Login} />
            <Route exact path={`${url}`} component={Home} />
            <Redirect exact from={`${url}`} to={`${url}`} />
            <PrivateRoute
              path={`${url}dashboard`}
              component={Dashboard}
              exact
            />
            <Route component={NotFound} />
          </Switch>
        </Content>
      </Layout>
    </>
  );
};
export default Public;
