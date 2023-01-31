import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import User from "../../contexts/User";

function DashboardAdmin() {
  const { user } = useContext(User.UserContext);

  if (user.role !== "administrateur") {
    return <Navigate to="/dashboard/offres" replace />;
  }
  return (
    <div className="flex">
      <Outlet />
    </div>
  );
}
export default DashboardAdmin;
