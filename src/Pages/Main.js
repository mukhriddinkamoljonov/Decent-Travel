import City from "./cites/City";
import Home from "./home/Home";
import Umrah from "./umrah/Umrah";
import Samarqand from "./samarqand/samarqand";
import Attractions from "./attractions/Attractions";
import AboutUs from "./AboutUs/AboutUs";
import Questions from "./Questions/Questions";

export const Main = [
  {
    path: "/",
    page: <Home />,
  },
  {
    path: "/cites",
    page: <City />,
  },
  {
    path: "/umrah",
    page: <Umrah />,
  },
  {
    path: "/samarqand",
    page: <Samarqand />,
  },
  {
    path: "/attractions",
    page: <Attractions />,
  },
  {
    path: "/aboutus",
    page: <AboutUs />,
  },
  {
    path: "/questions",
    page: <Questions />,
  },
];
