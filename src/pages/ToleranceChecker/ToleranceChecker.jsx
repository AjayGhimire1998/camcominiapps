import { MoveLeft } from "lucide-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../contexts/DarkModeContext";

const ToleranceChecker = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <main className="w-full max-w-[1350px] px-6 mt-2">
      <div className="  flex justify-start align-middle items-start">
        <Link
          to="/"
          className="font-semibold text-sm cursor-pointer flex align-middle items-center gap-1 border rounded-2xl px-3 py-1 bg-[#ffcc00] dark:bg-[#121212] shadow-sm shadow-black dark:shadow-white hover:shadow-md"
        >
          <MoveLeft />
          BACK TO HOME
        </Link>
      </div>
      <div>TOLERANCES</div>
    </main>
  );
};

export default ToleranceChecker;
