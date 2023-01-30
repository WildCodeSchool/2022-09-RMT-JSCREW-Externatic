import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import User from "../../contexts/User";

function DashboardConsultant() {
  const { user } = useContext(User.UserContext);

  if (user.role !== "consultant") {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="flex">
      <Outlet />
    </div>
  );
}
export default DashboardConsultant;
