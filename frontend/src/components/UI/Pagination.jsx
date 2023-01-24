import React from "react";
import "@components/UI/Pagination.css";

function Pagination({ offresPerPage, totalOffres, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalOffres / offresPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center my-5 mt-16">
        {pageNumbers.map((number) => (
          <li key={number} className="">
            <button
              type="button"
              className="nextPage px-4 mx-2 py-2 border-2 border-darkPink rounded-md"
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
