"use client";

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-[100px] w-full items-center justify-between bg-white p-4 md:min-h-[148px] md:px-8">
        {/* logo*/}
        <div className="bg-blue-500">
          <img
            src="/images/LogoHeader.png"
            alt="SkillsPoints"
            width={111}
            height={111}
            className="h-16 w-16 md:h-[111px] md:w-[111px]"
          />
        </div>

        {/* link descktop*/}
        <nav className="hidden gap-8 bg-red-500 md:flex">
          <a href="/">Home</a>
          <a href="/courses">Micro-courses</a>
          <a href="/my-learning">My Learning</a>
          <a href="/rewards">Rewards</a>
        </nav>

        {/* button mobile in the navbar*/}
        <button
          type="button"
          onClick={() => setisMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="p-2 text-3xl md:hidden"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* mobile list under the nav*/}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="flex flex-col gap-4 bg-white p-4 md:hidden"
        >
          <a href="/Home">Home</a>
          <a href="/courses">Micro-courses</a>
          <a href="/my-learning">My Learning</a>
          <a href="/rewards">Rewards</a>
        </nav>
      )}
    </>
  );
};

export default Navbar;