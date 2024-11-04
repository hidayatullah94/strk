import React from "react";
import { useForm } from "react-hook-form";
import {
  HiOutlineCreditCard,
  HiOutlineMagnifyingGlass,
  HiOutlineInformationCircle,
} from "react-icons/hi2";
export const FormHistori = ({ submit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    shouldUnregister: false,
    defaultValues: {
      take:
        sessionStorage.getItem("histori") === null
          ? 5
          : JSON.parse(sessionStorage.getItem("histori")).take,
      no_card:
        sessionStorage.getItem("histori") === null
          ? ""
          : JSON.parse(sessionStorage.getItem("histori")).no_card,
    },
  });
  // Fungsi untuk memformat input sebagai 6032-9825-0026-0144
  const formatWithDashes = (value) => {
    return value.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1-");
  };
  // Fungsi handle untuk menampilkan input berformat saat diketik
  const handleInputChange = (e) => {
    const rawValue = e.target.value;
    const formattedValue = formatWithDashes(rawValue);
    setValue("no_card", formattedValue, { shouldValidate: true });
  };
  return (
    <div className="w-full h-full sm:py-3 py-2 shadow-2xl rounded-lg ">
      <h5 className="text-center font-semibold sm:text-lg sm:my-5 my-3 text-sm">
        Dapatkan histori digital transaksimu disini
      </h5>
      <form action="" onSubmit={handleSubmit(submit)}>
        <div className="flex flex-row flex-wrap sm:flex-nowrap justify-between md:justify-evenly justify-items-center items-end px-5  gap-y-4 gap-5 mb-6">
          <div className="w-96 ">
            <label
              htmlFor="take"
              className="sm:block hidden text-base font-medium leading-6 text-gray-900 text-start"
            >
              Jumlah Transaksi Terakhir
            </label>
            <select
              id="take"
              name="take"
              className="mt-2 block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-600 ring-1 ring-inset ring-gray-300 sm:leading-6 outline-none text-xs sm:text-base"
              {...register("take", {
                valueAsNumber: true,
              })}
            >
              <option selected value={5}>
                5 Transaksi
              </option>
              <option value={10}>10 Transaksi</option>
              <option value={15}>15 Transaksi</option>
            </select>
          </div>
          <div className="flex flex-col items-start w-full sm:w-2/3">
            <label
              htmlFor="card"
              className="sm:block hidden text-md font-medium text-gray-800"
            >
              Masukkan Nomor Kartu
            </label>
            <div className="relative mt-1 rounded-lg border border-neutral-400 py-2 text-xs sm:text-base w-full">
              <div className="pointer-events-none absolute inset-y-0 left-1 flex items-center pl-3">
                <HiOutlineCreditCard
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                className="block w-full rounded-md border-gray-300 pl-10 sm:text-sm outline-none text-gray-700"
                placeholder="Nomor Kartu E-Toll"
                id="card"
                {...register("no_card", {
                  required: true,
                })}
                maxLength={19}
                onChange={handleInputChange}
              />
            </div>
            {errors.no_card && (
              <span className="mt-5 text-red-600 text-xs flex items-center absolute top-32 sm:top-44 md:top-32">
                <HiOutlineInformationCircle className="w-5" /> Field ini harus
                diisi !
              </span>
            )}
          </div>
          <div className="mt-3  sm:mt-0 flex flex-row sm:justify-evenly justify-center items-center px-5 sm:py-2 py-1.5 bg-primary rounded-md w-full text-sm sm:text-base sm:w-72 hover:bg-rose-700">
            <button
              className="ml-2 text-white font-semibold flex items-center gap-3
                      "
              type="submit"
            >
              <span>
                <HiOutlineMagnifyingGlass
                  className="h-5 w-5 text-white "
                  aria-hidden="true"
                />
              </span>
              Cari Histori
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
