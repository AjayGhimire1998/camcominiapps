import { createContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
  const savedPreference = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(
    savedPreference ? JSON.parse(savedPreference) : true
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
};

export { DarkModeContext, DarkModeProvider };
