import React from "react";
import DarkModeToggle from "../ui/DarkModeToggle";
import { DarkModeContext } from "../contexts/DarkModeContext";

const Header = () => {
  return (
    <header className="top-0 pl-12 pr-12 pt-8 pb-8 max-w-7xl fixed w-full  bg-white dark:bg-[#191919] dark:text-white flex justify-between items-center align-middle z-50 ">
      <div>
        <h2 className="font-extrabold text-[35px]">MiniAPPS</h2>
      </div>
      <div>
        <div>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
