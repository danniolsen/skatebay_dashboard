import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/";
import { useHistory } from "react-router-dom";
import { mainNavigation } from "../../navigation/navigation";

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
      <div className={s.routeCon}>
        <div className={s.iconCon}>
          <i className="material-icons icon" style={{ color: routeData.color }}>
            {routeData.icon}
          </i>
        </div>
        <div className={s.routename}>{routeData.name}</div>
      </div>
    </div>
  );
};

export default Header;

const useStyles = makeStyles(theme => ({
  root: { marginLeft: 240, height: 20, padding: 0 },
  routeCon: { padding: 0, margin: 0 },
  iconCon: { float: "left", marginRight: 30, marginTop: 2, fontSize: 10 },
  routename: { color: "#34495e", fontSize: 20, float: "left" }
}));
