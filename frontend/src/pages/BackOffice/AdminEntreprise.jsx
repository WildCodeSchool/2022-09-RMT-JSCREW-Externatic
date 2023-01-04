import React from "react";
import EntrepriseForm from "@components/UI/EntrepriseForm";
import CardStats from "@components/UI/CardStats";

function AdminEntreprise() {
  return (
    <div className="flex flex-col items-center w-full ">
      <CardStats />
      <EntrepriseForm />
    </div>
  );
}
export default AdminEntreprise;
