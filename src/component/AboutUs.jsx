import React from 'react'; 
import { FaHome, FaBath, FaWind, FaCalculator } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="site-section">
      <div className="container mx-auto pt-16">
        <div className="row align-items-stretch">
          <div className="col-lg-6">
            <div className="h-100 p-10 bg-black">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-md-6 text-center mb-24">
                  <div className="text-slate-200">
                    <FaHome size={64} className="mx-auto text-customGreen pb-2" />
                    <h3 className='uppercase'>Estate Insurance</h3>
                    <p>Estate Management</p>
                  </div>
                </div>
                <div className="col-md-6 text-center mb-24">
                  <div className="text-slate-200">
                    <FaBath size={64} className="mx-auto text-customGreen pb-2" />
                    <h3 className='uppercase'>Elegant Bathtub</h3>
                    <p>Estate Management</p>
                  </div>
                </div>
                <div className="col-md-6 text-center mb-4">
                  <div className="text-slate-200">
                    <FaWind size={64} className="mx-auto text-customGreen pb-2" />
                    <h3 className='uppercase'>Fresh Air</h3>
                    <p>Estate Management</p>
                  </div>
                </div>
                <div className="col-md-6 text-center mb-4">
                  <div className="text-slate-200">
                    <FaCalculator size={64} className="mx-auto text-customGreen pb-2" />
                    <h3 className='uppercase'>Estate Calculator</h3>
                    <p>Estate Management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container ml-auto">
            <h3 className="heading-29201">About Us</h3>
            <p className="mb-5">Perspiciatis quidem harum provident repellat sint.</p>
            <div className="service-39290 d-flex align-items-start mb-5">
              <div className="media-icon mr-4">
                <FaHome size={32} />
              </div>
              <div className="text">
                <h3>Mission</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo rem sit dolorem saepe ex voluptatum nam nulla et!</p>
              </div>
            </div>
            <div className="service-39290 d-flex align-items-start mb-5">
              <div className="media-icon mr-4">
                <FaCalculator size={32} />
              </div>
              <div className="text">
                <h3>Vision</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo rem sit dolorem saepe ex voluptatum nam nulla et!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
