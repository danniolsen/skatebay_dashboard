import Statistics from "../../screens/StatisticsView";
import Moderation from "../../screens/Moderarion";

const mainNavigation = [
  {
    path: "/",
    name: "Statistics",
    icon: "pie_chart",
    component: Statistics
  },
  {
    path: "/moderation",
    name: "Moderation",
    icon: "menu",
    component: Moderation
  },
  {
    redirect: true,
    path: "/",
    to: "/",
    name: "Statistics"
  }
];

export { mainNavigation };
