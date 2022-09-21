import React from 'react';
import { Link } from "react-router-dom";
import FeaturePro from './FeaturePro';


const Property = () => {

      

    return (
        <div>
            	<div className="hero page-inner overlay" style={{backgroundImage: "url('assets/images/hero_bg_1.jpg')"}}>

<div className="container">
    <div className="row justify-content-center align-items-center">
        <div className="col-lg-9 text-center mt-5">
            <h1 className="heading" >Properties</h1>

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-center justify-content-center">
                    <li className="breadcrumb-item "><Link to="index.html">Home</Link></li>
                    <li className="breadcrumb-item active text-white-50" aria-current="page">Properties</li>
                </ol>
            </nav>
        </div>
    </div>
</div>
</div>


<div >
<div className="row mb-5 align-items-center ">
        <div className="text-center mx-auto pt-5 ">
            <h2 className="font-weight-bold text-primary heading" style={{marginBottom: "-70px"}}>Featured Properties</h2>
        </div>
        
    </div>
<FeaturePro></FeaturePro>
</div>


<div className="section section-properties">
<div className="container">
    <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="property-item mb-30">

                <Link to="/singleProperty" className="img">
                    <img src="assets/images/img_1.jpg" alt="" className="img-fluid"/>
                </Link>

                <div className="property-content">
                    <div className="price mb-2"><span>$1,291,000</span></div>
                    <div>
                        <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                        <span className="city d-block mb-3">California, USA</span>

                        <div className="specs d-flex mb-4">
                            <span className="d-block d-flex align-items-center me-3">
                                <span className="icon-bed me-2"></span>
                                <span className="caption">2 beds</span>
                            </span>
                            <span className="d-block d-flex align-items-center">
                                <span className="icon-bath me-2"></span>
                                <span className="caption">2 baths</span>
                            </span>
                        </div>

                        <Link to="/singleProperty" className="btn btn-primary py-2 px-3">See details</Link>
                    </div>
                </div>
            </div> 
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="property-item mb-30">

                <Link to="/singleProperty" className="img">
                    <img src="assets/images/img_2.jpg" alt="" className="img-fluid"/>
                </Link>

                <div className="property-content">
                    <div className="price mb-2"><span>$1,291,000</span></div>
                    <div>
                        <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                        <span className="city d-block mb-3">California, USA</span>

                        <div className="specs d-flex mb-4">
                            <span className="d-block d-flex align-items-center me-3">
                                <span className="icon-bed me-2"></span>
                                <span className="caption">2 beds</span>
                            </span>
                            <span className="d-block d-flex align-items-center">
                                <span className="icon-bath me-2"></span>
                                <span className="caption">2 baths</span>
                            </span>
                        </div>

                        <Link to="/singleProperty" className="btn btn-primary py-2 px-3">See details</Link>
                    </div>
                </div>
            </div> 
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="property-item mb-30">

                <Link to="/singleProperty" className="img">
                    <img src="assets/images/img_3.jpg" alt="" className="img-fluid"/>
                </Link>

                <div className="property-content">
                    <div className="price mb-2"><span>$1,291,000</span></div>
                    <div>
                        <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                        <span className="city d-block mb-3">California, USA</span>

                        <div className="specs d-flex mb-4">
                            <span className="d-block d-flex align-items-center me-3">
                                <span className="icon-bed me-2"></span>
                                <span className="caption">2 beds</span>
                            </span>
                            <span className="d-block d-flex align-items-center">
                                <span className="icon-bath me-2"></span>
                                <span className="caption">2 baths</span>
                            </span>
                        </div>

                        <Link to="/singleProperty" className="btn btn-primary py-2 px-3">See details</Link>
                    </div>
                </div>
            </div> 
        </div>


        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="property-item mb-30">

                <Link to="/singleProperty" className="img">
                    <img src="assets/images/img_4.jpg" alt="" className="img-fluid"/>
                </Link>

                <div className="property-content">
                    <div className="price mb-2"><span>$1,291,000</span></div>
                    <div>
                        <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                        <span className="city d-block mb-3">California, USA</span>

                        <div className="specs d-flex mb-4">
                            <span className="d-block d-flex align-items-center me-3">
                                <span className="icon-bed me-2"></span>
                                <span className="caption">2 beds</span>
                            </span>
                            <span className="d-block d-flex align-items-center">
                                <span className="icon-bath me-2"></span>
                                <span className="caption">2 baths</span>
                            </span>
                        </div>

                        <Link to="/singleProperty" className="btn btn-primary py-2 px-3">See details</Link>
                    </div>
                </div>
            </div> 
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="property-item mb-30">

                <Link to="/singleProperty" className="img">
                    <img src="assets/images/img_5.jpg" alt="" className="img-fluid"/>
                </Link>

                <div className="property-content">
                    <div className="price mb-2"><span>$1,291,000</span></div>
                    <div>
                        <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                        <span className="city d-block mb-3">California, USA</span>

                        <div className="specs d-flex mb-4">
                            <span className="d-block d-flex align-items-center me-3">
                                <span className="icon-bed me-2"></span>
                                <span className="caption">2 beds</span>
                            </span>
                            <span className="d-block d-flex align-items-center">
                                <span className="icon-bath me-2"></span>
                                <span className="caption">2 baths</span>
                            </span>
                        </div>

                        <Link to="/singleProperty" className="btn btn-primary py-2 px-3">See details</Link>
                    </div>
                </div>
            </div> 
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="property-item mb-30">

                <Link to="/singleProperty" className="img">
                    <img src="assets/images/img_6.jpg" alt="" className="img-fluid"/>
                </Link>

                <div className="property-content">
                    <div className="price mb-2"><span>$1,291,000</span></div>
                    <div>
                        <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                        <span className="city d-block mb-3">California, USA</span>

                        <div className="specs d-flex mb-4">
                            <span className="d-block d-flex align-items-center me-3">
                                <span className="icon-bed me-2"></span>
                                <span className="caption">2 beds</span>
                            </span>
                            <span className="d-block d-flex align-items-center">
                                <span className="icon-bath me-2"></span>
                                <span className="caption">2 baths</span>
                            </span>
                        </div>

                        <Link to="/singleProperty" className="btn btn-primary py-2 px-3">See details</Link>
                    </div>
                </div>
            </div> 
    </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="property-item mb-30">

                <Link to="/singleProperty" className="img">
                    <img src="assets/images/img_7.jpg" alt="" className="img-fluid"/>
                </Link>

                <div className="property-content">
                    <div className="price mb-2"><span>$1,291,000</span></div>
                    <div>
                        <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                        <span className="city d-block mb-3">California, USA</span>

                        <div className="specs d-flex mb-4">
                            <span className="d-block d-flex align-items-center me-3">
                                <span className="icon-bed me-2"></span>
                                <span className="caption">2 beds</span>
                            </span>
                            <span className="d-block d-flex align-items-center">
                                <span className="icon-bath me-2"></span>
                                <span className="caption">2 baths</span>
                            </span>
                        </div>

                        <Link to="/singleProperty" className="btn btn-primary py-2 px-3">See details</Link>
                    </div>
                </div>
            </div> 
    </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="property-item mb-30">

                <Link to="/singleProperty" className="img">
                    <img src="assets/images/img_8.jpg" alt="" className="img-fluid"/>
                </Link>

                <div className="property-content">
                    <div className="price mb-2"><span>$1,291,000</span></div>
                    <div>
                        <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                        <span className="city d-block mb-3">California, USA</span>

                        <div className="specs d-flex mb-4">
                            <span className="d-block d-flex align-items-center me-3">
                                <span className="icon-bed me-2"></span>
                                <span className="caption">2 beds</span>
                            </span>
                            <span className="d-block d-flex align-items-center">
                                <span className="icon-bath me-2"></span>
                                <span className="caption">2 baths</span>
                            </span>
                        </div>

                        <Link to="/singleProperty" className="btn btn-primary py-2 px-3">See details</Link>
                    </div>
                </div>
            </div> 
    </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="property-item mb-30">

                <Link to="/singleProperty" className="img">
                    <img src="assets/images/img_1.jpg" alt="" className="img-fluid"/>
                </Link>

                <div className="property-content">
                    <div className="price mb-2"><span>$1,291,000</span></div>
                    <div>
                        <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                        <span className="city d-block mb-3">California, USA</span>

                        <div className="specs d-flex mb-4">
                            <span className="d-block d-flex align-items-center me-3">
                                <span className="icon-bed me-2"></span>
                                <span className="caption">3 beds</span>
                            </span>
                            <span className="d-block d-flex align-items-center">
                                <span className="icon-bath me-2"></span>
                                <span className="caption">2 baths</span>
                            </span>
                        </div>

                        <Link to="/singleProperty" className="btn btn-primary py-2 px-3">See details</Link>
                    </div>
                </div>
            </div> 
    </div>
   
</div>
</div>
        </div>
        </div>
    );
};

export default Property;