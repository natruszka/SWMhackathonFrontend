import { useState } from "react";

export default function Login({ setUser }) {
  const [loginData, setLoginData] = useState({ login: "", password: "" });

  function handleSubmit() {}

  return (
    <div className="flex flex-col m-8 w-1/3 content-center">
      <label>Login</label>
      <input
        type="text"
        className=""
        placeholder="Login"
        onChange={(e) =>
          setLoginData({ ...loginData, ["login"]: e.target.value })
        }
      />
      <label>Password</label>
      <input
        type="text"
        placeholder="Password"
        onChange={(e) =>
          setLoginData({ ...loginData, ["password"]: e.target.value })
        }
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
