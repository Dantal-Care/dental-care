// import Image from 'next/image';
// import data from './data.json';
// import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';
// import Link from 'next/link';

// export default function Footer() {
//   const nav = data.array;
//   const socialLinks = data.links || [];
//   const platform = data.platform || [];

//   return (
//     <div className="bg-[#00B4D8] font-poppins">
//       <div className="flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-md:flex-col max-md:items-center max-md:justify-center items-start justify-between px-8 py-12 max-w-7xl mx-auto gap-8">
//         <div className="flex flex-col items-center text-center">
//           <h1 className="text-white text-4xl font-bold mb-6">{data.name}</h1>
//           <div className="bg-white rounded-lg p-4 shadow-lg">
//             <Image
//               src="/Logo.png"
//               width={120}
//               height={120}
//               alt="Dental Care Logo"
//               className="object-contain"
//             />
//           </div>
//         </div>

//         <div className="text-white flex-shrink-0">
//           <h1 className="text-3xl font-bold mb-6">Quick Links</h1>
//           <div className="space-y-4">
//             {nav.map((item, index) => (
//               <Link
//                 href={item.url}
//                 key={index}
//                 className="flex items-center gap-3 group cursor-pointer"
//               >
//                 <ArrowRight
//                   size={16}
//                   className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
//                 />
//                 <p className="text-white/90 group-hover:text-white transition-colors duration-200 text-lg">
//                   {item.name}
//                 </p>
//               </Link>
//             ))}
//           </div>
//         </div>

//         <div className="text-white flex-shrink-0">
//           <h1 className="text-3xl font-bold mb-6">Contacts</h1>

//           <div className="space-y-6 mb-8">
//             <div className="flex items-start gap-3">
//               <MapPin size={20} className="text-white/80 mt-1 flex-shrink-0" />
//               <div>
//                 <p className="text-sm text-white/70 mb-1">Address:</p>
//                 <p className="text-white/90 text-lg leading-relaxed">
//                   {data.address}
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <Phone size={20} className="text-white/80" />
//               <span className="text-white/90 text-lg">{data.mobile}</span>
//             </div>

//             <div className="flex items-center gap-3">
//               <Mail size={20} className="text-white/80" />
//               <a href={`mailto:${data.email}`}>
//                 <span className="text-white/90 text-lg">{data.email}</span>
//               </a>
//             </div>
//           </div>

//           <div className="flex gap-4">
//             {socialLinks.map((link, index) => {
//               const getSocialIcon = (platform: string) => {
//                 switch (platform) {
//                   case 'facebook':
//                     return (
//                       <svg
//                         width="18"
//                         height="18"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                       >
//                         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                       </svg>
//                     );
//                   case 'instagram':
//                     return (
//                       <svg
//                         width="18"
//                         height="18"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                       >
//                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                       </svg>
//                     );
//                   case 'tiktok':
//                     return (
//                       <svg
//                         width="18"
//                         height="18"
//                         viewBox="0 0 256 256"
//                         fill="currentColor"
//                       >
//                         <path d="M232 64.2c-17.1 0-31.8-8.9-40.3-22.4-3.9-6.2-6.2-13.3-7-21.1h-30v132.7c0 14.2-11.6 25.8-25.8 25.8S103 167.6 103 153.3c0-14.3 11.6-25.8 25.8-25.8 3.7 0 7.2 0.8 10.3 2.3V100c-3.4-0.5-6.9-0.8-10.3-0.8-29.8 0-54 24.2-54 54s24.2 54 54 54c29.8 0 54-24.2 54-54v-76.8c10.4 6.8 23 10.8 36.5 10.8V64.2z" />
//                       </svg>
//                     );
//                   default:
//                     return null;
//                 }
//               };

//               return (
//                 <a
//                   key={index}
//                   href={link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110"
//                 >
//                   {getSocialIcon(platform[index])}
//                 </a>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Footer bottom */}
//       <div className="border-t border-white/20 py-6 text-center">
//         <p className="text-white/60 text-sm">
//           All Rights Reserved © {new Date().getFullYear()}
//         </p>
//       </div>
//     </div>
//   );
// }





import Image from 'next/image';
import data from './data.json';
import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const nav = data.array;
  const socialLinks = data.links || [];
  const platform = data.platform || [];

  const getSocialIcon = (platform: string) => {
    const iconProps = {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className: "transition-transform duration-200 group-hover:scale-110"
    };

    switch (platform.toLowerCase()) {
      case 'facebook':
        return (
          <svg {...iconProps} aria-label="Facebook">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case 'instagram':
        return (
          <svg {...iconProps} aria-label="Instagram">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case 'tiktok':
        return (
          <svg {...iconProps} viewBox="0 0 256 256" aria-label="TikTok">
            <path d="M232 64.2c-17.1 0-31.8-8.9-40.3-22.4-3.9-6.2-6.2-13.3-7-21.1h-30v132.7c0 14.2-11.6 25.8-25.8 25.8S103 167.6 103 153.3c0-14.3 11.6-25.8 25.8-25.8 3.7 0 7.2 0.8 10.3 2.3V100c-3.4-0.5-6.9-0.8-10.3-0.8-29.8 0-54 24.2-54 54s24.2 54 54 54c29.8 0 54-24.2 54-54v-76.8c10.4 6.8 23 10.8 36.5 10.8V64.2z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg {...iconProps} aria-label="LinkedIn">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'twitter':
      case 'x':
        return (
          <svg {...iconProps} aria-label="X (Twitter)">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'youtube':
        return (
          <svg {...iconProps} aria-label="YouTube">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      default:
        return (
          <div className="w-3 h-3 bg-current rounded-full" aria-label="Social Link" />
        );
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#00B4D8] to-[#0077B6] font-poppins" role="contentinfo">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start lg:items-center text-center md:text-left lg:text-center order-1 lg:order-1">
            <div className="mb-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 lg:p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <Image
                  src="/Logo.png"
                  width={100}
                  height={100}
                  alt={`${data.name} Logo`}
                  className="object-contain w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="text-white order-3 lg:order-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-center md:text-left">
              Quick Links
            </h2>
            <nav className="space-y-3 lg:space-y-4" role="navigation" aria-label="Footer navigation">
              {nav.map((item, index) => (
                <Link
                  href={item.url}
                  key={index}
                  className="flex items-center gap-3 group cursor-pointer justify-center md:justify-start hover:pl-2 transition-all duration-300"
                >
                  <ArrowRight
                    size={16}
                    className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-white/90 group-hover:text-white transition-colors duration-300 text-base lg:text-lg font-medium">
                    {item.name}
                  </p>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social Section */}
          <div className="text-white order-2 lg:order-3">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-center">
              Get in Touch
            </h2>

            {/* Contact Information */}
            <div className="space-y-6 lg:space-y-8 mb-8 lg:mb-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-3 group justify-center sm:justify-start">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-all duration-300 flex-shrink-0">
                  <MapPin 
                    size={20} 
                    className="text-white group-hover:scale-110 transition-all duration-300" 
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0 text-center sm:text-left flex-1">
                  <p className="text-sm text-white/80 mb-2 font-semibold uppercase tracking-wide">Address</p>
                  <address className="text-white text-base lg:text-lg leading-relaxed not-italic font-medium">
                    {data.address}
                  </address>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-3 group justify-center sm:justify-start">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-all duration-300 flex-shrink-0">
                  <Phone 
                    size={20} 
                    className="text-white group-hover:scale-110 transition-all duration-300" 
                    aria-hidden="true"
                  />
                </div>
                <div className="text-center sm:text-left flex-1">
                  <p className="text-sm text-white/80 mb-2 font-semibold uppercase tracking-wide">Phone</p>
                  <a 
                    href={`tel:${data.mobile}`}
                    className="text-white hover:text-white/90 text-base lg:text-lg transition-colors duration-200 font-medium block"
                    aria-label={`Call ${data.mobile}`}
                  >
                    {data.mobile}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-3 group justify-center sm:justify-start">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-all duration-300 flex-shrink-0">
                  <Mail 
                    size={20} 
                    className="text-white group-hover:scale-110 transition-all duration-300" 
                    aria-hidden="true"
                  />
                </div>
                <div className="text-center sm:text-left flex-1 min-w-0">
                  <p className="text-sm text-white/80 mb-2 font-semibold uppercase tracking-wide">Email</p>
                  <a 
                    href={`mailto:${data.email}`}
                    className="text-white hover:text-white/90 text-base lg:text-lg transition-colors duration-200 font-medium block break-all"
                    aria-label={`Send email to ${data.email}`}
                  >
                    {data.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            {socialLinks.length > 0 && (
              <div className="text-center">
                <p className="text-white/90 text-sm lg:text-base font-medium mb-3 lg:mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3 lg:gap-4 justify-center flex-wrap">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#00B4D8]"
                      aria-label={`Follow us on ${platform[index] || 'social media'}`}
                    >
                      {getSocialIcon(platform[index])}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 bg-black/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <p className="text-white/70 text-xs sm:text-sm font-medium">
              © {new Date().getFullYear()} {data.name}. All Rights Reserved.
            </p>
            
            {/* Optional: Add privacy links */}
            {/* <div className="flex items-center gap-4 lg:gap-6">
              <Link 
                href="/privacy-policy" 
                className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors duration-200 font-medium"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors duration-200 font-medium"
              >
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}