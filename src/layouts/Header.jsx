import React from "react";
import DarkModeToggle from "../ui/DarkModeToggle";
import { DarkModeContext } from "../contexts/DarkModeContext";

const Header = () => {
  return (
    <header className="top-0 sticky w-full bg-white dark:bg-[#191919] dark:text-white z-50 flex justify-center ">
      <div className="w-7xl flex justify-between items-center align-middle p-6 border-b">
        <div>
          <h2 className="font-extrabold text-[35px] ">MiniAPPS</h2>
        </div>

        <div className="flex justify-center">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
