import React from "react";
import FormConsultants from "@components/UI/ConsultantForm";
import CardStats from "@components/UI/CardStats";

export default function AdminConsultant() {
  return (
    <div className="flex flex-col items-center w-full ">
      <CardStats />
      <FormConsultants />
    </div>
  );
}
