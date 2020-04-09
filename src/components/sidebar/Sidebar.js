import React from "react";
import { makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { ListItemIcon, ListItemText } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";
import { mainNavigation } from "../../navigation/routes/navigation";
import logosmall from "../../assets/images/logo_small.png";

const drawerWidth = 240;

const SideBar = props => {
  const s = useStyles();
  let history = useHistory();

  const goToTab = navItem => {
    history.push(navItem.path, navItem.name);
  };

  const isSelected = navItem => {
    let currentPath = history.location.pathname;
    let navPath = navItem.path;

    return currentPath === navPath ? "#f5f5f5" : "#FFF";
  };

  return (
    <Drawer
      classes={{
        paper: s.drawerPaper
      }}
      variant="permanent"
    >
      <div>
        <div className={s.toolbar}>
          <div className={s.iconCon}>
            <img className={s.icon} src={logosmall} alt="skatebay logo" />
            <p className={s.iconTxt}>Skatebay</p>
          </div>
        </div>
        <Divider />
        <List>
          {mainNavigation.map((navItem, index) => {
            if (!navItem.redirect) {
              return (
                <ListItem
                  style={{ background: isSelected(navItem) }}
                  button
                  key={navItem.name}
                  onClick={e => goToTab(navItem)}
                >
                  <ListItemIcon>
                    <i
                      className="material-icons"
                      style={{ color: navItem.color }}
                    >
                      {navItem.icon}
                    </i>
                  </ListItemIcon>
                  <ListItemText primary={navItem.name} />
                </ListItem>
              );
            }
            return null;
          })}
        </List>
      </div>
    </Drawer>
  );
};

export default SideBar;

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  iconCon: { padding: "9px 9px 0 9px" },
  icon: { width: "40px", float: "left", marginTop: 5 },
  iconTxt: { marginLeft: "63px", fontSize: 16 }
}));
