import React from "react";

function TitleContainer({ name }) {
  return (
    <div className="m-10 bg-gray-200 p-2 rounded">
      <div className="flex justify-between">
        <h2 className="text-l text-gray-500 p-2 hover:text-black hover:scale-105 cursor-pointer">
          {name}
        </h2>
        <span className="pagination">
          <a
            className="text-2xl text-gray-400 hover:text-gray-500 inline-flex items-center px-4 border border-transparent font-semibold rounded-md"
            href="#"
          >
            <button>&laquo;</button>
          </a>
          <a
            className="text-2xl text-gray-400 hover:text-gray-500 inline-flex items-center px-4 border border-transparent font-semibold rounded-md"
            href="#"
          >
            <button>&raquo;</button>
          </a>
        </span>
      </div>
    </div>
  );
}

export default TitleContainer;
