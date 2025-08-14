import React from 'react';

export default function LocationSection() {
  return (
    <div className="bg-gray-50 pt-12 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 font-semibold text-black text-center">
          Our Location
        </h2>
        <div className="w-full md:w-[800px] h-[300px] sm:h-[400px] md:h-[450px] mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.2913743695!2d80.53072705135739!3d5.954533495549496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13f3a9d89630d%3A0x781c5464ad73368e!2s74b%20Matara%20-%20Akuressa%20Hwy%2C%20Matara!5e0!3m2!1sen!2slk!4v1754465791499!5m2!1sen!2slk"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-lg border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
