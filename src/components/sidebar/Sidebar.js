import React from "react";
import { makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";
import { mainNavigation } from "../../navigation/routes/navigation";
import { Menu } from "react-feather";

const drawerWidth = 240;

const SideBar = props => {
  const classes = useStyles();
  let history = useHistory();

  const goToTab = navItem => {
    history.push(navItem.path);
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
                  key={navItem.name}
                  onClick={() => goToTab(navItem)}
                >
                  <Menu />
                  <p>{navItem.name}</p>
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
