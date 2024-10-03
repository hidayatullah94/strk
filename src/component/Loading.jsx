import React from "react";

export const Loading = () => {
  return (
    <div className="shadow-md w-96 h-auto  py-5 rounded-lg border animate-pulse">
      <p className="text-xs font-extralight text-slate-500 ml-2 bg-inherit bg-slate-300   rounded w-32 h-5"></p>
      <div className="px-4 py-5 sm:p-6 flex flex-col justify-evenly ">
        <div className="flex flex-col border-b-2 border-slate-300 pb-2">
          <div className="flex flex-row justify-evenly">
            <p className="w-8 h-6 bg-slate-300 me-2 rounded" />
            <p className="font-semibold text-lg h-6 bg-slate-300 w-60 rounded"></p>
          </div>
          <div className="flex flex-col justify-evenly items-end">
            <p className="w-10 h-5 bg-slate-300 mt-1 rounded"></p>
            <p className="bg-slate-300 h-5 w-52 mt-1 rounded"></p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-col items-end">
            <p className="w-60 h-5 bg-slate-300 mt-1 rounded"></p>
            <p className="w-72 h-5 bg-slate-300 mt-1 rounded"></p>
            <p className="w-80 h-5 bg-slate-300 mt-1 rounded"></p>
          </div>

          <div className="divide-y-2 flex flex-col border-t-2 border-slate-300 mt-3">
            <p className="my-2 bg-slate-300 h-6 w-full rounded"></p>{" "}
            <p className="my-2 bg-slate-300 h-6 w-full rounded"></p>
            <p className="my-2 bg-slate-300 h-6 w-full rounded"></p>
            <p className="my-2 bg-slate-300 h-6 w-full rounded"></p>
          </div>
        </div>
        <div className="text-center">
          <h5 className="h-5 w-32 bg-slate-300 mx-auto mt-4 rounded"></h5>
          <p className="bg-slate-300 mx-auto mt-2 h-4 w-80 rounded"></p>
        </div>
      </div>
    </div>
  );
};
