import React from "react";
import { makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { ListItemIcon, ListItemText } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";
import { mainNavigation } from "../../navigation/routes/navigation";

const drawerWidth = 240;

const SideBar = props => {
  const classes = useStyles();
  let history = useHistory();

  const goToTab = navItem => {
    history.push(navItem.path, navItem.name);
  };

  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper
      }}
      variant="permanent"
      open
    >
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {mainNavigation.map((navItem, index) => {
            if (!navItem.redirect) {
              return (
                <ListItem
                  button
                  //selected={active === proNav.path}
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
  toolbar: theme.mixins.toolbar
}));
