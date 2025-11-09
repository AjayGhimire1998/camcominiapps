import React from "react";

const Header = () => {
  return (
    <header className="top-0 pt-4 pl-2 pr-2 pb-4 fixed w-full max-w-7xl bg-[#191919] flex justify-between items-center z-50 ">
      <div>
        <h2 className="font-extrabold text-[35px]">MiniAPPS</h2>
      </div>
      <div>
        <div>
          <button>Dark Mode</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
