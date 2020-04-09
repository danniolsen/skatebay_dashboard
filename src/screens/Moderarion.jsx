"use-strict";
import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";

function Moderation(props) {
  let classes = useStyles();
  return <div className={classes.root}>Moderation</div>;
}

const useStyles = makeStyles(theme => ({
  root: {}
}));

//Statistics.defaultProps = {};
//Statistics.propTypes = {};
export default Moderation;
