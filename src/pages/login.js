import React, { useState } from "react";

import axios from "axios";

import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      await axios.post("/api/login", { email, password });

      console.log("Login Done");

      router.push({
        pathname: "/dashboard",

        query: { email }, // Pass the email as a query parameter
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;