import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { specialityData } from '../assets/assets';
import { Search } from 'lucide-react';

const SpecialtyCard = ({ item, index }) => {
  return (
    <Link 
      onClick={() => scrollTo(0,0)} 
      to={`/doctors/${item.speciality}`}
      className="group relative flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0 w-32 sm:w-44"
    >
      <div className="relative mb-4 p-3 bg-[#A0D0B6] rounded-full group-hover:bg-[#216B7B] transition-colors duration-300">
        <img 
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain transform group-hover:scale-110 transition-transform duration-300 " 
          src={item.image} 
          alt={item.speciality} 
        />
      </div>
      <p className="text-sm sm:text-base font-medium text-gray-700 text-center group-hover:text-[#216B7B] transition-colors duration-300">
        {item.speciality}
      </p>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#A0D0B6] rounded-xl transition-colors duration-300" />
    </Link>
  );
};

const SpecialityMenu = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50/30 py-16 px-4" id="speciality">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Find Specialists
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Connect with trusted healthcare specialists across various medical fields. 
            Book appointments seamlessly with our extensive network of qualified doctors.
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 py-4 px-2 overflow-x-auto scrollbar-hide">
            {specialityData.map((item, index) => (
              <SpecialtyCard key={index} item={item} index={index} />
            ))}
          </div>
          
          {/* Scroll Indicators */}
          <div className="hidden sm:block">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpecialityMenu;