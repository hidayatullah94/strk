import React, { useState } from "react";
import {
	HiOutlineCreditCard,
	HiOutlineMagnifyingGlass,
	HiOutlineCalendarDays,
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
		<div className="w-full h-full py-5 shadow-2xl rounded-lg ">
			<h5 className="text-center font-semibold text-lg my-5">
				Dapatkan struk digital transaksimu disini
			</h5>
			<form action="" onSubmit={handleSubmit(submit)}>
				<div className="flex flex-row flex-wrap justify-between md:justify-evenly justify-items-center items-end px-5 mb-5">
					<div className="flex flex-col items-start">
						<label
							htmlFor="awal"
							className="block text-md font-medium text-gray-800"
						>
							Masukkan Tanggal Awal
						</label>
						<div className="relative mt-1 rounded-lg  border border-neutral-400 py-2 px-3">
							<div className="pointer-events-none absolute inset-y-0 left-1 flex items-center pl-3">
								<HiOutlineCalendarDays
									className="h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</div>
							<Controller
								control={control}
								name="tgl_awal"
								render={({ field }) => (
									<DatePicker
										placeholderText="Tanggal Awal"
										onChange={(date) => field.onChange(date)}
										selected={field.value}
										className="outline-none"
									/>
								)}
							/>
						</div>
					</div>
					-
					<div className="flex flex-col items-start">
						<label
							htmlFor="akhir"
							className="block text-md font-medium text-gray-800"
						>
							Masukkan Tanggal Akhir
						</label>
						<div className="relative mt-1 rounded-lg  border border-neutral-400 py-2 px-3">
							<div className="pointer-events-none absolute inset-y-0 left-1 flex items-center pl-3">
								<HiOutlineCalendarDays
									className="h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</div>
							<Controller
								control={control}
								name="tgl_akhir"
								render={({ field }) => (
									<DatePicker
										placeholderText="Tanggal Akhir"
										onChange={(date) => field.onChange(date)}
										selected={field.value}
										className="outline-none"
									/>
								)}
							/>
						</div>
					</div>
					<div className="flex flex-col items-start">
						<label
							htmlFor="card"
							className="block text-md font-medium text-gray-800"
						>
							Masukkan Nomor Kartumu
						</label>
						<div className="relative mt-1 rounded-lg border border-neutral-400 py-2">
							<div className="pointer-events-none absolute inset-y-0 left-1 flex items-center pl-3">
								<HiOutlineCreditCard
									className="h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</div>
							<input
								type="number"
								className="block w-full rounded-md border-gray-300 pl-10 sm:text-sm outline-none "
								placeholder="Nomor Kartu E-Toll"
								id="card"
								{...register("no_card", {
									required: true,
								})}
							/>
							{errors.no_card && (
								<span className="mt-5 text-red-600">
									<HiOutlineInformationCircle /> Field ini harus diisi !
								</span>
							)}
						</div>
					</div>
					<div className="flex flex-row justify-evenly items-center px-5 py-2 bg-primary rounded-md">
						<span>
							<HiOutlineMagnifyingGlass
								className="h-5 w-5 text-white bg-primary"
								aria-hidden="true"
							/>
						</span>
						<button
							className="ml-2 text-white font-semibold
                        "
						>
							Cari Struk
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
