import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from "./navigation/routes";
import { history } from "./navigation/routes/history";
import Auth from "./screens/AuthView";

const App = props => {
  const [signedIn] = useState(false);

  return (
    <Router history={history}>
      <Switch>
        {!signedIn && <Route to="/auth" component={Auth} />}
        {signedIn &&
          indexRoutes.map((item, key) => {
            console.log("hej hej");
            return <Route to="/" component={item.component} key={key} />;
          })}
      </Switch>
    </Router>
  );
};

export default App;
