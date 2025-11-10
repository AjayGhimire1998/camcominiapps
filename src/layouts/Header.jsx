import DarkModeToggle from "../ui/DarkModeToggle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="top-0 sticky w-full bg-white dark:bg-[#191919] dark:text-white z-50 flex justify-center ">
      <div className="w-7xl flex justify-between items-center align-middle p-6 border-b">
        <div>
          <Link to="/" className="font-extrabold text-[35px]">
            MiniAPPS
          </Link>
        </div>

        <div className="flex justify-center">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
