import { BookDownIcon, ChevronDown, MoveLeft } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import Dropdown from "./components/Dropdown";

const ToleranceChecker = () => {
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
        <Dropdown type={"material"} label={"Material Type"} />
        <Dropdown type={"spec"} label={"Specification"} />
        <Dropdown type={"it"} label={"IT"} />
      </div>
    </main>
  );
};

export default ToleranceChecker;
