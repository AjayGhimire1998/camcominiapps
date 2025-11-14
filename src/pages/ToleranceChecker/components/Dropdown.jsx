import React, { useEffect, useState } from "react";
import { BookDownIcon, ChevronDown, MoveLeft } from "lucide-react";

const Dropdown = ({ label, type }) => {
  const dropdownValues = {
    material: ["Housing Bores", "Shell Bores", "Shaft"],
    spec: ["H5", "H6", "H7", "H8", "H9", "h7", "h8", "h9"],
    it: ["IT5", "IT6", "IT7", "IT8"],
  };

  const [typeRequested, setTypeRequested] = useState(type);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    setTypeRequested(type);
  }, []);
  return (
    <div className="flex gap-1 max-sm:text-sm  align-middle items-center">
      <span>{label}</span>
      <div className="">
        <button
          onClick={() => {
            setDropdownVisible(!dropdownVisible);
          }}
          className="border rounded-md flex align-middle items-center px-2 py-0.5 max-sm:px-1.5 bg-[#ffcc00] dark:bg-[#fefefe] dark:text-black max-sm:text-xs"
        >
          {dropdownValues[type][0]} <ChevronDown size={20} />
        </button>
        {dropdownVisible ? (
          <div className="w-auto border  flex flex-col justify-end mt-1 rounded-md bg-[#ffcc00] dark:bg-[#fefefe] dark:text-[#000000] ">
            {dropdownValues[typeRequested].map((val, i) => {
              return (
                <div
                  id={i}
                  className="border-b flex items-center align-middle justify-center "
                >
                  <div
                    id={i}
                    className="w-full m-0.5 cursor-pointer rounded-md hover:bg-[#f4c301] dark:hover:bg-gray-200"
                  >
                    <span>{val}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Dropdown;
