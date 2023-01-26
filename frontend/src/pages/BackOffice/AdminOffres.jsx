import React from "react";
import OffreForm from "@components/UI/OffreForm";
import CardStats from "@components/UI/CardStats";

export default function AdminOffres() {
  return (
    <div className="flex flex-col items-center w-full ">
      <CardStats />
      <OffreForm />
    </div>
  );
}
