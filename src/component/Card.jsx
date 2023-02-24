import React from "react";
// import logo from "../assets/logos.png";

const style = {
	width: "100%",
	maxWidth: "100%",
	height: 200,
	display: "block",
};

export const Card = () => {
	return (
		<div className="shadow-md w-96 h-full  py-5 rounded-lg">
			<p className="text-xs font-extralight text-slate-500 ml-2 bg-inherit">
				Tanggal Cetak Rabu, 20 Januari 2021 pukul 16:30
			</p>
			<div className="px-4 py-5 sm:p-6 flex flex-col justify-evenly ">
				<div className="flex flex-col border-b-2 border-slate-300 pb-2">
					<div className="flex flex-row justify-evenly">
						<img src="../assets/logos.png" alt="logo" className="w-8" />
						<p className="font-semibold text-lg">
							PT Citra Persada Infrastruktur
						</p>
					</div>
					<div className="flex flex-col justify-evenly items-end">
						<p>Ruas Tol Lingkar Dalam</p>
						<p className="text-sm text-slate-400">
							Layanan Toll (Free Call) : 0-800- 1-777-879
						</p>
					</div>
				</div>
				<div className="mb-5 border-b-2 border-slate-300">
					<p>Gerbang Tol Kebon bawang</p>
					<p className="text-sm text-slate-400">
						Rabu, 20 januari 2021 Pukul 16:00
					</p>
					<p className="text-sm text-slate-400">Gol 1, Sistem Terbuka</p>
					<div className="divide-y-2 flex flex-col border-t-2 border-slate-300 mt-3">
						<p className="py-2">Bank : BCA (Flazz)</p>
						<p className="py-2">Nomor Kartu : 1452003024407</p>
						<p className="py-2">Tarif: Rp. 10.500</p>
						<p className="py-2">Sisa Saldo : Rp. 9.989.500</p>
					</div>
				</div>
				<div className="text-center">
					<h5>Terimakasih</h5>
					<p className="text-slate-400 text-sm">
						Struk ini merupakan bukti pembayaran yang sah
					</p>
				</div>
			</div>
		</div>
	);
};
