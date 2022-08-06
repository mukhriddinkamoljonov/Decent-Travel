import City from "./cites/City";
import Home from "./home/Home";
import Umrah from "./umrah/Umrah";
import Attractions from "./attractions/Attractions"
import Contacts from "./contack/Contacts";

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
    path: "/attractions",
    page: <Attractions />
  },
  {
    path: "/contacts",
    page: <Contacts/>
  }
];
