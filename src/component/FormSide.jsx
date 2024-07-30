import React, { useState } from 'react';

const FormSide = () => {
  const [activeTab, setActiveTab] = useState('rent');

  return (
    <form>
      <div className="realestate-filter">
        <div className="container">
          <div className="realestate-filter-wrap nav">
            <a
              href="#for-rent"
              className={`nav-link ${activeTab === 'rent' ? 'active' : ''}`}
              onClick={() => setActiveTab('rent')}
              id="rent-tab"
              aria-controls="rent"
              aria-selected={activeTab === 'rent'}
            >
              For Rent
            </a>
            <a
              href="#for-sale"
              className={`nav-link ${activeTab === 'sale' ? 'active' : ''}`}
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
      <div className="realestate-tabpane pb-5">
        <div className="container tab-content">
          {activeTab === 'rent' && (
            <div
              className="tab-pane active"
              id="for-rent"
              role="tabpanel"
              aria-labelledby="rent-tab"
            >
              <div className="row">
                <div className="col-md-4 form-group">
                  <select className="form-control w-full">
                    <option value="">All Types</option>
                    <option value="townhouses">Townhouses</option>
                    <option value="duplexes">Duplexes</option>
                    <option value="quadplexes">Quadplexes</option>
                    <option value="condominiums">Condominiums</option>
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
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3+">3+</option>
                  </select>
                </div>
                <div className="col-md-4 form-group">
                  <select className="form-control w-full">
                    <option value="">Any Bathrooms</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3+">3+</option>
                  </select>
                </div>
                <div className="col-md-4 form-group">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <select className="form-control w-full">
                        <option value="">Min Price</option>
                        <option value="100">$100</option>
                        <option value="200">$200</option>
                        <option value="300">$300</option>
                        <option value="400">$400</option>
                      </select>
                    </div>
                    <div className="col-md-6 form-group">
                      <select className="form-control w-full">
                        <option value="">Max Price</option>
                        <option value="25000">$25,000</option>
                        <option value="50000">$50,000</option>
                        <option value="75000">$75,000</option>
                        <option value="100000">$100,000</option>
                        <option value="100000000">$100,000,000</option>
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
                    <option value="townhouses">Townhouses</option>
                    <option value="duplexes">Duplexes</option>
                    <option value="quadplexes">Quadplexes</option>
                    <option value="condominiums">Condominiums</option>
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
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3+">3+</option>
                  </select>
                </div>
                <div className="col-md-4 form-group">
                  <select className="form-control w-full">
                    <option value="">Any Bathrooms</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3+">3+</option>
                  </select>
                </div>
                <div className="col-md-4 form-group">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <select className="form-control w-full">
                        <option value="">Min Price</option>
                        <option value="100">$100</option>
                        <option value="200">$200</option>
                        <option value="300">$300</option>
                        <option value="400">$400</option>
                      </select>
                    </div>
                    <div className="col-md-6 form-group">
                      <select className="form-control w-full">
                        <option value="">Max Price</option>
                        <option value="25000">$25,000</option>
                        <option value="50000">$50,000</option>
                        <option value="75000">$75,000</option>
                        <option value="100000">$100,000</option>
                        <option value="100000000">$100,000,000</option>
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
      </div>
    </form>
  );
};

export default FormSide;
