import { BookDownIcon, ChevronDown, MoveLeft } from "lucide-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../contexts/DarkModeContext";

const ToleranceChecker = () => {
  //   const { darkMode } = useContext(DarkModeContext);
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
      <div className="flex max-[500px]:flex-col gap-5 max-sm:gap-2 justify-start mt-6 font-semibold">
        <div>
          <button className="border rounded-2xl flex align-middle items-center px-3 bg-[#ffcc00] dark:bg-[#121212] max-sm:text-xs">
            Material Type <ChevronDown />
          </button>
        </div>
        <div>
          <button className="border rounded-2xl flex align-middle items-center  px-3 bg-[#ffcc00] dark:bg-[#121212] max-sm:text-xs">
            Specification <ChevronDown />
          </button>
        </div>
        <div>
          <button className="border rounded-2xl flex align-middle items-center  px-3 bg-[#ffcc00] dark:bg-[#121212] max-sm:text-xs">
            IT Grade <ChevronDown />
          </button>
        </div>
      </div>
    </main>
  );
};

export default ToleranceChecker;
