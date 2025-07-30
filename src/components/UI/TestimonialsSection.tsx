import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'De Silva',
      text: 'Well equipped place. Doctors are great and the prices are also not so high.',
    },
    {
      id: 2,
      name: 'De Silva',
      text: 'Well equipped place. Doctors are great and the prices are also not so high. They have another branch in dehiwala.',
    },
    {
      id: 3,
      name: 'De Silva',
      text: 'Well equipped place. Doctors are great and the prices are also not so high.',
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Title and description */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 font-medium text-black">
              Thousands of Happy <span className="text-secondary">Clients</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-black/70 font-normal text-left text-wrap">
              Don&apos;t simply consider our word for it. With our customers, we
              have got five-star ratings, and most of the people recommend us to
              their friends and families.
            </p>
            <button className="bg-primary cursor-pointer hover:bg-primary/80 justify-center text-white px-6 py-2 rounded-full font-light transition-colors duration-200 flex text-lg items-center gap-2">
              View more
              <Image
                src={'/keyboard_arrow_up2.svg'}
                width={32}
                height={32}
                alt="arrow up"
              />
            </button>
          </div>

          {/* Right side - Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-xl"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div>
                    <Image
                      src="/profile1.svg"
                      width={40}
                      height={40}
                      alt="profile"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-black mb-2">
                      {testimonial.name}
                    </h3>
                    <p className="text-md text-black/70 leading-relaxed font-light">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
