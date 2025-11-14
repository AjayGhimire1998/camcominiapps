import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

const DarkModeToggle = () => {
  const { darkMode, toggleMode } = useContext(DarkModeContext);
  return (
    <button
      onClick={toggleMode}
      className={`cursor-pointer relative inline-flex h-6 w-14 max-sm:h-6 max-sm:w-14 items-center rounded-full transition-colors duration-300 ${
        darkMode
          ? "bg-[#191919] shadow-2xl shadow-[#ffffff] z-50"
          : "bg-[#121212] shadow-2xl shadow-{#000000]"
      }`}
    >
      <span
        className={`absolute left-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#ffffff] shadow-md transform transition-transform duration-300 ${
          darkMode ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {darkMode ? (
          <Moon className="h-4 w-4 text-[#363636]" />
        ) : (
          <Sun className="h-4 w-4 text-[#ffcc00]" />
        )}
      </span>
    </button>
  );
};

export default DarkModeToggle;
