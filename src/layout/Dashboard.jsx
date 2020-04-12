import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { mainNavigation } from "../navigation/navigation";
import { Switch, Route } from "react-router-dom";
import MainContent from "../components/layout/MainContent";
import Header from "../components/layout/Header";
import SideBar from "../components/sidebar/Sidebar";

const drawerWidth = 240;

const Dashboard = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.header}>
        <Header />
      </AppBar>

      <nav className={classes.drawer}>
        <SideBar data={props} />
      </nav>
      <div className={classes.toolbar} />
      <main className={classes.content}>
        <Route>
          <Switch>
            <MainContent>
              {mainNavigation.map((prop, key) => {
                return (
                  <Route
                    exact
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              })}
            </MainContent>
          </Switch>
        </Route>
      </main>
    </div>
  );
};

export default Dashboard;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  header: {
    background: "#FFF",
    boxShadow: "none",
    padding: 22,
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  content: {
    flexGrow: 1,
    marginTop: 60,
    padding: theme.spacing(3)
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  toolbar: theme.mixins.toolbar
}));
