import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

function StudentRoute({ children }) {
  const user = localStorage.getItem("currUserRole");
  const navigate = useNavigate();

  if (user) {
    if (user && user === "Learner") {
      return children;
    } else {
      setTimeout(() => {
        navigate(-1);
      }, 1);
    }
  }
  return <Navigate to="/login" />;
}
export default StudentRoute;
