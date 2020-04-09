"use-strict";
import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";

function MainContent(props) {
  const s = useStyles();
  return <div className={s.root}>{props.children}</div>;
}

export default MainContent;

const useStyles = makeStyles(theme => ({
  root: {}
}));

/*MainContent.defaultProps = {};
MainContent.propTypes = {};*/
