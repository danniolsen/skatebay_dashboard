import React from "react";
import { makeStyles } from "@material-ui/core/";

const Header = props => {
  const s = useStyles();

  return (
    <div className={s.root}>
      <p className={s.text}>{"routeName"}</p>
    </div>
  );
};

export default Header;

const useStyles = makeStyles(theme => ({
  root: { marginLeft: 240, height: 20, padding: 0 },
  text: { padding: 0, margin: 0, color: "#34495e", fontSize: 17 }
}));
