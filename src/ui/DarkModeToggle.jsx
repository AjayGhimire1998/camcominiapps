import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

const DarkModeToggle = () => {
  const { darkMode, toggleMode } = useContext(DarkModeContext);
  return (
    <button
      onClick={toggleMode}
      className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 ${
        darkMode ? "bg-gray-700" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transform transition-transform duration-300 ${
          darkMode ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {darkMode ? (
          <Moon className="h-4 w-4 text-gray-800" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
      </span>
    </button>
  );
};

export default DarkModeToggle;
