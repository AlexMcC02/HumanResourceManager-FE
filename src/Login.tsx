import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5030/human_resource_manager/auth/login", {
        username: username,
        password: password
      });

      console.log("JWT Token:", response.data.jwt);
      localStorage.setItem("jwt_token", response.data.jwt)
      navigate("/")
    } catch (error) {
      const axiosError = error as AxiosError<{error: string}>
      const message = axiosError.response?.data.error ?? "An unexpected error occurred!";
      setErrorMessage(message);
      console.error("Login failed", axiosError.response?.data.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-cover bg-center bg-black text-white">
      <div className="text-center mt-3">
        <h1 className="text-5xl font-bold mt-16">Human Resource Manager</h1>
        <p className="text-xl text-yellow-400">
          This is the login page!
        </p>
      </div>
      <div className="mt-6">
        <form className="border border-gray-700 px-4 py-4 space-y-4"
        onSubmit={handleLogin}>
          <div className="flex justify-between items-center">
            <label htmlFor="username">Username:</label>
            <input
              className="p-2 border border-gray-700 bg-gray-800"
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={username}
              onChange={ (e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center space-x-10">
            <label htmlFor="password">Password:</label>
            <input
              className="p-2 border border-gray-700 bg-gray-800"
              type="password"
              id="password"
              name="password"
              placeholder="*******"
              value={password}
              onChange={ (e) => setPassword(e.target.value)}
            />
          </div>
          <hr className="border-gray-700"></hr>
          {errorMessage && <p className="text-red-400"><strong>Invalid inputs:</strong> {errorMessage}</p>}
          <button className="bg-gray-800 border hover:bg-gray-900 active:bg-gray-950 border-gray-700 px-4 py-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
