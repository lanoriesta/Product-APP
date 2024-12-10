import React from "react";

const Loader = () => {
  return (
    <div className="loader-con">
      <div className="animate-pulse flex flex-col gap-2 w-full">
        <div className=" h-[200px] w-full rounded-md bg-gray-200"></div>
        <div className=" w-full h-5 rounded-md bg-gray-200"></div>
        <div className=" w-full h-5 rounded-md bg-gray-200"></div>
      </div>
    </div>
  );
};

export default Loader;
