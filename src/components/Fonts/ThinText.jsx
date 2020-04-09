import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const ThinText = props => {
  const s = useStyles();
  return <p className={[{ fontSize: 20 }, s.text]}>{props.children}</p>;
};

const useStyles = makeStyles(theme => ({
  text: { padding: 0, margin: 0, color: "#000" }
}));
