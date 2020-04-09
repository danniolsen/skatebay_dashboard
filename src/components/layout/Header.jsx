import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/";
import { useHistory } from "react-router-dom";
import { mainNavigation } from "../../navigation/routes/navigation";

const Header = props => {
  const s = useStyles();
  const history = useHistory();

  const [routeData, setRouteData] = useState({ name: "..." });

  useEffect(
    () => {
      let routeStatus = history.location.pathname;
      const route = mainNavigation.find(({ path }) => path === routeStatus);
      setRouteData(route);
    },
    [history.location]
  );

  return (
    <div className={s.root}>
      <p className={s.text}>{routeData.name}</p>
    </div>
  );
};

export default Header;

const useStyles = makeStyles(theme => ({
  root: { marginLeft: 240, height: 20, padding: 0 },
  text: { padding: 0, margin: 0, color: "#34495e", fontSize: 17 }
}));
