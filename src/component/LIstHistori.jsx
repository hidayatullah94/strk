import React from "react";
import { pay } from "../assets";

export const LIstHistori = ({ gerbang, jumlah, waktu, card }) => {
  return (
    <li className="py-4 ">
      <div className="flex items-center gap-x-3">
        <img
          alt=""
          src={pay}
          className="h-8 w-8 flex-none rounded-full bg-transparent"
        />
        <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-gray-600">
          {gerbang}
        </h3>
        <p className="flex-none text-sm text-gray-900 font-bold">{jumlah}</p>
      </div>
      <p className="mt-3  text-sm text-gray-500">
        <span className="text-gray-700">{waktu}</span>
        <span className="font-mono text-gray-700 text-xs">({card})</span>
      </p>
    </li>
  );
};
