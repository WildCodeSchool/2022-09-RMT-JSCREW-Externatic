import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "@components/UI/Sidebar";
import User from "../../contexts/User";

function Dashboard() {
  const { user } = useContext(User.UserContext);

  if (user.role === "candidat") {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}
export default Dashboard;
