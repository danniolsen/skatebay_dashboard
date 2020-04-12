"use-strict";
import React, { useState, useEffect } from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";
import google from "../assets/buttons/btn_google.png";
import DefaultContainer from "../components/containers/DefaultContainer";
import GoogleAuth from "../features/firebaseAuth";
import firebase from "firebase/app";
import firebaseConfig from "../firebase/FirebaseConfig";

function AuthScreen(props) {
  const s = useStyles();
  const [setAuthData] = useState();

  useEffect(
    () => {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      firebase.auth().onAuthStateChanged(user => {
        if (user != null) {
          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(idToken => {
              setAuthData(idToken);
            });
        }
      });
    },
    [setAuthData]
  );

  const signIn = async () => {
    let data = await GoogleAuth();
    console.log(data);
  };

  return (
    <div className={s.root}>
      <div className={s.rightCon}>
        <div className={s.authCon}>
          <DefaultContainer headline="Skatebay" center>
            <div className={s.button}>
              <img
                onClick={() => signIn()}
                className={s.btnImage}
                src={google}
                alt="google sign in button"
              />
            </div>
          </DefaultContainer>
        </div>
      </div>

      <div className={s.leftCon}>
        <header className={s.header}>
          <h1 className={s.headerTxt}>Skatebay Dashboard</h1>
        </header>

        <div className={s.ball} />

        <section className={s.section}>
          <IconItem icon="bar_chart" name="Statistics" />
          <IconItem icon="people_alt" name="Users" />
          <IconItem icon="notification_important" name="Moderation" />
          <IconItem icon="bug_report" name="Bug reports" />
        </section>

        <section className={s.smallText}>
          <p className={s.tinyTxt}>
            A dashboard tool for the Skatebay mobile application.
          </p>
          <p className={s.tinyTxt}>Moderation and content control.</p>
          <p className={s.tinyTxt}>Metrics on users and spots.</p>
        </section>
      </div>
      <div className={s.devInfo}>
        <p>Skatebay production - 2020</p>
      </div>
    </div>
  );
}

const IconItem = props => {
  const s = useStyles();
  const { icon, name } = props;
  return (
    <div className={s.iconCon}>
      <div className={s.icon}>
        <i className="material-icons" style={{ fontSize: 35 }}>
          {icon}
        </i>
      </div>
      <p className={s.iconTxt}>{name}</p>
    </div>
  );
};

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
  header: {
    marginTop: "20%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "5%"
    }
  },
  headerTxt: { color: "#FFF", fontWeight: 100, fontSize: 30 },
  ball: {
    width: "10px",
    height: "10px",
    margin: "20px auto",
    borderRadius: 7.5
  },
  section: {
    marginTop: 20,
    [theme.breakpoints.down("md")]: {
      width: "60%",
      margin: "30px auto"
    }
  },
  iconCon: {
    width: 110,
    textAlign: "-webkit-center",
    display: "inline-block",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginBottom: 30
    },
    [theme.breakpoints.down("sm")]: {
      width: "25%"
    }
  },
  icon: { padding: 5, width: 39, background: "#FFF", borderRadius: 10 },
  iconTxt: { color: "#FFF", marginTop: 7 },
  smallText: { color: "#FFF", fontSize: 14, marginTop: "5%" },
  tinyTxt: { marginTop: "5px" },

  // right
  rightCon: {
    width: "65%",
    height: "100vh",
    float: "right",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "50vh"
    }
  },
  authCon: {
    margin: "20% auto",
    width: "40%"
  },
  button: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center"
  },
  btnImage: { width: "45%" },
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

//Auth.defaultProps = {};
//Auth.propTypes = {};
