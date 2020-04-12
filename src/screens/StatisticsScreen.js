"use-strict";
import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";

function StatisticsScreen(props) {
  let classes = useStyles();
  return <div className={classes.root}>Statistics X</div>;
}

const useStyles = makeStyles(theme => ({
  root: {}
}));

//Statistics.defaultProps = {};
//Statistics.propTypes = {};
export default StatisticsScreen;
