"use-strict";
import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";

function Auth(props) {
  const classes = useStyles();
  return <div className={classes.root}>Auth view</div>;
}

export default Auth;

const useStyles = makeStyles(theme => ({
  root: { background: "#CCC" }
}));

//Auth.defaultProps = {};
//Auth.propTypes = {};
