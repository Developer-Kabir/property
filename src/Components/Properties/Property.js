import React from 'react';
import { Link } from "react-router-dom";
import FeaturePro from './FeaturePro';


const Property = () => {

      

    return (
        <div>
            	<div class="hero page-inner overlay" style={{backgroundImage: "url('assets/images/hero_bg_1.jpg')"}}>

<div class="container">
    <div class="row justify-content-center align-items-center">
        <div class="col-lg-9 text-center mt-5">
            <h1 class="heading" >Properties</h1>

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb text-center justify-content-center">
                    <li class="breadcrumb-item "><Link to="index.html">Home</Link></li>
                    <li class="breadcrumb-item active text-white-50" aria-current="page">Properties</li>
                </ol>
            </nav>
        </div>
    </div>
</div>
</div>


<div >
<div class="row mb-5 align-items-center ">
        <div class="text-center mx-auto pt-5 ">
            <h2 class="font-weight-bold text-primary heading" style={{marginBottom: "-70px"}}>Featured Properties</h2>
        </div>
        
    </div>
<FeaturePro></FeaturePro>
</div>


<div class="section section-properties">
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div class="property-item mb-30">

                <Link to="/singleProperty" class="img">
                    <img src="assets/images/img_1.jpg" alt="" class="img-fluid"/>
                </Link>

                <div class="property-content">
                    <div class="price mb-2"><span>$1,291,000</span></div>
                    <div>
                        <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                        <span class="city d-block mb-3">California, USA</span>

                        <div class="specs d-flex mb-4">
                            <span class="d-block d-flex align-items-center me-3">
                                <span class="icon-bed me-2"></span>
                                <span class="caption">2 beds</span>
                            </span>
                            <span class="d-block d-flex align-items-center">
                                <span class="icon-bath me-2"></span>
                                <span class="caption">2 baths</span>
                            </span>
                        </div>

                        <Link to="/singleProperty" class="btn btn-primary py-2 px-3">See details</Link>
                    </div>
                </div>
            </div> 
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div class="property-item mb-30">

                <Link to="/singleProperty" class="img">
                    <img src="assets/images/img_2.jpg" alt="" class="img-fluid"/>
                </Link>

                <div class="property-content">
                    <div class="price mb-2"><span>$1,291,000</span></div>
                    <div>
                        <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                        <span class="city d-block mb-3">California, USA</span>

                        <div class="specs d-flex mb-4">
                            <span class="d-block d-flex align-items-center me-3">
                                <span class="icon-bed me-2"></span>
                                <span class="caption">2 beds</span>
                            </span>
                            <span class="d-block d-flex align-items-center">
                                <span class="icon-bath me-2"></span>
                                <span class="caption">2 baths</span>
                            </span>
                        </div>

                        <Link to="/singleProperty" class="btn btn-primary py-2 px-3">See details</Link>
                    </div>
                </div>
            </div> 
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div class="property-item mb-30">

                <Link to="/singleProperty" class="img">
                    <img src="assets/images/img_3.jpg" alt="" class="img-fluid"/>
                </Link>

                <div class="property-content">
                    <div class="price mb-2"><span>$1,291,000</span></div>
                    <div>
                        <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                        <span class="city d-block mb-3">California, USA</span>

                        <div class="specs d-flex mb-4">
                            <span class="d-block d-flex align-items-center me-3">
                                <span class="icon-bed me-2"></span>
                                <span class="caption">2 beds</span>
                            </span>
                            <span class="d-block d-flex align-items-center">
                                <span class="icon-bath me-2"></span>
                                <span class="caption">2 baths</span>
                            </span>
                        </div>

                        <Link to="/singleProperty" class="btn btn-primary py-2 px-3">See details</Link>
                    </div>
                </div>
            </div> 
        </div>


        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div class="property-item mb-30">

                <Link to="/singleProperty" class="img">
                    <img src="assets/images/img_4.jpg" alt="" class="img-fluid"/>
                </Link>

                <div class="property-content">
                    <div class="price mb-2"><span>$1,291,000</span></div>
                    <div>
                        <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                        <span class="city d-block mb-3">California, USA</span>

                        <div class="specs d-flex mb-4">
                            <span class="d-block d-flex align-items-center me-3">
                                <span class="icon-bed me-2"></span>
                                <span class="caption">2 beds</span>
                            </span>
                            <span class="d-block d-flex align-items-center">
                                <span class="icon-bath me-2"></span>
                                <span class="caption">2 baths</span>
                            </span>
                        </div>

                        <Link to="/singleProperty" class="btn btn-primary py-2 px-3">See details</Link>
                    </div>
                </div>
            </div> 
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div class="property-item mb-30">

                <Link to="/singleProperty" class="img">
                    <img src="assets/images/img_5.jpg" alt="" class="img-fluid"/>
                </Link>

                <div class="property-content">
                    <div class="price mb-2"><span>$1,291,000</span></div>
                    <div>
                        <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                        <span class="city d-block mb-3">California, USA</span>

                        <div class="specs d-flex mb-4">
                            <span class="d-block d-flex align-items-center me-3">
                                <span class="icon-bed me-2"></span>
                                <span class="caption">2 beds</span>
                            </span>
                            <span class="d-block d-flex align-items-center">
                                <span class="icon-bath me-2"></span>
                                <span class="caption">2 baths</span>
                            </span>
                        </div>

                        <Link to="/singleProperty" class="btn btn-primary py-2 px-3">See details</Link>
                    </div>
                </div>
            </div> 
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div class="property-item mb-30">

                <Link to="/singleProperty" class="img">
                    <img src="assets/images/img_6.jpg" alt="" class="img-fluid"/>
                </Link>

                <div class="property-content">
                    <div class="price mb-2"><span>$1,291,000</span></div>
                    <div>
                        <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                        <span class="city d-block mb-3">California, USA</span>

                        <div class="specs d-flex mb-4">
                            <span class="d-block d-flex align-items-center me-3">
                                <span class="icon-bed me-2"></span>
                                <span class="caption">2 beds</span>
                            </span>
                            <span class="d-block d-flex align-items-center">
                                <span class="icon-bath me-2"></span>
                                <span class="caption">2 baths</span>
                            </span>
                        </div>

                        <Link to="/singleProperty" class="btn btn-primary py-2 px-3">See details</Link>
                    </div>
                </div>
            </div> 
    </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div class="property-item mb-30">

                <Link to="/singleProperty" class="img">
                    <img src="assets/images/img_7.jpg" alt="" class="img-fluid"/>
                </Link>

                <div class="property-content">
                    <div class="price mb-2"><span>$1,291,000</span></div>
                    <div>
                        <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                        <span class="city d-block mb-3">California, USA</span>

                        <div class="specs d-flex mb-4">
                            <span class="d-block d-flex align-items-center me-3">
                                <span class="icon-bed me-2"></span>
                                <span class="caption">2 beds</span>
                            </span>
                            <span class="d-block d-flex align-items-center">
                                <span class="icon-bath me-2"></span>
                                <span class="caption">2 baths</span>
                            </span>
                        </div>

                        <Link to="/singleProperty" class="btn btn-primary py-2 px-3">See details</Link>
                    </div>
                </div>
            </div> 
    </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div class="property-item mb-30">

                <Link to="/singleProperty" class="img">
                    <img src="assets/images/img_8.jpg" alt="" class="img-fluid"/>
                </Link>

                <div class="property-content">
                    <div class="price mb-2"><span>$1,291,000</span></div>
                    <div>
                        <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                        <span class="city d-block mb-3">California, USA</span>

                        <div class="specs d-flex mb-4">
                            <span class="d-block d-flex align-items-center me-3">
                                <span class="icon-bed me-2"></span>
                                <span class="caption">2 beds</span>
                            </span>
                            <span class="d-block d-flex align-items-center">
                                <span class="icon-bath me-2"></span>
                                <span class="caption">2 baths</span>
                            </span>
                        </div>

                        <Link to="/singleProperty" class="btn btn-primary py-2 px-3">See details</Link>
                    </div>
                </div>
            </div> 
    </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div class="property-item mb-30">

                <Link to="/singleProperty" class="img">
                    <img src="assets/images/img_1.jpg" alt="" class="img-fluid"/>
                </Link>

                <div class="property-content">
                    <div class="price mb-2"><span>$1,291,000</span></div>
                    <div>
                        <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                        <span class="city d-block mb-3">California, USA</span>

                        <div class="specs d-flex mb-4">
                            <span class="d-block d-flex align-items-center me-3">
                                <span class="icon-bed me-2"></span>
                                <span class="caption">3 beds</span>
                            </span>
                            <span class="d-block d-flex align-items-center">
                                <span class="icon-bath me-2"></span>
                                <span class="caption">2 baths</span>
                            </span>
                        </div>

                        <Link to="/singleProperty" class="btn btn-primary py-2 px-3">See details</Link>
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