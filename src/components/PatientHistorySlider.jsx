import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { patientData } from "../patientData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { TfiArrowTopRight } from "react-icons/tfi";

const PatientHistorySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [additionalData, setAdditionalData] = useState(
    patientData[0].additionalData
  );
  const swiperRef = useRef(null);

  return (
    <div className="flex flex-col md:flex-row justify-center gap-2 max-w-[90%]">
      <div className="relative w-[100%] md:w-96 bg-white px-6 md:px-8 py-4 md:py-6 rounded-[2rem_2rem_0_0] md:rounded-[2rem_0_0_2rem]">
        <Swiper
          ref={swiperRef}
          mousewheel={true}
          slidesPerView={1}
          spaceBetween={30}
          loop={false}
          onSlideChange={(slides) => {
            setActiveIndex(slides.realIndex);
            setAdditionalData(patientData[slides.realIndex].additionalData);
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="h-32 md:h-40"
        >
          {patientData.map((patient, idx) => (
            <SwiperSlide key={patient.id} className="px-1">
              <div>
                <div className="flex justify-between">
                  <p className="text-base font-semibold">Patient's History</p>
                  <span className="flex items-center gap-1 bg-[#ffd9a2] px-2 rounded-xl">
                    <TfiArrowTopRight className="mt-1 text-sm" />
                    {patient.progressChange}
                  </span>
                </div>

                <div className="mt-3 md:mt-5 flex justify-between items-end">
                  <div className="flex gap-2">
                    <img
                      className="size-12 rounded-full"
                      src={ patient.profileImage }
                      alt=""
                    />
                    <div className="font-semibold">
                      <p>{patient.name}</p>
                      <p>
                        {patient.age} y.o{" "}
                        <span className="text-slate-400 font-normal">
                          ({patient.gender})
                        </span>
                      </p>
                    </div>
                  </div>
                  <span className="text-slate-700 font-semibold text-sm">
                    {patient.period}
                  </span>
                </div>

                <p className="mt-2 text-3xl md:text-4xl text-right font-semibold text-gray-800">
                  +10.57
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-2 md:bottom-6 bg-white py-4 md:py-6 px-3 z-20 left-5 md:left-8 flex justify-center items-center">
          <div className="flex gap-3">
            {patientData.map((_, idx) => (
              <button
                key={idx}
                className={`size-3 rounded-full ${
                  idx === activeIndex
                    ? "bg-gray-800 border-white outline outline-[2px] outline-offset-[3px] outline-gray-800"
                    : "bg-gray-300"
                }`}
                onClick={() => {
                  setActiveIndex(idx);
                  swiperRef.current.swiper.slideToLoop(idx);
                }}
              ></button>
            ))}
          </div>
        </div>
      </div>

      <RightSlider additionalData={additionalData} />
    </div>
  );
};

export default PatientHistorySlider;


const RightSlider = ({ additionalData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef(null);

  return (
    <div className="relative w-full md:w-56 flex items-center bg-white/30 px-2 py-3 rounded-[0_0_2rem_2rem] md:rounded-[0_2rem_2rem_0]">
      <Swiper
        ref={swiperRef}
        mousewheel={true}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        loop={false}
        onSlideChange={(slides) => setActiveIndex(slides.realIndex)}
        modules={[Pagination, Autoplay]}
        className="h-28 md:h-40 w-full"
      >
        {additionalData.map((item, idx) => (
          <SwiperSlide key={idx} className="px-3">
            <div className=" h-full flex flex-col items-start justify-center">
                    <img className="size-7 mb-2" src={item.icon} alt={ item.type } />
              <h2 className="sm:text-xl font-semibold text-gray-800 w-[80%]">
                {item.type}
                <span className="text-gray-500 font-medium block">
                  ({item.value})
                </span>
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-1/2 -translate-y-1/2 right-2 py-5 px-3 z-20 flex justify-center items-center">
        <div className="flex flex-col items-center gap-2">
          {additionalData.map((_, idx) => (
            <button
              key={idx}
              //   style={{ width: `${Math.max(6, 16 - Math.abs(idx - activeIndex) * 6)}px` }}
              className={`w-2 aspect-square rounded-full duration-200 ${
                idx === activeIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => {
                setActiveIndex(idx);
                swiperRef.current.swiper.slideToLoop(idx);
              }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};
