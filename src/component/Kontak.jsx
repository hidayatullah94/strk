import React from "react";
import { fb, ig, linked, mail } from "../assets";

export const Kontak = () => {
  return (
    <div className="mx-auto max-w-7xl py-10 px-6 lg:px-8  border-t-2 border-slate-400">
      <h2 className="sm:text-3xl text-xl font-bold tracking-tight text-gray-700">
        Kontak
      </h2>
      <p className="mt-6 max-w-3xl sm:text-lg text-sm text-gray-500">
        Jl. Angkasa No.20, RT.12/RW.2, Gn. Sahari Sel., Kec. Kemayoran, Kota
        Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10610
      </p>
      <div className="mt-8 grid grid-cols-1 sm:gap-10 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="sm:text-lg text-md font-medium text-gray-600 ">
            Instagram
          </h3>
          <p className="mt-2 text-base text-gray-500 flex items-center">
            <img src={ig} alt="" className="w-4 sm:w-5" />
            <a
              className="block ml-1 text-sm text-sky-600 sm:text-base"
              href="https://www.instagram.com/official_cpi/"
              target="_blank"
            >
              official_cpi
            </a>
          </p>
        </div>
        <div>
          <h3 className="sm:text-lg text-md font-medium text-gray-600">
            FaceBook
          </h3>
          <p className="mt-2 text-base text-gray-500 flex items-center">
            <img src={fb} alt="" className="w-4 sm:w-5" />
            <a
              className="block ml-1 text-sm sm:text-base text-sky-600"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100078506880276"
            >
              PT Citra Persada Infrastruktur
            </a>
          </p>
        </div>
        <div>
          <h3 className="sm:text-lg text-md font-medium text-gray-600">
            Linkedin
          </h3>
          <p className="mt-2 text-base text-gray-500 flex items-center">
            <img src={linked} alt="" className="w-4 sm:w-5" />
            <a
              className="block ml-1 text-sm text-sky-600 sm:text-base"
              href="https://www.linkedin.com/company/pt-citra-persada-infrastruktur/mycompany/verification/"
              target="_blank"
            >
              PT Citra Persada Infrastruktur
            </a>
          </p>
        </div>
        <div>
          <h3 className="sm:text-lg text-md font-medium text-gray-600">
            Email
          </h3>
          <p className="mt-2 text-base text-gray-500 flex items-center">
            <img src={mail} alt="" className="w-4 sm:w-5" />
            <span className="block ml-1 text-sm text-sky-600 sm:text-base">
              info@citrapersada.net
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
