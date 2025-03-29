import Home from "./components/Home.jsx";
import Test from "./components/Test.jsx";
import Login from "./components/Login.jsx";

export const ROUTES = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Test",
    path: "/test",
    component: <Test />,
  },
  {
    name: "Login",
    path: "/login",
    component: <Login />,
  },
];
