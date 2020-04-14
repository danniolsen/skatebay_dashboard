"use-strict";
import React, { useState } from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";
import AuthInfo from "../components/auth/AuthInfo";
import AuthWidget from "../components/auth/AuthWidget";
import GoogleAuth from "../features/firebaseAuth";

function AuthScreen(props) {
  const s = useStyles();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState({ btn: false, form: false });
  const [authError, setAuthError] = useState({ error: null });
  const [btnInactive, setBtnInactive] = useState(true);

  const signUserIn = () => {
    setLoading({ btn: true, form: true });
    setBtnInactive(true);
    GoogleAuth(userData)
      .then(success => {
        if (success.user) {
          setAuthError({ error: success.error });
        }
        if (success.error) {
          setAuthError({ error: success.error });
        }
      })
      .finally(() => {
        setLoading({ btn: false, form: false });
        setBtnInactive(false);
      });
  };

  const updateBtn = status => {
    setBtnInactive(status);
  };

  const setUserDataState = formData => {
    setUserData(formData);
  };

  return (
    <div className={s.root}>
      <div className={s.rightCon}>
        <AuthWidget
          currentData={userData}
          authData={formData => setUserDataState(formData)}
          signInUser={() => signUserIn()}
          loading={loading}
          authError={authError}
          btnInactive={btnInactive}
          btnStatus={status => updateBtn(status)}
        />
      </div>

      <div className={s.leftCon}>
        <AuthInfo />
      </div>
      <div className={s.devInfo}>
        <p>Skatebay production - 2020</p>
      </div>
    </div>
  );
}

export default AuthScreen;

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100vh",
    background: "linear-gradient(90deg, #C8D7D4 35%, #F8F8F8 35%)",
    [theme.breakpoints.down("sm")]: {
      background: "linear-gradient(0deg, #C8D7D4 50%, #F8F8F8 50%)"
    }
  },
  leftCon: {
    width: "35%",
    height: "100vh",
    float: "left",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "50vh"
    }
  },
  rightCon: {
    width: "65%",
    height: "100vh",
    float: "right",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "50vh"
    }
  },
  devInfo: {
    position: "fixed",
    bottom: 10,
    right: 10,
    padding: "10px 15px",
    fontSize: 10,
    color: "#FFF",
    borderRadius: 5,
    background: "rgba(000,000,000, 0.6)"
  }
}));

//Auth.propTypes = {};
//Auth.defaultProps = {};
