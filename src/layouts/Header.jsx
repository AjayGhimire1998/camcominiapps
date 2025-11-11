import DarkModeToggle from "../ui/DarkModeToggle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" top-0 sticky w-full  bg-white dark:bg-[#191919] dark:text-white z-50 flex justify-center ">
      <div className="w-[1350px] flex justify-between items-center align-middle p-4 max-sm:p-4 m-6  max-sm:m-4 shadow-md dark:shadow-sm dark:shadow-amber-50 dark:bg-[#121212] bg-[#ffcc00] shadow-black rounded-4xl">
        <div>
          <Link
            to="/"
            className="font-extrabold text-[35px] max-sm:text-[25px] "
          >
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
