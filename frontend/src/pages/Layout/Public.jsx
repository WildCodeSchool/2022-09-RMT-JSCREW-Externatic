import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "@components/NavBar/NavBar";
import Footer from "@components/Footer/footer";

function CustmrSite() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default CustmrSite;
