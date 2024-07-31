import React from 'react';
import { FaMapMarkerAlt, FaExpand, FaBed, FaBath } from 'react-icons/fa';
import Button from './Button';

const Hero = () => {
  return (
    <div className="relative bg-hero-image bg-fixed h-55v  bg-contain bg-no-repeat pt-16 lg:pt-48 2xl:bg-cover">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex items-center justify-center text-center h-96">
          <div className="w-96 lg:w-5/12">
            <span className="block text-2xl lg:text-3xl mb-4 lg:mb-8 text-customGreen">$1,570,000</span>
            <h1 className="text-3xl mb-2 lg:mb-6 lg:text-4xl text-white">Beautiful Housing Solution In Ghana</h1>
            <p className="text-center mb-5 lg:mb-10 text-white">
              <span className="flex items-center justify-center space-x-2">
                <FaMapMarkerAlt className="mr-2 text-customGreen" />
                <span className='text-sm'>156/10 Westland, Harrison Street, ACT 2914</span>
              </span>
            </p>
            <div className="flex justify-around mb-5 lg:mb-10 text-white">
              <div className="flex items-center space-x-2">
                <FaExpand className='text-customGreen'/>
                <span className='text-xs'>2,911 m<sup>2</sup></span>
              </div>
              <div className="flex items-center space-x-2">
                <FaBed className='text-customGreen'/>
                <span className='text-xs'>2</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaBath className='text-customGreen'/>
                <span className='text-xs'>3</span>
              </div>
            </div>
            <Button/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
