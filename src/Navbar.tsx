import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("jwt_token"));
  }, [navigate]);

  return (
    <>
      <div className="flex items-center justify-center bg-blue-600 h-12 fixed w-full">
        <div className="space-x-4 text-white">
          <a href="/">Home</a>
          <a href="/employees">Employees</a>
          <a href="/create_employee">Create Employee</a>
          {!isLoggedIn && <a href="/login">Login</a>}
          {isLoggedIn && <a href="/logout">Logout</a>}
          {isLoggedIn && <a>My Account</a>}
        </div>
      </div>
    </>
  );
}

export default Navbar;
