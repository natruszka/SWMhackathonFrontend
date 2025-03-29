import NavBar from "./components/NavBar.jsx";
import { ROUTES } from "./routes.jsx";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  let component = ROUTES.find(
    (route) => route.path === window.location.pathname,
  )?.component;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <div className="flex flex-col m-8">{component}</div>
    </>
  );
}

export default App;
