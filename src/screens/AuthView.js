"use-strict";
import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";

function Auth(props) {
  const s = useStyles();
  return (
    <div className={s.root}>
      <div className={s.rightCon}>
        <p>auth form (google sign in)</p>
        <p>year of dev in right bottom corner</p>
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
          <p className={s.tinyTxt}>Metrics on users and spots.</p>
          <p className={s.tinyTxt}>Moderation and content control</p>
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

export default Auth;

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    background: "#FFF"
  },
  leftCon: {
    width: "35%",
    height: "100vh",
    float: "left",
    textAlign: "center",
    background: "#C8D7D4",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto",
      paddingTop: "1%"
    }
  },
  header: { marginTop: "20%" },
  headerTxt: { color: "#FFF", fontWeight: 100, fontSize: 30 },
  ball: {
    width: "10px",
    height: "10px",
    background: "#FFF",
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
      width: "50%"
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
    background: "#F8F8F8",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto"
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

//Auth.defaultProps = {};
//Auth.propTypes = {};
