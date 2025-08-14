import Image from 'next/image';
import AboutmeButton from './buttons/AboutmeButton';

export default function AboutMe() {
  return (
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
            <h2 className="text-4xl lg:text-5xl font-medium text-black mb-6">
              Get Match with <br />
              Your Dentist
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Trusted dental care for all ages for over 25+ years bringing
              decades of expertise to help you achieve a healthier, brighter
              smile.
            </p>

            {/* About Me Button */}
            <AboutmeButton />
          </div>
        </div>
      </div>
    </div>
  );
}
