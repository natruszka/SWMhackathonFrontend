import Home from "./components/Home.jsx";
import Test from "./components/Test.jsx";
import Login from "./components/Login.jsx";
import { Map } from "./components/map/Map.jsx";

export const ROUTES = [
  {
    name: "🥚",
    path: "/",
    component: <Home />,
  },
  {
    name: "Login",
    path: "/login",
    component: <Login />,
  },
  {
    name: "Map",
    path: "/map",
    component: <Map />,
  },
];
