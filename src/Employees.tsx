import { useEffect, useState } from "react";

function Employees() {
  const [pageNumber, setPageNumber] = useState(1);
  const [employees, setEmployees] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
    try {
      const url = "http://localhost:5030/human_resource_manager/api/employees/?Page=" + pageNumber;
      const response = await fetch(url);
      console.log("Attempted to reach: " + url);
      const data = await response.json();
      console.log("Fetched employees:" + data);
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:" + error);
    }
  };

    fetchEmployees();
  }, [refresh, pageNumber]);

  return (
    <div className="flex items-start justify-center min-h-screen bg-cover bg-center bg-black text-white">
      <div className="text-center mt-3">
        <h1 className="text-5xl font-bold">Human Resource Manager</h1>
        <p className="text-xl text-blue-400">This is the employees page!</p>
        <div className="mt-6 flex justify-start">
          <button
            className="bg-gray-800 border hover:bg-gray-900 active:bg-gray-950 border-gray-700 px-4 py-2"
            onClick={() => setRefresh(true)}
          >
            Refresh
          </button>
        </div>
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full border border-gray-700 text-white">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-8 py-2 border border-gray-700">First Name</th>
                <th className="px-8 py-2 border border-gray-700">Last Name</th>
                <th className="px-8 py-2 border border-gray-700">Band</th>
                <th className="px-16 py-2 border border-gray-700">Job Role</th>
                <th className="px-8 py-2 border border-gray-700">Salary</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, idx) => (
                <tr key={idx} className="hover:bg-gray-600">
                  <td className="px-4 py-2 border border-gray-700">
                    {employee["firstName"]}
                  </td>
                  <td className="px-4 py-2 border border-gray-700">
                    {employee["secondName"]}
                  </td>
                  <td className="px-4 py-2 border border-gray-700">
                    {employee["band"]}
                  </td>
                  <td className="px-4 py-2 border border-gray-700">
                    {employee["jobRole"]}
                  </td>
                  <td className="px-4 py-2 border border-gray-700">
                    {"£ " + employee["salary"]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <button
            className="bg-gray-800 border hover:bg-gray-900 active:bg-gray-950 border-gray-700 px-4 py-2"
            onClick={() => {
              if (pageNumber > 1) setPageNumber(pageNumber - 1);
            }}
          >
            Previous Page
          </button>
          <p>Page {pageNumber} of 3</p>
          <button
            className="bg-gray-800 border hover:bg-gray-900 active:bg-gray-950 border-gray-700 px-4 py-2"
            onClick={() => {
              if (pageNumber < 3) setPageNumber(pageNumber + 1);
            }}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Employees;
