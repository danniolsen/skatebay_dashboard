"use-strict";
import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";

function AuthInfo(props) {
  const s = useStyles();
  return (
    <div>
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

export default AuthInfo;

const useStyles = makeStyles(theme => ({
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
  tinyTxt: { marginTop: "5px" }
}));

//AuthInfo.defaultProps = {};
//AuthInfo.propTypes = {};
