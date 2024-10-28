import React from "react";
import { histor } from "../assets";
import { historiis, struks } from "../lib/tutor";
import { Helmet } from "react-helmet";

export const Tutorial = () => {
  return (
    <div className="bg-white py-10 sm:py-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cara Unduh Struk </title>
        <link rel="search" href="https://struk.citrapersada.net/tutorials" />
      </Helmet>
      <div className="">
        <h1 className="sm:text-3xl text-xl font-bold text-rose-600 mx-auto max-w-7xl mb-5 sm:font-semibold text-center sm:text-start">
          Tata Cara Unduh Transaksi Struk
        </h1>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 border py-5 rounded shadow">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4 ">
            {struks.map((item, idx) => (
              <div key={idx}>
                <div className="flex items-end text-sm font-semibold leading-6 text-sky-500 relative">
                  <img src={histor} alt="" className="w-6 h-7" />
                  <p className="ml-2 uppercase">{item.name}</p>
                  <div
                    className="w-full  bg-rose-500 absolute -bottom-1"
                    style={{ height: "2px" }}
                  ></div>
                </div>
                <img src={item.src} alt="" className=" w-full mt-2" />
                <p className="mt-1 sm:text-base text-sm leading-7 text-gray-600 capitalize">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sm:mt-10 mt-5">
        <h1 className="sm:text-3xl text-xl font-bold text-rose-600 mx-auto max-w-7xl mb-5 sm:font-semibold text-center sm:text-start">
          Tata Cara Unduh Transaksi Histori
        </h1>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 border py-5 rounded shadow">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4 ">
            {historiis.map((item, idx) => (
              <div key={idx}>
                <div className="flex items-end text-sm font-semibold leading-6 text-sky-500 relative">
                  <img src={histor} alt="" className="w-6 h-7" />
                  <p className="ml-2 uppercase">{item.name}</p>
                  <div
                    className="w-full  bg-rose-500 absolute -bottom-1"
                    style={{ height: "2px" }}
                  ></div>
                </div>
                <img src={item.src} alt="" className=" w-full mt-2" />
                <p className="mt-1 sm:text-base text-sm leading-7 text-gray-600 capitalize">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
