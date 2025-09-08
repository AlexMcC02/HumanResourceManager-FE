import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Employee = {
  firstName: string;
  secondName: string;
  band: string;
  jobRole: string;
  salary: number;
};

function Employee() {
  const { id } = useParams();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const bandMap: { [key: number]: string } = {
    0: "Trainee",
    1: "Associate",
    2: "Manager",
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const url =
          "http://localhost:5030/human_resource_manager/api/employees/" + id;
        const response = await fetch(url);
        console.log("Attempted to reach: " + url);
        const data = await response.json();
        console.log("Fetched employee:" + data);
        setEmployee(data);
      } catch (error) {
        console.error("Error fetching employee:" + error);
      }
    };

    fetchEmployee();
  }, [id]);

  const deleteEmployee = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await axios.delete(
        "http://localhost:5030/human_resource_manager/api/delete_employee/" +
          id,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
          },
        }
      );
      console.log("Delete employee response", response);
      navigate("/employees");
    } catch (error) {
      console.error("Could not create employee", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <div className="text-center mt-3">
        <h1 className="text-5xl font-bold mt-16">Human Resource Manager</h1>
        <p className="text-xl text-fuchsia-400">
          This is Employee #{id}'s page!
        </p>
      </div>
      <div className="flex-grow flex items-center justify-center w-full">
        <div className="border-gray-700 border-1 p-5">
          <div className="text-center">
            <h1 className="text-2xl">Employee Details</h1>
            <hr className="border-gray-600 my-4"></hr>
          </div>
          <div className="pr-50 space-y-4">
            <p>
              <strong>First Name: </strong>
              {employee?.firstName}
            </p>
            <p>
              <strong>Second Name: </strong>
              {employee?.secondName}
            </p>
            <p>
              <strong>Band: </strong>
              {employee ? bandMap[Number(employee.band)] : ""}
            </p>
            <p>
              <strong>Job role: </strong>
              {employee?.jobRole}
            </p>
            <p>
              <strong>Salary: £ </strong>
              {employee?.salary}
            </p>
          </div>
          <hr className="border-gray-600 my-4"></hr>
          <div className="mt-4 flex justify-between items-center">
            <a
            href={`/edit_employee/${id}`} 
            className="bg-blue-800 border hover:bg-blue-900 active:bg-blue-950 border-blue-700 px-4 py-2">
              Edit Details
            </a>
            <button
              className="bg-red-800 border hover:bg-red-900 active:bg-red-950 border-red-700 px-4 py-2"
              onClick={deleteEmployee}
            >
              Delete Employee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
