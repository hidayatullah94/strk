import React from "react";
// import unduh from "../assets/unduh.svg";

export const Unduh = () => {
	return (
		<div className="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
			<div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
				<div>
					<h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
						Cara Unduh
					</h3>
				</div>
			</div>
			<div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8 ">
				<div className="relative lg:col-start-2 lg:row-start-1">
					<div className="relative mx-auto max-w-prose text-base lg:max-w-none">
						<div className="aspect-w-12 aspect-h-7 lg:aspect-none">
							<img
								className="rounded-lg object-cover object-center "
								src="../assets/unduh.svg"
								alt="Whitney leaning against a railing on a downtown street"
								width={1184}
								height={1376}
							/>
						</div>
					</div>
				</div>
				<div className="mt-8 lg:mt-0">
					<div className="mx-auto max-w-prose text-base lg:max-w-none">
						<p className="text-lg text-gray-500">
							Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
							urna sed consectetur neque tristique pellentesque. Blandit amet,
							sed aenean erat arcu morbi.
						</p>
					</div>
					<div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
						<p>
							Sollicitudin tristique eros erat odio sed vitae, consequat turpis
							elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu
							viverra donec ut volutpat donec laoreet quam urna.
						</p>
						<p>
							Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit
							nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et
							sit. Faucibus sed non gravida lectus dignissim imperdiet a.
						</p>
						<p>
							Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem
							arcu, metus, egestas netus cursus. In.
						</p>
						<ul role="list">
							<li>Quis elit egestas venenatis mattis dignissim.</li>
							<li>
								Cras cras lobortis vitae vivamus ultricies facilisis tempus.
							</li>
							<li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
						</ul>
						<p>
							Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt
							vel ultricies. Vulputate aliquet velit faucibus semper.
							Pellentesque in venenatis vestibulum consectetur nibh id. In id ut
							tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum
							lacus in. Viverra.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
