import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Stethoscope, Calendar, UserPlus } from 'lucide-react';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden my-8 md:mx-6">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#216B7B] via-[#A0D0B6] to-[#dadada] opacity-90 rounded-xl" />
      
      {/* Decorative circles - made smaller */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full translate-x-1/2 translate-y-1/2" />

      {/* Content container */}
      <div className="relative flex px-4 sm:px-6 md:px-8 lg:px-10">
        {/* ---------- Left Side ---------- */}
        <div className="flex-1 py-6 sm:py-8 md:py-10 lg:py-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            <span>Premium Healthcare</span>
          </div>

          {/* Main text */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
                Book Appointment
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-blue-100">
                With Trusted Doctors
              </span>
            </p>
            <p className="text-white/80 text-sm max-w-md mt-2">
              Experience world-class healthcare with our certified medical professionals.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <button 
              onClick={() => { navigate('/login'); scrollTo(0, 0); }}
              className="group relative inline-flex items-center px-6 py-2 rounded-full bg-white text-sm font-semibold text-[#216B7B] hover:bg-opacity-95 transition-all duration-300"
            >
              Create account
              <svg 
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ---------- Right Side ---------- */}
        <div className="hidden md:block md:w-1/3 lg:w-[280px] relative">
          {/* Interactive Medical Icons */}
          <div className="relative h-full flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Main central icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-4">
                <Stethoscope className="w-12 h-12 text-white" />
              </div>
              
              {/* Orbiting icons */}
              <div className="absolute top-1/4 right-1/4 bg-white/15 backdrop-blur-sm rounded-full p-2 animate-bounce">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute bottom-1/4 left-1/3 bg-white/15 backdrop-blur-sm rounded-full p-2 animate-pulse">
                <UserPlus className="w-6 h-6 text-white" />
              </div>
              
              {/* Decorative circles */}
              <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-200 rounded-full animate-ping" />
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-purple-200 rounded-full animate-pulse" />
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
                <path
                  d="M150,150 L225,75 M150,150 L75,225 M150,150 L225,225"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;