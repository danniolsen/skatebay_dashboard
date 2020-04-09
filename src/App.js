import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from "./navigation/routes";
import { history } from "./navigation/routes/history";

const App = props => {
  return (
    <Router history={history}>
      <Switch>
        {indexRoutes.map((item, key) => {
          return <Route to="/" component={item.component} key={key} />;
        })}
      </Switch>
    </Router>
  );
};

export default App;
