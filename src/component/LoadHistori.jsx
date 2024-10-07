import React from "react";

export const LoadHistori = () => {
  return (
    <ul
      role="list"
      className="divide-y divide-gray-100 border w-full max-w-7xl px-10 py-5 rounded mx-5 my-5 animate-pulse shadow"
    >
      <li className="py-4">
        <div className="flex items-center gap-x-3">
          <p className="h-6 w-6 sm:w-10 sm:h-10 flex-none rounded-full bg-slate-300" />
          <h3 className="flex-auto  bg-slate-300 h-5 sm:h-7 rounded"></h3>
          <time className=" bg-slate-300 h-6 w-14 rounded sm:h-8"></time>
        </div>
        <p className="mt-3 bg-slate-300 h-4 w-1/2 sm:h-5"></p>
      </li>
    </ul>
  );
};
