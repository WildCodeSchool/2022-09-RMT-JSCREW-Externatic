import React from "react";
import "@components/UI/Pagination.css";

function Pagination({ setPages, index }) {
  return (
    <div>
      <button
        type="button"
        className="nextPage px-4 mx-2 py-2 border-2 border-darkPink rounded-md"
        onClick={() => setPages({ page: index + 1 })}
      >
        {index + 1}
      </button>
    </div>
  );
}

export default Pagination;
