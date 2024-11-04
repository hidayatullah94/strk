import React from "react";
import { pay } from "../assets";

export const LIstHistori = ({ gerbang, jumlah, waktu, card, ruas, bank }) => {
  return (
    <li className="py-4 ">
      <div className="flex items-center gap-x-3">
        <img
          alt=""
          src={pay}
          className="h-10 w-10 flex-none rounded-full bg-transparent"
        />
        <div className="flex-auto text-xs sm:text-sm">
          <h3 className="truncate  font-semibold leading-6 text-gray-600">
            {ruas}
          </h3>
          <h3 className=" truncate  font-semibold leading-6 text-gray-600">
            {gerbang}
          </h3>
        </div>

        <p className="flex-none sm:text-sm text-xs text-gray-700 font-bold">
          {bank}
        </p>
        <p className="flex-none sm:text-sm text-xs text-gray-700 font-bold">
          {jumlah}
        </p>
      </div>
      <p className="mt-3  text-sm text-gray-500">
        <span className="text-gray-700">{waktu}</span>
        <span className="font-mono text-gray-700 text-xs">({card})</span>
      </p>
    </li>
  );
};
