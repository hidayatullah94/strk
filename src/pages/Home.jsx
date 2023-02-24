import React from "react";
import { Card, Forms, Header, Kontak, Unduh } from "../component";

export const Home = () => {
	const submits = (data) => {
		console.log(data);
	};
	return (
		<div className="w-screen h-auto">
			<Header />
			<section id="beranda" className="w-screen h-auto mt-3">
				<div className="w-11/12 mx-auto bg-hero h-80 rounded-2xl relative">
					<div className="text-center absolute inset-x-0 z-10 ">
						<div className="absolute inset-x-0 top-10">
							<p className="bg-hero md:text-4xl md:font-semibold text-white text-xl font-semibold">
								Mari jaga lingkungan dengan ikut
							</p>
							<p className="bg-hero md:text-4xl md:font-semibold text-white text-xl font-semibold">
								serta dalam penggunaan struk digital
							</p>
						</div>
						<div className="absolute inset-x-0 top-32 flex flex-row flex-wrap justify-center bg-hero md:absolute md:inset-x-0 md:top-40">
							<p className="bg-white mx-2 my-2 px-4 py-1 rounded-lg">
								#KerenPakaiSetrukDigital
							</p>
							<p className="bg-white mx-2 my-2 px-4 py-1 rounded-lg">
								#IndonesiaHijau
							</p>
						</div>
					</div>
					<div className="text-center absolute inset-x-0 top-56 z-20 w-11/12 mx-auto  rounded-lg">
						<Forms submit={submits} />
					</div>
				</div>
				<div className="w-11/12 mx-auto bg-slate-200 h-auto py-20 rounded-2xl relative mt-40 flex flex-row justify-evenly flex-wrap  items-center mb-20 ">
					<Card />
				</div>
			</section>
			<section id="unduh">
				<Unduh />
			</section>
			<section id="kontak" className="w-screen h-full">
				<Kontak />
			</section>
		</div>
	);
};
