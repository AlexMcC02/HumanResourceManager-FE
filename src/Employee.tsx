import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  useEffect(() => {
    const fetchEmployees = async () => {
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

    fetchEmployees();
  }, [id]);

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
            <h1 className="text-2xl pb-4">Employee Details</h1>
            <hr className="border-gray-600 pb-4"></hr>
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
        </div>
      </div>
    </div>
  );
}

export default Employee;
