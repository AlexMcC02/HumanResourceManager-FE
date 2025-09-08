import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import CreateEmployee from "./CreateEmployee";
import Employees from "./Employees";
import Login from "./Login";
import Logout from "./Logout";
import Employee from "./Employee";
import EditEmployee from "./EditEmployee";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/:id" element={<Employee />} />
        <Route path="/create_employee" element={<CreateEmployee />} />
        <Route path="/edit_employee/:id" element={<EditEmployee />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
