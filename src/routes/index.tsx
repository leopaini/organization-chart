import React from "react";
import { StoreProvider } from "../store";
import { createBrowserHistory } from "history";
import { Router, Switch, Route, Redirect } from "react-router-dom";

// Components
import Main from "../components/Main";
import Home from "../components/Home";
import Employees from "../components/Employees";

export interface IProps {}

const Routes: React.SFC<IProps> = () => {
  const history = createBrowserHistory();

  return (
    <StoreProvider>
      <Router history={history}>
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/chart" component={Employees} />
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Main>
      </Router>
    </StoreProvider>
  );
};

export default Routes;
