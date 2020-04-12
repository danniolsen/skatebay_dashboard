import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from "./navigation";
import { history } from "./navigation/history";
import AuthScreen from "./screens/AuthScreen";

const App = props => {
  const [signedIn] = useState(true);

  return (
    <Router history={history}>
      <Switch>
        {!signedIn && <Route to="/auth" component={AuthScreen} />}
        {signedIn &&
          indexRoutes.map((item, key) => {
            return <Route to="/" component={item.component} key={key} />;
          })}
      </Switch>
    </Router>
  );
};

export default App;
