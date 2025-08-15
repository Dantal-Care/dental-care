'use client';

import React from 'react';
import { X, Clock, Calendar, Phone, Mail } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-transparent bg-opacity-100 backdrop-blur-sm z-[999] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-4xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 animate-in">
        {/* Header */}
        <div className="relative bg-primary px-6 pt-6 pb-4">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white cursor-pointer"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          <div className="text-center">
            <div className="rounded-full flex items-center justify-center mx-auto mb-2">
              <Calendar className="text-white" size={36} />
            </div>
            <h2 className="text-3xl font-semibold text-white mb-1">
              Book Appointment
            </h2>
            <p className="text-white text-md font-normal">
              Schedule your visit with us
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Opening Hours */}
          <div className="mb-4">
            <div className="flex items-center mb-4">
              <Clock className="text-cyan-600 mr-3" size={24} />
              <h3 className="text-lg font-semibold text-gray-800">
                Opening Hours
              </h3>
            </div>

            <div>
              <div className="flex justify-between items-center py-2 px-4 rounded-lg">
                <span className="font-medium text-gray-700">
                  Monday - Saturday
                </span>
                <span className="text-cyan-600 font-semibold">
                  4:00 PM - 9:00 PM
                </span>
              </div>
              <div className="flex justify-between items-center py-2 px-4 rounded-lg">
                <span className="font-medium text-gray-700">Sunday</span>
                <span className="text-cyan-600 font-semibold">
                  8:30 AM - 12:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Development Notice */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5 mb-6">
            <div className="flex items-start">
              <div className="bg-amber-500 rounded-full p-2 mr-3 mt-1">
                <Calendar className="text-white" size={16} />
              </div>
              <div>
                <h4 className="text-amber-800 font-semibold mb-1">
                  Coming Soon!
                </h4>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Our online booking system is currently under development.
                  We&apos;re working hard to make appointment scheduling easier
                  for you.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              For now, please contact us directly:
            </h4>
            <div className="flex gap-4 justify-between">
              <div className="flex w-1/2 items-center p-4 bg-cyan-50 rounded-xl hover:bg-cyan-100 transition-colors duration-200 cursor-pointer">
                <div className="bg-cyan-500 rounded-full p-3 mr-4">
                  <Phone className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Call us at</p>
                  <p className="font-semibold text-gray-800">+94 71 683 6872</p>
                </div>
              </div>

              <div className="flex w-1/2 items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200 cursor-pointer">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <Mail className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email us at</p>
                  <p className="font-semibold text-gray-800">
                    info@dentalclinic.lk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
