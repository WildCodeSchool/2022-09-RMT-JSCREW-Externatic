import React from "react";

function ConsultantSelect({ selectConsultants, consultants }) {
  return (
    <div>
      <div className=" mb-3 flex justify-left">
        <div className="mb-3 xl:w-96">
          <select
            onChange={(e) => {
              selectConsultants(e.target.value);
            }}
            className="form-select appearance-none
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option selected value={0}>
              Consultant
            </option>
            {consultants.map((consultant) => (
              <option key={consultant.id} value={consultant.id}>
                {consultant.nom_consultant}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default ConsultantSelect;
