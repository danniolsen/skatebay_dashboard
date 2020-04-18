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
    firebase.auth().onAuthStateChanged(user => {
      setLoading(true);
      if (user) {
        firebase
          .auth()
          .currentUser.getIdToken(true)
          .then(function(idToken) {
            setSignedIn(true);
            setTimeout(() => {
              setLoading(false);
            }, 1200);
          });
      } else {
        setSignedIn(false);
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
        {loading && <Route to="/auth" component={Loading} />}
        {!signedIn && !loading && <Route to="/auth" component={AuthScreen} />}
        {signedIn &&
          !loading &&
          indexRoutes.map((item, key) => {
            return <Route exact to="/" component={item.component} key={key} />;
          })}
      </Switch>
    </Router>
  );
};

export default App;
