import React, { useEffect, useState } from "react";
import { FormHistori, LoadHistori } from "../component";
import axios from "axios";
import moment from "moment";
import { Format } from "../lib/format";
import { ToastContainer, toast } from "react-toastify";
import { usePDF } from "react-to-pdf";
import { LIstHistori } from "../component/LIstHistori";
import { Watermark } from "@hirohe/react-watermark";
import { logo } from "../assets";
import CountUp from "react-countup";
export const History = () => {
  const { toPDF, targetRef } = usePDF({ filename: "histori.pdf" });
  const [data, setData] = useState([]);
  const [count, setCount] = useState();
  const [load, setLOad] = useState(false);
  useEffect(() => {
    axios
      .get(`https://struk.app-citrapersada.net/countHistori-get`)
      .then((res) => {
        const response = res.data.query;
        setCount(response);
      })
      .catch((err) => {
        if (err.status === 500) {
          toast.error("Internal server error !");
        }
      });
  }, []);
  //query data
  const Submits = (data) => {
    setLOad(true);
    axios
      .post(`https://struk.app-citrapersada.net/getHistori`, data)
      .then((res) => {
        if (res.status === 200) {
          const response = res.data.query;
          if (response.length) {
            setData(response);
          } else {
            toast.info("Maaf data transaksi tidak ada");
          }
        }
      })
      .catch((err) => {
        if (err.status === 400) {
          toast.warning("Maaf No Kartu tidak ada !");
        } else {
          toast.error("Internal server error !");
        }
      })
      .finally(() => {
        setLOad(false);
      });
  };

  const handleDownload = () => {
    toPDF();
    axios.get(`https://struk.app-citrapersada.net/countHistori-create`);
  };
  return (
    <div className="w-full h-auto relative">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {load ? (
        <div className="flex justify-center mt-10">
          <LoadHistori />
        </div>
      ) : (
        <div className="">
          <section id="beranda" className="w-full h-auto mt-5 sm:mb-32 mb-40">
            <div className="w-11/12 mx-auto bg-hero h-80 rounded-2xl relative">
              <div className="text-center absolute inset-x-0 z-10 ">
                <div className="absolute inset-x-0 top-10">
                  <p className="bg-hero md:text-4xl md:font-semibold text-white text-md font-semibold ">
                    Mari jaga lingkungan dengan ikut
                  </p>
                  <p className="bg-hero md:text-4xl md:font-semibold text-white text-md font-semibold">
                    serta dalam penggunaan struk digital
                  </p>
                </div>
                <div className="absolute inset-x-0 top-24 flex flex-row flex-wrap justify-center bg-hero md:absolute md:inset-x-0 md:top-36 ">
                  <p className="bg-white mx-2 my-2 px-4 py-1 rounded-lg">
                    #KerenPakaiStrukDigital
                  </p>
                  <p className="bg-white mx-2 my-2 px-4 py-1 rounded-lg">
                    #IndonesiaHijau
                  </p>
                </div>
              </div>
              <div className="text-center absolute inset-x-0 top-52 sm:top-56 z-20 w-11/12 mx-auto  rounded-lg bg-white">
                <FormHistori submit={Submits} />
              </div>
            </div>
            {data && data.length ? (
              <div className="w-11/12 mx-auto bg-slate-100 sm:py-10 py-5 rounded-2xl relative mt-40  gap-y-6 px-5">
                <div className="" ref={targetRef}>
                  <Watermark
                    text="__PT Citra Persada Infrastruktur"
                    textColor="red"
                    textSize={"20"}
                    wrapperStyle={{
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <ul className="divide-y divide-gray-900 w-full px-10 border rounded-lg  bg-white mx-auto py-3 ">
                      <div className="flex items-end justify-center my-8 ">
                        <img
                          src={logo}
                          alt=""
                          className="sm:w-8 w-5 sm:h-8 h-5"
                        />
                        <p className="font-bold sm:text-lg text-sm">
                          PT Citra Persada Infrastruktur
                        </p>
                      </div>
                      {data &&
                        data.map((e) => {
                          return (
                            <LIstHistori
                              card={e.no_kartu}
                              gerbang={e.gerbang}
                              waktu={moment(e.tanggal).format(
                                "DD MM YYYY HH:mm"
                              )}
                              jumlah={Format(e.tarif)}
                              key={e.id}
                            />
                          );
                        })}
                    </ul>
                  </Watermark>
                </div>
                <button
                  className=" bg-rose-500 text-white text-center  text-sm py-1  rounded hover:bg-rose-700 w-full mx-auto sm:mt-8 mt-5"
                  onClick={handleDownload}
                >
                  Unduh
                </button>
              </div>
            ) : null}
          </section>
          <div className="bg-slate-200/50 py-16 rounded-lg sm:mx-16 mx-5 mb-5 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <h2 className="text-xl font-bold tracking-tight text-gray-700 sm:text-3xl">
                  Syarat da ketentuan
                </h2>
                <div className="mt-6 flex flex-col gap-x-8 sm:gap-y-20 gap-y-10 lg:flex-row">
                  <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                    <p className="text-base leading-8 text-gray-600">
                      Data struk transaksi anda hanya tersimpan di database kami
                      maksimal <br />
                      <span className="text-rose-600 font-semibold">
                        30 hari
                      </span>{" "}
                      dari hari transaksi
                    </p>
                  </div>
                  <div className="lg:flex lg:flex-auto lg:justify-center">
                    <div className="flex flex-col-reverse gap-y-4 items-center">
                      <dt className="text-base leading-7 text-gray-600">
                        Telah dicetak sebanyak
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-rose-600">
                        <CountUp end={count} separator="." />
                        <span className="text-base text-gray-600">Kali</span>
                      </dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
