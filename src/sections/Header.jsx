import React from "react";
import logo from "../assets/logo.svg";
import { GoHome } from "react-icons/go";
import { PiAtomLight, PiDna, PiTooth } from "react-icons/pi";
import { RiSearchLine } from "react-icons/ri";
import { TbMenu3 } from "react-icons/tb";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white py-4 z-[999]">
      <div className="section-padding flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img className="size-8" src={logo} alt="logo" />
          <h2 className="text-2xl italic font-bold">Mentall.me</h2>
        </div>

        {/* right icons */}
        <div className="flex items-center gap-3">
          <button className="bg-[#f1f5f9] size-12 md:size-14 rounded-full grid place-items-center text-2xl text-slate-800">
            <RiSearchLine />
          </button>
          <button className="bg-[#f1f5f9] size-12 md:size-14 rounded-full grid place-items-center text-2xl text-slate-800">
            <TbMenu3 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
