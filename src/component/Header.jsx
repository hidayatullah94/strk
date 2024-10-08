import React, { useEffect, useState } from "react";
import logo from "../assets/logos.png";
import { HiOutlineBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

//modul
export const Header = () => {
  const headers = [
    {
      id: 1,
      nama: "Beranda",
      href: "/",
    },
    {
      id: 2,
      nama: "Histori Struk",
      href: "/history",
    },
    {
      id: 3,
      nama: "Cara Unduh",
      href: "/tutorials",
    },
  ];
  const [open, setOpen] = useState(false);
  if (!sessionStorage.getItem("nav")) {
    sessionStorage.setItem("nav", "1");
  }

  const nav = Number(sessionStorage.getItem("nav"));
  const [active, setActive] = useState(Number.isInteger(nav) ? nav : 1);

  useEffect(() => {
    sessionStorage.setItem("nav", String(active));
  }, [active]);

  return (
    <div className=" w-screen bottom-full top-0 left-0 sticky z-50 ">
      <div className="md:flex items-center justify-between  py-4  mx-auto w-11/12 border-b-2 border-slate-200 ">
        <div
          className="font-bold cursor-pointer flex items-center  
      			text-gray-800"
        >
          <img src={logo} alt="logo" className="w-8" />
          <p className="mx-2">PT Citra Persada Infrastruktur</p>
        </div>
        <div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-full md:pl-0 pl-4 transition-all duration-500 ease-in  ${
              open ? "top-16 bg-slate-100" : "top-[-490px]"
            }`}
          >
            {headers.map((e, idx) => {
              return (
                <li
                  className="md:mr-8 text-xl md:my-0 my-7 md:flex z-20 "
                  onClick={() => setActive(e.id)}
                  key={idx}
                >
                  <Link
                    to={e.href}
                    className={`${
                      active === e.id
                        ? "text-red-600 text-xl  duration-100 hover:border-b-2  hover:text-red-600 hover:font-semibold font-semibold border-b-2 border-red-600 "
                        : "text-slate-900 text-xl  duration-100 hover:border-b-2 border-red-600"
                    }`}
                  >
                    {e.nama}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-4 top-6 cursor-pointer md:hidden"
        >
          {open ? <HiOutlineXMark /> : <HiOutlineBars3BottomRight />}
        </div>
      </div>
    </div>
  );
};
