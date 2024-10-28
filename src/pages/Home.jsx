import React, { useEffect, useRef, useState } from "react";
import { Card, Forms, Loading } from "../component";
import moment from "moment";
import { baseURLS, Format } from "../lib/format";
import { ToastContainer, toast } from "react-toastify";
import { usePDF } from "react-to-pdf";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";
export const Home = () => {
  const refs = useRef({});
  const { toPDF, targetRef } = usePDF({
    filename: "struk.pdf",
    ptions: { format: "A4" },
  });
  const [data, setData] = useState([]);
  const [count, setCount] = useState();
  const [load, setLOad] = useState(false);
  useEffect(() => {
    baseURLS
      .get(`/countStruk-get`)
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
  const submits = (data) => {
    sessionStorage.setItem("struk", JSON.stringify(data));
    setLOad(true);
    baseURLS
      .post(`/getStruk`, data)
      .then((res) => {
        if (res.status === 200) {
          const response = res.data.query;
          if (response.length) {
            setTimeout(() => {
              setData(response);
            }, 1000);
          } else {
            setTimeout(() => {
              toast.info("Maaf data transaksi tidak ada");
            }, 1000);
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
        setTimeout(() => {
          setLOad(false);
        }, 1000);
      });
  };

  const handleDownload = (id) => {
    const element = refs.current[id];
    if (element) {
      targetRef.current = element;
      toPDF();
    }
    baseURLS.get(`/countStruk-create`);
  };
  const handleCetak = () => {
    toPDF();
    baseURLS.get(`/countStruk-create`);
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Struk Citra Persada</title>
        <link rel="search" href="https://struk.citrapersada.net/" />
      </Helmet>

      {load ? (
        <div className="flex justify-center mt-10">
          <Loading />
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
                  <p className="bg-white mx-2 my-2 px-4 py-1 rounded-lg hover:bg-primary hover:text-white duration-700 hover:-translate-y-2">
                    #KerenPakaiStrukDigital
                  </p>
                  <p className="bg-white mx-2 my-2 px-4 py-1 rounded-lg duration-700 hover:-translate-y-2 hover:bg-primary hover:text-white">
                    #IndonesiaHijau
                  </p>
                </div>
              </div>
              <div className="text-center absolute inset-x-0 top-52 sm:top-56 z-20 w-11/12 mx-auto  rounded-lg bg-white">
                <Forms submit={submits} />
              </div>
            </div>
            {data && data.length ? (
              <div className="w-11/12 mx-auto bg-slate-200  rounded-2xl relative mt-40">
                <button
                  className="sm:top-5 top-0 bg-rose-500 text-white text-center  sm:text-sm text-xs py-1.5 sm:px-16 px-8 rounded hover:bg-rose-700 absolute z-20  right-0 sm:right-5"
                  onClick={handleCetak}
                >
                  Unduh
                </button>
                <div
                  className=" sm:py-20 py-10 flex flex-row justify-center flex-wrap items-center mb-20 h-auto gap-6 sm:gap-10 px-2"
                  ref={targetRef}
                >
                  {data &&
                    data.map((e) => {
                      return (
                        <Card
                          key={e.id}
                          bank={e.bank}
                          gerbang={e.gerbang}
                          gol={e.golongan}
                          no_card={e.no_kartu}
                          ruas={e.ruas}
                          saldo={Format(e.saldo)}
                          sistem={e.sistem}
                          tanggal={moment(e.tanggal).format("DD-MM-YYYY HH:mm")}
                          tarif={Format(e.tarif)}
                          refs={(el) => (refs.current[e.id] = el)}
                          klik={() => handleDownload(e.id)}
                        />
                      );
                    })}
                </div>
              </div>
            ) : null}
          </section>
          <div className="bg-slate-200/50 py-16 rounded-lg sm:mx-16 mx-5 mb-5 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <h2 className="text-xl font-bold tracking-tight text-gray-700 sm:text-3xl">
                  Syarat dan ketentuan
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
