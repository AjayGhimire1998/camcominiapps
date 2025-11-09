import React from "react";

const Header = () => {
  return (
    <>
      <section className="flex flex-row justify-between items-center border-1">
        <div>
          <h2 className="font-extrabold text-[35px]">MiniAPPS</h2>
        </div>
        <div>
          <div>
            <button>Dark Mode</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
