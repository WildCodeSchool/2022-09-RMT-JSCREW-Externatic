import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import User from "../../contexts/User";

function PublicCandidat() {
  const { user } = useContext(User.UserContext);
  if (user && user.role !== "candidat") {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PublicCandidat;
