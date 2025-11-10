import { Calculator, MoveRight, Shapes } from "lucide-react";
import React, { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <main className="md:w-7xl  mt-2 max-sm:flex max-sm:items-center max-sm:justify-center px-8 max-sm:p-4">
      <Link to="/about">
        <div className=" h-auto max-w-2xs cursor-pointer border hover:scale-102 shadow-lg shadow-black dark:shadow-white rounded-3xl flex flex-col justify-between align-middle items-center ">
          <div className="flex flex-col align-middle items-center p-2 gap-1">
            <Shapes
              size={100}
              strokeWidth="0.5px"
              color={darkMode ? "white" : `#191919`}
            />

            <p className="text-sm">
              Calculates Camco standard specifications & tolerances.
            </p>
          </div>
          <div className=" w-full bottom-0 flex flex-col  bg-[#ffcc00] rounded-b-3xl p-1 ">
            <button className="flex items-center align-middle justify-center gap-2 dark:text-black cursor-pointer text-lg font-extrabold">
              Tolerance Checker{" "}
              <span>
                <MoveRight strokeWidth="3px" />
              </span>
            </button>
          </div>
        </div>
      </Link>
    </main>
  );
};

export default Home;
