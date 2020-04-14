import React, { useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from "./navigation";
import { history } from "./navigation/history";
import AuthScreen from "./screens/AuthScreen";
import Loading from "./screens/Loading";
import firebase from "firebase/app";

const App = props => {
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        //setSignedIn(false);
      })
      .catch(function(error) {
        // An error happened.
      });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setSignedIn(true);
        setTimeout(() => {
          setLoading(false);
        }, 1200);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 1200);
      }
    });
  }, []);

  // check firebase auth state change
  // in effect function
  return (
    <Router history={history}>
      <Switch>
        {loading && <Route to="/" component={Loading} />}
        {!signedIn && !loading && <Route to="/auth" component={AuthScreen} />}
        {signedIn &&
          !loading &&
          indexRoutes.map((item, key) => {
            return <Route to="/" component={item.component} key={key} />;
          })}
      </Switch>
    </Router>
  );
};

export default App;
