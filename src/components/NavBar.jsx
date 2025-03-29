import { ROUTES } from "../routes.jsx";

export default function NavBar({ user, setUser }) {
  const routes = ROUTES.filter((route) => route.name !== "Login");
  // const routes = user
  //   ? ROUTES.filter((route) => route.name !== "Login")
  //   : ROUTES.filter((route) => route.name === "Login");
  return (
    <nav className="bg-blue-200">
      <ul className="flex flex-row justify-end">
        {routes.map((route) => (
          <li
            key={route.name}
            className="flex flex-row m-5 bg-blue-300 border-2 border-gray-200 rounded-lg hover:bg-gray-200 px-3 py-1"
          >
            <a className="decoration-0 font-bold" href={route.path}>
              {route.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
