import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@components/UI/Sidebar";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}
export default Dashboard;
