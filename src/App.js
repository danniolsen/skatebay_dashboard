import React, { useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from "./navigation";
import { history } from "./navigation/history";
import AuthScreen from "./screens/AuthScreen";
import firebase from "firebase/app";

const App = props => {
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => {
    /*firebase
      .auth()
      .signOut()
      .then(function() {
        //setSignedIn(false);
      })
      .catch(function(error) {
        // An error happened.
      });*/

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setSignedIn(true);
      } else {
        console.log("no user");
        // No user is signed in.
      }
    });
  }, []);

  // check firebase auth state change
  // in effect function
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
