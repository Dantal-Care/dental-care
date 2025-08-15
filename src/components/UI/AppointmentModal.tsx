'use client';

import React from 'react';
import { X, Clock, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999] flex items-center justify-center p-2 sm:p-4"
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-4xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto transform mx-2 sm:mx-0 z-[1000]"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {/* Header */}
            <div className="relative bg-primary px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4">
              <button
                onClick={onClose}
                className="absolute top-2 right-2 text-white cursor-pointer p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>
              <div className="text-center">
                <div className="rounded-full flex items-center justify-center mx-auto mb-2">
                  <Calendar className="text-white" size={28} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-1">
                  Book Appointment
                </h2>
                <p className="text-white text-sm sm:text-md font-normal">
                  Schedule your visit with us
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              {/* Opening Hours */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <Clock className="text-primary mr-2 sm:mr-3" size={20} />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Opening Hours
                  </h3>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 sm:py-3 px-3 sm:px-4 rounded-lg bg-gray-50">
                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      Monday - Saturday
                    </span>
                    <span className="text-primary font-semibold text-sm sm:text-base">
                      4:00 PM - 9:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 sm:py-3 px-3 sm:px-4 rounded-lg bg-gray-50">
                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      Sunday
                    </span>
                    <span className="text-primary font-semibold text-sm sm:text-base">
                      8:30 AM - 12:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Development Notice */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 sm:p-5">
                <div className="flex items-start">
                  <div className="bg-amber-500 rounded-full p-1.5 sm:p-2 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0">
                    <Calendar className="text-white" size={14} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-amber-800 font-semibold mb-1 text-sm sm:text-base">
                      Coming Soon!
                    </h4>
                    <p className="text-amber-700 text-xs sm:text-sm leading-relaxed">
                      Our online booking system is currently under development.
                      We&apos;re working hard to make appointment scheduling
                      easier for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;
