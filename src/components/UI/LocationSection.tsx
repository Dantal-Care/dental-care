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
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d589.3444131166428!2d79.99321875240409!3d6.442708793769812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2slk!4v1754422979930!5m2!1sen!2slk"
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
