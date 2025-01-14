import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaAngleDown, FaRegClock } from "react-icons/fa";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { LuArrowRight, LuCalendarDays } from "react-icons/lu";

const defaultDate = new Date("2025-01-01");

const ReserveCheckup = () => {
  const formatDate = (date) => {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "2-digit",
    };
    const formattedDate = date.toLocaleDateString("en-GB", options);

    const firstSpaceIndex = formattedDate.indexOf(" ");
    if (firstSpaceIndex !== -1) {
      return (
        formattedDate.slice(0, firstSpaceIndex) +
        ", " +
        formattedDate.slice(firstSpaceIndex + 1)
      );
    }
    return formattedDate;
  };

  const [selectedDate, setSelectedDate] = useState(formatDate(defaultDate));
  const [selectedTime, setSelectedTime] = useState("12:30");

  return (
    <div className="py-10">
      <form className="flex items-center flex-wrap justify-center gap-5">
        {/* Date Input */}
        <label className="relative bg-white/40 p-2 rounded-full flex items-center gap-3 cursor-pointer">
          <span className="size-10 grid place-items-center bg-white rounded-full text-gray-600">
            <LuCalendarDays />
          </span>

          <div className="w-36 z-50">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(formatDate(date))}
              className="outline-none bg-transparent"
              value={selectedDate}
            />
          </div>

          <div className="size-8 grid place-items-center bg-white rounded-full text-gray-600 duration-200">
            <FaAngleDown />
          </div>
        </label>

        {/* Time Input */}
        <label className="w-fit bg-white/40 p-2 rounded-full flex items-center gap-3 cursor-pointer">
          <span className="size-10 grid place-items-center bg-white rounded-full text-gray-600">
            <FaRegClock />
          </span>
          <div className="w-20 overflow-hidden">
            <input type="time" value={selectedTime} onChange={e => setSelectedTime(e.target.value)} className="outline-none bg-transparent" />
          </div>
          <div className="size-8 grid place-items-center bg-white rounded-full text-gray-600 duration-200">
            <FaAngleDown />
          </div>
        </label>

        <button className="bg-black group h-full rounded-full flex items-center gap-3 text-white p-3 px-4">
          Guide
          <LuArrowRight className="size-8 bg-white text-black rounded-full p-1 group-hover:translate-x-1.5 duration-150" />
        </button>
      </form>

      <button
        type="submit"
        className="mx-auto mt-10 border border-black h-full rounded-full flex items-center gap-3 font-semibold p-3 px-4 hover:bg-black hover:text-white duration-300"
      >
        <HiOutlineCubeTransparent className="size-7" />
        Reserve A Checkup
      </button>
    </div>
  );
};

export default ReserveCheckup;
