import React from "react";
import Statistics from "../../screens/StatisticsView";
import Users from "../../screens/Users";
import Moderation from "../../screens/Moderarion";
import BugReports from "../../screens/BugReports";

const mainNavigation = [
  {
    path: "/",
    name: "Statistics",
    icon: "bar_chart",
    color: "#2980b9",
    component: Statistics
  },
  {
    path: "/users",
    name: "Users",
    icon: "people_alt",
    color: "#16a085",
    component: Users
  },
  {
    path: "/moderation",
    name: "Moderation",
    icon: "notification_important",
    color: "#f39c12",
    component: Moderation
  },
  {
    path: "/bugreports",
    name: "Bug Reports",
    icon: "bug_report",
    color: "#e74c3c",
    component: BugReports
  },
  {
    redirect: true,
    path: "/",
    to: "/",
    name: "Statistics"
  }
];

export { mainNavigation };
