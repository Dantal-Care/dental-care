import Image from 'next/image';

export default function AboutMe() {
	return(
		<div className="bg-gray-50 py-16 px-8">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col lg:flex-row items-center gap-12">
					
					{/* Image Section - Left Side */}
					<div className="flex-1">
						<div className="relative">
							<Image
								src="/general-dentistry-img.jpeg"
								alt="Dentist"
								width={500}
								height={400}
								className="rounded-2xl object-cover w-full h-[400px]"
							/>
							<div className="absolute -z-10 top-8 left-8 w-full h-full bg-secondary/20 rounded-2xl"></div>
						</div>
					</div>

					{/* Text Content Section - Right Side */}
					<div className="flex-1 lg:pl-8">
						<h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
							Get to know your dentist <br />
							your dentist
						</h2>
						
						<p className="text-gray-600 text-lg leading-relaxed mb-4">
							Trusted dental care for all ages for over 25+ years —
						</p>
						
						<p className="text-gray-600 text-lg leading-relaxed mb-8">
							bringing decades of expertise to help you achieve a healthier, brighter smile.
						</p>

						{/* About Me Button */}
						<button className="bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-primary transition-colors duration-200 flex items-center gap-3 text-lg">
							About me
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}