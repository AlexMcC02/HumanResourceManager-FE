function Navbar() {
  return (
    <>
      <div className="bg-blue-600 min-h-12 flex items-center justify-center">
        <div className="space-x-4 text-white">
          <a href="/">Home</a>
          <a href="/employees">Employees</a>
          <a href="/create_employee">Create Employee</a>
          <a>Login</a>
          <a>My Account</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
