"use-strict";
import React from "react";
import { makeStyles } from "@material-ui/core/";
import logo from "../assets/images/logo_small.png";

function Loading(props) {
  const s = useStyles();
  return (
    <div className={s.root}>
      <div className={s.loadingCon}>
        <img src={logo} className={s.logo} alt="skatebay logo pulsing" />
        <p className={s.text}>Skatebay</p>
      </div>
    </div>
  );
}
export default Loading;

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  loadingCon: {
    animation: "$pulseZoom 2.0s infinite",
    position: "absolute",
    alignItems: "center"
  },
  "@keyframes pulseZoom": {
    "0%": { transform: "scale(1.5)" },
    "50%": { transform: "scale(1.8, 1.8)" },
    "100%": { transform: "scale(1.5)" }
  },
  logo: { float: "left", width: "70px" },
  text: { float: "left", fontSize: 25, padding: 15, fontWeight: 200 }
}));

//Loading.defaultProps = {};
//Loading.propTypes = {};
