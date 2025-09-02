import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import CreateEmployee from "./CreateEmployee";
import Employees from "./Employees";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/create_employee" element={<CreateEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
