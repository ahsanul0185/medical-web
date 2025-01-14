import React from "react";
import PatientHistorySlider from "../components/PatientHistorySlider";
import ReserveCheckup from "../components/ReserveCheckup";
import { PiAtomLight, PiDna, PiTooth } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import asset_threadLine from "../assets/thread-line.svg";

const Hero = () => {
  return (
    <div className="relative overflow-hidden z-0">
      
      {/* background assets */}
      <div className="absolute bottom-0 left-0 bg-primary/40 w-full h-[120vh] md:h-screen rounded-tl-full rounded-tr-full -z-10" />
      <div className="hidden lg:block">
        <img
          src={asset_threadLine}
          className="absolute bottom-80 w-[26%] xl:w-[32%] left-0 -z-10"
        />
      </div>
      <div className="size-8 absolute bottom-10 md:bottom-[20%] left-[10%] bg-white/40 rounded-full -z-10" />
      <div className="hidden md:block size-5 absolute right-[10%] bottom-[10%] bg-white/40 rounded-full -z-10" />
      <div className="size-6 absolute right-[20%] bottom-[30%] bg-white/40 rounded-full -z-10" />
      <div className="size-4 absolute left-[30%] bottom-[10%] bg-white/40 rounded-full -z-10" />
      <div className="size-4 absolute left-[30%] top-[40%] bg-white/40 rounded-full -z-10" />

      <div className="section-padding  pt-52 z-10">
        <h2 className="text-center font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          High Qualtiy Checkup
          <br />
          Makes You Healthy
        </h2>

        {/* hero icons */}
        <ul className="flex items-center justify-center gap-4 mt-10">
          <li className="relative">
            <span className="bg-[#f1f5f9] size-12 rounded-full grid place-items-center text-2xl text-slate-700">
              <CiHeart />
            </span>
          </li>

          <li className="relative group">
            <span className="bg-[#f1f5f9] size-12 rounded-full grid place-items-center text-2xl text-slate-700">
              <PiDna />
            </span>
          </li>

          <li className="relative">
            <span className="bg-[#f1f5f9] size-12 rounded-full grid place-items-center text-2xl text-slate-700">
              <PiTooth />
            </span>
          </li>

          <li className="relative">
            <span className="bg-[#f1f5f9] size-12 rounded-full grid place-items-center text-2xl text-slate-700">
              <PiAtomLight />
            </span>
          </li>
        </ul>

        {/* slider and form */}
        <div className="my-16 flex flex-col gap-16 items-center">
          <PatientHistorySlider />
          <ReserveCheckup />
        </div>
      </div>
    </div>
  );
};

export default Hero;
