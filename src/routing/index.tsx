import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { NotFound } from "../components/common/404";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Public = React.lazy(() => import("./public"));

const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;

const Routing: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Suspense
            fallback={
              <div className="suspense">
                <Spin indicator={antIcon} />
              </div>
            }
          >
            <Public />
          </Suspense>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routing;
