import React from "react";
import {
  HiOutlineCreditCard,
  HiOutlineMagnifyingGlass,
  HiOutlineInformationCircle,
} from "react-icons/hi2";
import DatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";
export const Forms = ({ submit }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="w-full h-full sm:py-3 py-2 shadow-2xl rounded-lg ">
      <h5 className="text-center font-semibold sm:text-lg sm:my-5 my-3 text-sm">
        Dapatkan struk digital transaksimu disini
      </h5>
      <form action="" onSubmit={handleSubmit(submit)}>
        <div className="flex flex-row flex-wrap sm:flex-nowrap justify-between md:justify-evenly justify-items-center items-end px-5  gap-y-4 gap-5 mb-6">
          <div className="flex sm:justify-evenly justify-between items-center sm:gap-3 gap-2 w-full  sm:w-3/4">
            <div className="flex flex-col items-start">
              <label
                htmlFor="awal"
                className=" text-md font-medium text-gray-800 sm:block hidden"
              >
                Masukkan Tanggal Awal
              </label>
              <div className="relative mt-1 rounded-lg  border border-neutral-400 py-1.5 sm:px-3 px-2  w-32 sm:w-full text-xs sm:text-base ">
                <Controller
                  control={control}
                  name="tgl_awal"
                  defaultValue={new Date()}
                  render={({ field }) => (
                    <DatePicker
                      placeholderText="Tanggal Awal"
                      onChange={(date) => field.onChange(date)}
                      selected={field.value}
                      className="outline-none w-24 sm:w-full text-gray-600"
                      dateFormat={"dd/MM/yyyy"}
                    />
                  )}
                />
              </div>
            </div>
            <div className="sm:h-1 h-7  w-3">_</div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="akhir"
                className="sm:block hidden text-md font-medium text-gray-800"
              >
                Masukkan Tanggal Akhir
              </label>
              <div className="relative mt-1 rounded-lg  border border-neutral-400 py-1.5  sm:px-3 px-2  w-32 sm:w-full text-xs sm:text-base">
                <Controller
                  control={control}
                  name="tgl_akhir"
                  defaultValue={new Date()}
                  render={({ field }) => (
                    <DatePicker
                      placeholderText="Tanggal Akhir"
                      onChange={(date) => field.onChange(date)}
                      selected={field.value}
                      className="outline-none  w-24  sm:w-full text-gray-600"
                      dateFormat={"dd/MM/yyyy"}
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-full sm:w-2/3">
            <label
              htmlFor="card"
              className="sm:block hidden text-md font-medium text-gray-800"
            >
              Masukkan Nomor Kartu
            </label>
            <div className="relative mt-1 rounded-lg border border-neutral-400 py-2 text-xs sm:text-base w-full focus:ring-5 ">
              <div className="pointer-events-none absolute inset-y-0 left-1 flex items-center pl-3">
                <HiOutlineCreditCard
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="number"
                className="block w-full rounded-md border-gray-300 pl-10 sm:text-sm outline-none text-gray-700 "
                placeholder="Nomor Kartu E-Toll"
                id="card"
                {...register("no_card", {
                  required: true,
                })}
              />
            </div>
            {errors.no_card && (
              <span className="mt-5 text-red-600 text-xs flex items-center absolute top-32 sm:top-44 md:top-32">
                <HiOutlineInformationCircle className="w-5" /> Field ini harus
                diisi !
              </span>
            )}
          </div>
          <div className="mt-3  sm:mt-0 flex flex-row sm:justify-evenly justify-center items-center px-5 sm:py-2 py-1.5 bg-primary rounded-md w-full text-sm sm:text-base sm:w-72">
            <button
              type="submit"
              className="flex  items-center gap-3 ml-2 text-white font-semibold
                        "
            >
              <span>
                <HiOutlineMagnifyingGlass
                  className="h-5 w-5 text-white bg-primary"
                  aria-hidden="true"
                />
              </span>
              Cari Struk
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
