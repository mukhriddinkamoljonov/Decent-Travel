import City from "./cites/City";
import Home from "./home/Home";
import Umrah from "./umrah/Umrah";
import Samarqand from "./samarqand/samarqand";

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
  }
];
