import React from "react";
import { top } from "../assets/index";
export const ButtonUP = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="fixed sm:right-2 right-0 bottom-2 bg-transparent sm:h-14 sm:w-13 h-11 w-11"
      onClick={goToTop}
    >
      <a className="relative inline-flex items-center justify-center overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-rose-500 rounded-full shadow-2xl group sm:w-12 sm:h-12 w-9 h-9 ">
        <img src={top} alt="" className="sm:w-10 w-7 " />
        {/* <span className="absolute flex items-center justify-center w-full h-full text-rose-500 transition-all duration-300 transform group-hover:translate-x-full ease text-xs">
          Keatas
        </span> */}
      </a>
    </div>
  );
};
