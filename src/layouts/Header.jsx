import React from "react";
import DarkModeToggle from "../ui/DarkModeToggle";
import { DarkModeContext } from "../contexts/DarkModeContext";

const Header = () => {
  return (
    <header className="top-0 p-4 fixed w-full max-w-7xl bg-[#191919] dark:bg-white flex justify-between items-center z-50 ">
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
