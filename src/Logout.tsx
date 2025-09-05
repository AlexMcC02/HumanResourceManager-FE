import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const hasLoggedOut = useRef(false);

  useEffect(() => {
    const logoutUser = async () => {
      if (hasLoggedOut.current) return;
      hasLoggedOut.current = true;
      try {
        const response = await axios.get(
          "http://localhost:5030/human_resource_manager/auth/logout",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
            },
          }
        );
        console.log("Logout successful", response.data);
      } catch (error) {
        console.error("Failed to logout user", error);
      } finally {
        localStorage.removeItem("jwt_token");
        navigate("/");
      }
    };

    logoutUser();
  }, [navigate]);

  return null;
}

export default Logout;
