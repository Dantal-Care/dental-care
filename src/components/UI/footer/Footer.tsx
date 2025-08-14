import Image from 'next/image';
import data from './data.json';
import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const nav = data.array;
  const socialLinks = data.links || [];
  const platform = data.platform || [];

  return (
    <div className="bg-[#00B4D8] font-poppins">
      <div className="flex items-start justify-between px-8 py-12 max-w-7xl mx-auto gap-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-white text-4xl font-bold mb-6">{data.name}</h1>
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <Image
              src="/Logo.png"
              width={120}
              height={120}
              alt="Dental Care Logo"
              className="object-contain"
            />
          </div>
        </div>

        <div className="text-white flex-shrink-0">
          <h1 className="text-3xl font-bold mb-6">Quick Links</h1>
          <div className="space-y-4">
            {nav.map((item, index) => (
              <Link
                href={item.url}
                key={index}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <ArrowRight
                  size={16}
                  className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
                />
                <p className="text-white/90 group-hover:text-white transition-colors duration-200 text-lg">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-white flex-shrink-0">
          <h1 className="text-3xl font-bold mb-6">Contacts</h1>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-white/80 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-white/70 mb-1">Address:</p>
                <p className="text-white/90 text-lg leading-relaxed">
                  {data.address}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={20} className="text-white/80" />
              <span className="text-white/90 text-lg">{data.mobile}</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={20} className="text-white/80" />
              <a href={`mailto:${data.email}`}>
                <span className="text-white/90 text-lg">{data.email}</span>
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link, index) => {
              const getSocialIcon = (platform: string) => {
                switch (platform) {
                  case 'facebook':
                    return (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    );
                  case 'instagram':
                    return (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    );
                  case 'tiktok':
                    return (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 256 256"
                        fill="currentColor"
                      >
                        <path d="M232 64.2c-17.1 0-31.8-8.9-40.3-22.4-3.9-6.2-6.2-13.3-7-21.1h-30v132.7c0 14.2-11.6 25.8-25.8 25.8S103 167.6 103 153.3c0-14.3 11.6-25.8 25.8-25.8 3.7 0 7.2 0.8 10.3 2.3V100c-3.4-0.5-6.9-0.8-10.3-0.8-29.8 0-54 24.2-54 54s24.2 54 54 54c29.8 0 54-24.2 54-54v-76.8c10.4 6.8 23 10.8 36.5 10.8V64.2z" />
                      </svg>
                    );
                  default:
                    return null;
                }
              };

              return (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110"
                >
                  {getSocialIcon(platform[index])}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/20 py-6 text-center">
        <p className="text-white/60 text-sm">
          All Rights Reserved © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
