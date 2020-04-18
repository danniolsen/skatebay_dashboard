import React from "react";
import { makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { ListItemIcon, ListItemText } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";
import { mainNavigation } from "../../navigation/navigation";
import logosmall from "../../assets/images/logo_small.png";
import { SignOut } from "../../features/firebaseAuth";

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

  const signUserOut = async () => {
    await SignOut().then(suc => {
      history.push("/");
    });
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
                  key={navItem.navName}
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
                  <ListItemText primary={navItem.navName} />
                </ListItem>
              );
            }
            return null;
          })}
        </List>

        <div className={s.signOutCon}>
          <Divider />
          <List>
            <ListItem button onClick={e => signUserOut()}>
              <ListItemIcon>
                <i className="material-icons" style={{ color: "#34495e" }}>
                  exit_to_app
                </i>
              </ListItemIcon>
              <ListItemText primary="Sign out" />
            </ListItem>
          </List>
        </div>
      </div>
    </Drawer>
  );
};

export default SideBar;

const useStyles = makeStyles(theme => ({
  drawerPaper: { width: drawerWidth },
  toolbar: theme.mixins.toolbar,
  iconCon: { padding: "9px 20px" },
  icon: { width: "30px", float: "left", marginTop: 8 },
  iconTxt: {
    paddingLeft: "50px",
    paddingTop: "8px",
    fontSize: 20
  },
  signOutCon: {
    position: "absolute",
    width: "100%",
    bottom: 0
  }
}));
