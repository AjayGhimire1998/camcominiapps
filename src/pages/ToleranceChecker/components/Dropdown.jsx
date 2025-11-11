import React, { useEffect, useState } from "react";

const Dropdown = ({ type }) => {
  const dropdownValues = {
    material: ["Housing Bores", "Shell Bores", "Shaft"],
    spec: ["H5", "H6", "H7", "H8", "H9", "h7", "h8", "h9"],
    it: ["IT5", "IT6", "IT7", "IT8"],
  };

  const [typeRequested, setTypeRequested] = useState(type);

  useEffect(() => {
    setTypeRequested(type);
  }, []);
  return (
    <div className="w-auto border flex flex-col mt-1 rounded-md bg-[#ffcc00] dark:bg-[#fefefe] dark:text-black ">
      {dropdownValues[typeRequested].map((val, i) => {
        return (
          <div className="border-b flex rounded-md items-center align-middle justify-center cursor-pointer hover:bg-[#f4c301] dark:hover:bg-gray-200">
            <span id={i} className="">
              {val}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Dropdown;
