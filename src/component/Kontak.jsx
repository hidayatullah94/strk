import React from "react";

export const Kontak = () => {
	return (
		<div className="mx-auto max-w-7xl py-10 px-6 lg:px-8  border-t-2 border-slate-400">
			<h2 className="text-3xl font-bold tracking-tight text-gray-900">
				Kontak
			</h2>
			<p className="mt-6 max-w-3xl text-lg text-gray-500">
				Jl. Angkasa No.20, RT.12/RW.2, Gn. Sahari Sel., Kec. Kemayoran, Kota
				Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10610
			</p>
			<div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
				<div>
					<h3 className="text-lg font-medium text-gray-900">Los Angeles</h3>
					<p className="mt-2 text-base text-gray-500">
						<span className="block">4556 Brendan Ferry</span>
						<span className="block">Los Angeles, CA 90210</span>
					</p>
				</div>
				<div>
					<h3 className="text-lg font-medium text-gray-900">New York</h3>
					<p className="mt-2 text-base text-gray-500">
						<span className="block">886 Walter Streets</span>
						<span className="block">New York, NY 12345</span>
					</p>
				</div>
				<div>
					<h3 className="text-lg font-medium text-gray-900">Toronto</h3>
					<p className="mt-2 text-base text-gray-500">
						<span className="block">7363 Cynthia Pass</span>
						<span className="block">Toronto, ON N3Y 4H8</span>
					</p>
				</div>
				<div>
					<h3 className="text-lg font-medium text-gray-900">London</h3>
					<p className="mt-2 text-base text-gray-500">
						<span className="block">114 Cobble Lane</span>
						<span className="block">London N1 2EF</span>
					</p>
				</div>
			</div>
		</div>
	);
};
