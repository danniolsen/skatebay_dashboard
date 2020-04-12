import StatisticsScreen from "../screens/StatisticsScreen";
import UsersScreen from "../screens/UsersScreen";
import ModerationScreen from "../screens/ModerarionScreen";
import BugReportsScreen from "../screens/BugReportsScreen";
import ShopsScreen from "../screens/ShopsScreen";

const mainNavigation = [
  {
    path: "/",
    name: "Application Statistics",
    navName: "Statistics",
    icon: "bar_chart",
    color: "#2980b9",
    component: StatisticsScreen
  },
  {
    path: "/users",
    name: "User Profiles",
    navName: "Users",
    icon: "people_alt",
    color: "#16a085",
    component: UsersScreen
  },
  {
    path: "/shops",
    name: "Shop Profiles",
    navName: "Shops",
    icon: "shopping_cart",
    color: "#9b59b6",
    component: ShopsScreen
  },
  {
    path: "/moderation",
    name: "Spot Moderation",
    navName: "Moderation",
    icon: "notification_important",
    color: "#f39c12",
    component: ModerationScreen
  },
  {
    path: "/bugreports",
    name: "Skatespot - Bug Reports",
    navName: "Bug Reports",
    icon: "bug_report",
    color: "#e74c3c",
    component: BugReportsScreen
  },
  {
    redirect: true,
    path: "/",
    to: "/",
    name: "Statistics"
  }
];

export { mainNavigation };
