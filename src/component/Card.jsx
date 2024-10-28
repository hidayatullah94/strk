import React from "react";
import moment from "moment";
import { logo } from "../assets";
import { Watermark } from "@hirohe/react-watermark";
export const Card = ({
  ruas,
  gerbang,
  tanggal,
  gol,
  sistem,
  bank,
  no_card,
  tarif,
  saldo,
  refs,
  klik,
}) => {
  return (
    <div className="shadow-md w-96   py-5 rounded bg-white">
      <div ref={refs} className="border p-2 my-2">
        <Watermark
          text="__PT Citra Persada Infrastruktur"
          textColor="red"
          textSize={"18"}
          wrapperStyle={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className=" bg-transparent relative z-10">
            <p className="text-xs font-extralight text-sky-600 ml-2  bg-transparent">
              Tanggal Cetak{" "}
              <span className="bg-transparent">
                {moment(new Date()).format("DD/MM/YYYY HH:mm")}
              </span>
            </p>
            <div className="px-4 py-5 sm:p-6 flex flex-col justify-evenly bg-transparent">
              <div className="flex flex-col border-b-2 border-slate-300 pb-2 bg-transparent">
                <div className="flex flex-row justify-evenly bg-transparent">
                  <img src={logo} alt="logo" className="w-8" />
                  <p className="font-semibold text-lg bg-transparent">
                    PT Citra Persada Infrastruktur
                  </p>
                </div>
                <div className="flex flex-col justify-evenly items-end bg-transparent">
                  <p className="bg-transparent">{ruas}</p>
                  <p className="text-sm text-sky-700 bg-transparent">
                    Layanan Toll (Free Call) : (021) - 6518350
                  </p>
                </div>
              </div>
              <div className="mb-5 border-b-2 border-slate-300 bg-transparent">
                <p className="bg-transparent">Gerbang Tol {gerbang}</p>
                <p className="text-sm text-sky-700 bg-transparent">{tanggal}</p>
                <p className="text-sm text-sky-700 bg-transparent">
                  {gol}, {sistem}
                </p>
                <div className="divide-y-2 flex  border-t-2 border-slate-300 mt-3 gap-3 bg-transparent">
                  <div className="x">
                    <p className="py-2 bg-transparent">Bank</p>
                    <p className="py-2 bg-transparent">Nomor Kartu</p>
                    <p className="py-2 bg-transparent">Tarif</p>
                    <p className="py-2 bg-transparent">Sisa Saldo</p>
                  </div>
                  <div className="">
                    <p className="py-2 bg-transparent"> : {bank}</p>
                    <p className="py-2 bg-transparent"> : {no_card}</p>
                    <p className="py-2 bg-transparent"> : Rp. {tarif}</p>
                    <p className="py-2 bg-transparent"> : Rp. {saldo}</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h5 className="bg-transparent">Terimakasih</h5>
                <p className="text-slate-400 text-sm bg-transparent">
                  Struk ini merupakan bukti pembayaran yang sah
                </p>
              </div>
            </div>
          </div>
        </Watermark>
      </div>
      {/* <div className="flex justify-center  " onClick={klik}>
        <button className=" bg-rose-500 text-white text-center  text-sm py-1 px-16 rounded hover:bg-rose-700">
          Unduh
        </button>
      </div> */}
    </div>
  );
};
