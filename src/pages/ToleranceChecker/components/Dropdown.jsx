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
    <div className="w-auto border flex flex-col mt-1 absolute">
      {dropdownValues[typeRequested].map((val, i) => {
        return <span id={i}>{val}</span>;
      })}
    </div>
  );
};

export default Dropdown;
