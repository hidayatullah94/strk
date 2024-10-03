import React, { useRef, useState } from "react";
import { Card, Forms, Header, Kontak, Loading } from "../component";
import axios from "axios";
import moment from "moment";
import { Format } from "../lib/format";
import { ToastContainer, toast } from "react-toastify";
import { top } from "../assets";
import { usePDF } from "react-to-pdf";
export const Home = () => {
  const refs = useRef({});
  const { toPDF, targetRef } = usePDF({
    filename: "struk.pdf",
    ptions: { format: "A4" },
  });
  const [data, setData] = useState([]);
  const [load, setLOad] = useState(false);
  //query data
  const submits = (data) => {
    setLOad(true);
    axios
      .post(`https://struk-app.citrapersada.net/getStruk`, data)
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
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleDownload = (id) => {
    const element = refs.current[id];
    if (element) {
      targetRef.current = element;
      toPDF();
    }
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
      <Header />
      {load ? (
        <div className="flex justify-center mt-10">
          <Loading />
        </div>
      ) : (
        <div className="">
          <section id="beranda" className="w-full h-auto mt-5 mb-32">
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
              <div className="text-center absolute inset-x-0 top-52 sm:top-56 z-20 w-11/12 mx-auto  rounded-lg">
                <Forms submit={submits} />
              </div>
            </div>
            {data && data.length ? (
              <div className="w-11/12 mx-auto bg-slate-200 sm:py-10 py-5 rounded-2xl relative mt-40 flex flex-row justify-evenly flex-wrap items-center mb-20 h-screen overflow-auto gap-y-6 px-2">
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
                        tanggal={moment(e.tanggal).format("DD MM YYYY HH:mm")}
                        tarif={Format(e.tarif)}
                        refs={(el) => (refs.current[e.id] = el)}
                        klik={() => handleDownload(e.id)}
                      />
                    );
                  })}
              </div>
            ) : null}
          </section>
          {/* <section id="unduh" className="bg-rose-500">
            <Unduh />
          </section> */}
          <section id="kontak" className="w-full h-full ">
            <Kontak />
          </section>

          <div
            className="fixed right-2 bottom-2 bg-transparent sm:h-14 sm:w-13 h-11 w-11"
            onClick={goToTop}
          >
            <a className="relative inline-flex items-center justify-center overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-rose-500 rounded-full shadow-2xl group w-12 h-12 ">
              <img src={top} alt="" className="w-10 " />
              <span className="absolute flex items-center justify-center w-full h-full text-rose-500 transition-all duration-300 transform group-hover:translate-x-full ease text-xs">
                Keatas
              </span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
