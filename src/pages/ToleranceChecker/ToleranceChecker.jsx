import { BookDownIcon, ChevronDown, MoveLeft } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import Dropdown from "./components/Dropdown";

const ToleranceChecker = () => {
  //   const { darkMode } = useContext(DarkModeContext);
  const [dropdownRequested, setDropdownRequested] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <main className="w-full max-w-[1350px] px-6 mt-2 ">
      <div className="  flex justify-start align-middle items-start mb-2">
        <Link
          to="/"
          className="font-extrabold text-sm cursor-pointer flex align-middle items-center gap-1 border-0.5 rounded-2xl px-3 py-1 bg-[#ffcc00] dark:bg-[#121212] shadow-sm shadow-black dark:shadow-white hover:shadow-md max-sm:text-xs"
        >
          <MoveLeft className="max-sm:size-4" />
          BACK TO HOME
        </Link>
      </div>
      <div className="flex max-[690px]:flex-col gap-5 max-sm:gap-2 justify-end mt-6 font-semibold ">
        <div className="flex gap-1 max-sm:text-sm">
          <span>Material Type </span>
          <div className="">
            <button
              onClick={() => {
                setDropdownRequested("material");
                setDropdownVisible(!dropdownVisible);
              }}
              className="border rounded-md flex align-middle items-center px-2 max-sm:px-1.5 bg-[#ffcc00] dark:bg-[#fefefe] dark:text-black max-sm:text-xs"
            >
              Housing Bores <ChevronDown size={20} />
            </button>
            {dropdownRequested === "material" && dropdownVisible ? (
              <Dropdown type={"material"} />
            ) : null}
          </div>
        </div>

        <div className="flex gap-1 max-sm:text-sm">
          <span>Specification </span>
          <div className="">
            <button
              onClick={() => {
                setDropdownRequested("spec");
                setDropdownVisible(!dropdownVisible);
              }}
              className="border rounded-md flex align-middle items-center px-2 max-sm:px-1.5 bg-[#ffcc00] dark:bg-[#fefefe] dark:text-black max-sm:text-xs"
            >
              H8 <ChevronDown size={20} />
            </button>
            {dropdownRequested === "spec" && dropdownVisible ? (
              <Dropdown type={"spec"} />
            ) : null}
          </div>
        </div>
        <div className="flex gap-1 max-sm:text-sm">
          <span>IT Grade</span>
          <div className="">
            <button
              onClick={() => {
                setDropdownRequested("it");
                setDropdownVisible(!dropdownVisible);
              }}
              className="border rounded-md flex align-middle items-center px-3 max-sm:px-1.5 bg-[#ffcc00] dark:bg-[#fefefe] dark:text-black max-sm:text-xs"
            >
              IT6 <ChevronDown size={20} />
            </button>
            {dropdownRequested === "it" && dropdownVisible ? (
              <Dropdown type={"it"} />
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ToleranceChecker;
