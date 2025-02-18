import React from "react";
import { useState } from "react";

const FilterItems = ({ onFilterChange }) => {
  const [buttonClicked, setButtonClicked] = useState("All");
  const onFilterChangeCat = (test, value) => {
    onFilterChange(test);

    handleButtonClicked(value);
  };

  const handleButtonClicked = (value) => {
    setButtonClicked(value);
  };

  return (
    <div className="w-full flex justify-center items-center gap-4 pb-4 text-gray-500/50 text-[.8rem]">
      <div>
        <button
          className={`w-full shadow-sm px-2 py-1 ${
            buttonClicked === "All" ? "bg-gray-500 text-white rounded-sm" : ""
          }`}
          name="All"
          onClick={(e) => onFilterChangeCat("All", e.target.name)}
        >
          All
        </button>
      </div>
      <div>
        <button
          className={`w-full shadow-sm px-2 py-1 ${
            buttonClicked === "men's clothing"
              ? "bg-gray-500 text-white rounded-sm"
              : ""
          }`}
          name="men's clothing"
          onClick={(e) => onFilterChangeCat("men's clothing", e.target.name)}
        >
          Men
        </button>
      </div>
      <div>
        <button
          className={`w-full shadow-sm px-2 py-1 ${
            buttonClicked === "women's clothing"
              ? "bg-gray-500 text-white rounded-sm"
              : ""
          }`}
          name="women's clothing"
          onClick={(e) => onFilterChangeCat("women's clothing", e.target.name)}
        >
          Women
        </button>
      </div>
      <div>
        <button
          className={`w-full shadow-sm px-2 py-1 ${
            buttonClicked === "jewelery"
              ? "bg-gray-500 text-white rounded-sm"
              : ""
          }`}
          name="jewelery"
          onClick={(e) => onFilterChangeCat("jewelery", e.target.name)}
        >
          Jewelry
        </button>
      </div>
      <div>
        <button
          className={`w-full shadow-sm px-2 py-1 ${
            buttonClicked === "electronics"
              ? "bg-gray-500 text-white rounded-sm"
              : ""
          }`}
          name="electronics"
          onClick={(e) => onFilterChangeCat("electronics", e.target.name)}
        >
          Electronics
        </button>
      </div>
    </div>
  );
};

export default FilterItems;
