import React from 'react';
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div>
            <div className="section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <div className="box-feature mb-4">
                                <span className="flaticon-house mb-4 d-block"></span>
                                <h3 className="text-black mb-3 font-weight-bold">Quality Properties</h3>
                                <p className="text-black-50">Let Adam Campo Real Estate Manage Your Property So You Don't Have To! Free Management Proposal. Financing Available.</p>
                                <p><Link to="#" className="learn-more">Read more</Link></p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="box-feature mb-4">
                                <span className="flaticon-house-2 mb-4 d-block-3"></span>
                                <h3 className="text-black mb-3 font-weight-bold">Top Rated Agent</h3>
                                <p className="text-black-50">Compare the best realtors ranked by reviews in 2022. Rate and review your top real estate agent in Canada & USA..........................</p>
                                <p><Link to="#" className="learn-more">Read more</Link></p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="box-feature mb-4">
                                <span className="flaticon-building mb-4 d-block"></span>
                                <h3 className="text-black mb-3 font-weight-bold">Property for Sale</h3>
                                <p className="text-black-50">Find real estate and homes for sale today. Use the most comprehensive source of MLS property listings on the Internet with</p>
                                <p><Link to="#" className="learn-more">Read more</Link></p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="box-feature mb-4">
                                <span className="flaticon-house-3 mb-4 d-block-1"></span>
                                <h3 className="text-black mb-3 font-weight-bold">House for Sale</h3>
                                <p className="text-black-50">Search through a wide range of Residential Properties for Sale in Bangladesh ... 1720 Square Feet Residential Apartment Is Up For Sale At Bashundhara R-A.</p>
                                <p><Link to="#" className="learn-more">Read more</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;