import React from 'react';
import { FaMapMarkerAlt, FaExpand, FaBed, FaBath } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative bg-hero-image bg-fixed h-screen bg-contain bg-no-repeat pt-8">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex items-center justify-center text-center h-96">
          <div className="w-96">
            <span className="block text-2xl mb-4 text-customGreen">$1,570,000</span>
            <h1 className="text-3xl mb-2 text-white">Beautiful Housing Solution In Ghana</h1>
            <p className="text-center mb-5 text-white">
              <span className="flex items-center justify-center space-x-2">
                <FaMapMarkerAlt className="mr-2 text-customGreen" />
                <span className='text-sm'>156/10 Sapling Street, Harrison, ACT 2914</span>
              </span>
            </p>
            <div className="flex justify-around mb-5 text-white">
              <div className="flex items-center space-x-2">
                <FaExpand className='text-customGreen'/>
                <span className='text-xs'>2911 Sq Ft.</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaBed className='text-customGreen'/>
                <span className='text-xs'>2</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaBath className='text-customGreen'/>
                <span className='text-xs'>2</span>
              </div>
            </div>
            <p>
              <a href="#" className="rounded-md bg-customGreen text-slate-100 text-sm px-4 py-3">
                Learn More
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
