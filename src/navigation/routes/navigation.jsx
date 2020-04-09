import Statistics from "../../screens/StatisticsView";
import Users from "../../screens/Users";
import Moderation from "../../screens/Moderarion";
import BugReports from "../../screens/BugReports";

const mainNavigation = [
  {
    path: "/",
    name: "Statistics",
    icon: "pie_chart",
    component: Statistics
  },
  {
    path: "/users",
    name: "Users",
    icon: "menu",
    component: Users
  },
  {
    path: "/moderation",
    name: "Moderation",
    icon: "menu",
    component: Moderation
  },
  {
    path: "/bugreports",
    name: "Bug Reports",
    icon: "menu",
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
