import axios from "axios";
import { useState } from "react";

function CreateEmployee() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [band, setBand] = useState(0); // 0 - Trainee, 1 - Associate, 2 - Manager
  const [jobRole, setJobRole] = useState("");
  const [salary, setSalary] = useState(0);

  const createNewEmployee = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5030/human_resource_manager/api/create_employee",
        {
          firstName: firstName,
          secondName: secondName,
          band: band,
          jobRole: jobRole,
          salary: salary,
        },
        {headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`
        }}
      );

      console.log("Create employee response", response.data);
    } catch (error) {
      console.error("Could not create employee", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-cover bg-center bg-black text-white">
      <div className="text-center mt-3">
        <h1 className="text-5xl font-bold">Human Resource Manager</h1>
        <p className="text-xl text-green-400">
          This is the create employee page!
        </p>
      </div>
      <div className="mt-6">
        <form
          className="border border-gray-700 px-4 py-4 space-y-4"
          onSubmit={createNewEmployee}
        >
          <div className="flex justify-between items-center">
            <label htmlFor="first_name">First Name:</label>
            <input
              className="p-2 border border-gray-700 bg-gray-800"
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Adam"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center space-x-10">
            <label htmlFor="second_name">Second Name:</label>
            <input
              className="p-2 border border-gray-700 bg-gray-800"
              type="text"
              id="second_name"
              name="second_name"
              placeholder="Smith"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center space-x-10">
            <label htmlFor="band">Band:</label>
            <select
              className="p-2 border border-gray-700 bg-gray-800 pr-23 py-2.5"
              name="band"
              id="band"
              onChange={(e) => setBand(Number(e.target.value))}
            >
              <option value="0">Trainee</option>
              <option value="1">Associate</option>
              <option value="2">Manager</option>
            </select>
          </div>

          <div className="flex justify-between items-center space-x-10">
            <label htmlFor="job_role">Job Role:</label>
            <input
              className="p-2 border border-gray-700 bg-gray-800"
              type="text"
              id="job_role"
              name="job_role"
              placeholder="Software Engineer"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center space-x-10">
            <label htmlFor="salary">Salary (£):</label>
            <input
              className="p-2 border border-gray-700 bg-gray-800"
              type="text"
              id="salary"
              name="salary"
              placeholder="25000"
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
            />
          </div>
          <hr className="border-gray-700"></hr>
          <p className="text-red-400">
            <strong>Invalid inputs:</strong> This is a placeholder...
          </p>
          <button className="bg-gray-800 border hover:bg-gray-900 active:bg-gray-950 border-gray-700 px-4 py-2">
            Create Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEmployee;
