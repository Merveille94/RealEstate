import React, { useState } from 'react';
import Button from './Button';


const FormSide = () => {
  const [activeTab, setActiveTab] = useState('rent');

  return (
    <form action="">
      <div className="bg-customGreen">
        <div className="container mx-auto px-16">
          <div className="transform -translate-y-full relative z-10">
            <a
              href="#for-rent"
              className={`px-4 py-4 inline-block ${activeTab === 'rent' ? 'bg-customGreen text-white' : 'bg-white text-customGreen'}`}
              onClick={() => setActiveTab('rent')}
              id="rent-tab"
              aria-controls="rent"
              aria-selected={activeTab === 'rent'}
            >
              For Rent
            </a>
            <a
              href="#for-sale"
              className={`px-4 py-4 inline-block ${activeTab === 'sale' ? 'bg-customGreen text-white' : 'bg-white text-customGreen'}`}
              onClick={() => setActiveTab('sale')}
              id="sale-tab"
              aria-controls="sale"
              aria-selected={activeTab === 'sale'}
            >
              For Sale
            </a>
          </div>
        </div>
      </div>

      {/* <div className="pb-10 bg-customGreen">
        <div className="container mx-auto px-16 sm:px-6 lg:px-8">
          {activeTab === 'rent' && (
            <div
              className=" lg:grid lg:grid-cols-3 lg:gap-4"
              id="for-rent"
              role="tabpanel"
              aria-labelledby="rent-tab"
            >
                <div className="px-0">
                  <select className="px-9 py-4 rounded-md">
                    <option value="">All Types</option>
                    <option value="">Townhouses</option>
                    <option value="">Duplexes</option>
                    <option value="">Quadplexes</option>
                    <option value="">Condominiums</option>
                  </select>
                </div>

                <div className="px-0">
                  <input type="text" className="form-control px-3 py-4 rounded-md" placeholder="Title" />
                </div>

                <div className="px-0">
                  <input type="text" className="form-control px-3 py-4 rounded-md" placeholder="Address" />
                </div>

                <div className="px-0">
                  <select className="px-9 py-4 rounded-md">
                    <option value="">Any Bedrooms</option>
                    <option value="">0</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3+</option>
                  </select>
                </div>

                <div className="px-0">
                  <select className="px-9 py-4 rounded-md">
                    <option value="">Any Bathrooms</option>
                    <option value="">0</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3+</option>
                  </select>
                </div>

                <div className="flex justify-between">

                <div className="ps-0">
                      <select className="py-4 rounded-md">
                        <option value="">Min Price</option>
                        <option value="">$100</option>
                        <option value="">$200</option>
                        <option value="">$300</option>
                        <option value="">$400</option>
                      </select>
                    </div>

                    <div className="ps-2">
                      <select className="py-4 rounded-md">
                        <option value="">Max Price</option>
                        <option value="">$25,000</option>
                        <option value="">$50,000</option>
                        <option value="">$75,000</option>
                        <option value="">$100,000</option>
                        <option value="">$100,000,000</option>
                      </select>
                    </div>
                </div>

                    <Button content='Submit' bg='bg-black'/>
          </div>
          )}
          {activeTab === 'sale' && (
            <div
              className="tab-pane"
              id="for-sale"
              role="tabpanel"
              aria-labelledby="sale-tab"
            >
              <div className="row">
                <div className="col-md-4 form-group">
                  <select className="form-control w-full">
                    <option value="">All Types</option>
                    <option value="">Land</option>
                    <option value="">Townhouses</option>
                    <option value="">Duplexes</option>
                    <option value="">Quadplexes</option>
                    <option value="">Condominiums</option>
                  </select>
                </div>
                <div className="col-md-4 form-group">
                  <input type="text" className="form-control" placeholder="Title" />
                </div>
                <div className="col-md-4 form-group">
                  <input type="text" className="form-control" placeholder="Address" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 form-group">
                  <select className="form-control w-full">
                    <option value="">Any Bedrooms</option>
                    <option value="">0</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3+</option>
                  </select>
                </div>
                <div className="col-md-4 form-group">
                  <select className="form-control w-full">
                    <option value="">Any Bathrooms</option>
                    <option value="">0</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3+</option>
                  </select>
                </div>
                <div className="col-md-4 form-group">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <select className="form-control w-full">
                        <option value="">Min Price</option>
                        <option value="">$100</option>
                        <option value="">$200</option>
                        <option value="">$300</option>
                        <option value="">$400</option>
                      </select>
                    </div>
                    <div className="col-md-6 form-group">
                      <select className="form-control w-full">
                        <option value="">Max Price</option>
                        <option value="">$25,000</option>
                        <option value="">$50,000</option>
                        <option value="">$75,000</option>
                        <option value="">$100,000</option>
                        <option value="">$100,000,000</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <input
                    type="submit"
                    className="btn btn-black py-3 w-full"
                    value="Submit"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div> */}

<div className="bg-customGreen pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container mx-auto">
        <select className="border border-gray-300 rounded-md px-3 py-5">
          <option>All Types</option>
          {/* Add more options */}
        </select>
        <input
          type="text"
          className="border border-gray-300 rounded-md px-3 py-5"
          placeholder="Title"
        />
        <input
          type="text"
          className="border border-gray-300 rounded-md px-3 py-5"
          placeholder="Address"
        />
        <select className="border border-gray-300 rounded-md px-3 py-5">
          <option>Any Bedrooms</option>
          {/* Add more options */}
        </select>
        <select className="border border-gray-300 rounded-md px-3 py-4">
          <option>Any Bathrooms</option>
          {/* Add more options */}
        </select>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            className="border border-gray-300 rounded-md px-2 py-4"
            placeholder="Min Price"
          />
          <input
            type="number"
            className="border border-gray-300 rounded-md px-2 py-4"
            placeholder="Max Price"
          />
        </div>
      </div>
    </div>
    </form>
  );
};

export default FormSide;
