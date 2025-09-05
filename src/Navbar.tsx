import { useEffect, useState } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("jwt_token"));
  }, []);

  return (
    <>
      <div className="bg-blue-600 min-h-12 flex items-center justify-center">
        <div className="space-x-4 text-white">
          <a href="/">Home</a>
          <a href="/employees">Employees</a>
          <a href="/create_employee">Create Employee</a>
          { !isLoggedIn && <a href="/login">Login</a>}
          { isLoggedIn && <a href="/logout">Logout</a>}
          {isLoggedIn && <a>My Account</a>}
        </div>
      </div>
    </>
  );
}

export default Navbar;
