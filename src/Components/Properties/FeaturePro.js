import React from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";

const FeaturePro = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 5000,
        cssEase: "linear",
      responsive: [
        {
          breakpoint: 1007,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div>
            <div className="section">
<div className="container">

    <div>
        <Slider {...settings}>


<div className="property-item">

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

<div className="property-item">

    <Link to="/singleProperty" className="img">
        <img src="assets/images/img_2.jpg" alt="" className="img-fluid"/>
    </Link>

    <div className="property-content">
        <div className="price mb-2"><span>$1,391,000</span></div>
        <div>
            <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
            <span className="city d-block mb-3">New York, USA</span>

            <div className="specs d-flex mb-4">
                <span className="d-block d-flex align-items-center me-3">
                    <span className="icon-bed me-2"></span>
                    <span className="caption">4 beds</span>
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

<div className="property-item">

    <Link to="/singleProperty" className="img">
        <img src="assets/images/img_3.jpg" alt="" className="img-fluid"/>
    </Link>

    <div className="property-content">
        <div className="price mb-2"><span>$1,191,000</span></div>
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

<div className="property-item">

    <Link to="/singleProperty" className="img">
        <img src="assets/images/img_4.jpg" alt="" className="img-fluid"/>
    </Link>

    <div className="property-content">
        <div className="price mb-2"><span>$2,291,000</span></div>
        <div>
            <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
            <span className="city d-block mb-3">California, USA</span>

            <div className="specs d-flex mb-4">
                <span className="d-block d-flex align-items-center me-3">
                    <span className="icon-bed me-2"></span>
                    <span className="caption">5 beds</span>
                </span>
                <span className="d-block d-flex align-items-center">
                    <span className="icon-bath me-2"></span>
                    <span className="caption">3 baths</span>
                </span>
            </div>

            <Link to="/singleProperty" className="btn btn-primary py-2 px-3">See details</Link>
        </div>
    </div>
</div> 

<div className="property-item">

    <Link to="/singleProperty" className="img">
        <img src="assets/images/img_5.jpg" alt="" className="img-fluid"/>
    </Link>

    <div className="property-content">
        <div className="price mb-2"><span>$1,251,000</span></div>
        <div>
            <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
            <span className="city d-block mb-3">Texas, USA</span>

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

<div className="property-item">

    <Link to="/singleProperty" className="img">
        <img src="assets/images/img_6.jpg" alt="" className="img-fluid"/>
    </Link>

    <div className="property-content">
        <div className="price mb-2"><span>$5,291,000</span></div>
        <div>
            <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
            <span className="city d-block mb-3">New York, USA</span>

            <div className="specs d-flex mb-4">
                <span className="d-block d-flex align-items-center me-3">
                    <span className="icon-bed me-2"></span>
                    <span className="caption">5 beds</span>
                </span>
                <span className="d-block d-flex align-items-center">
                    <span className="icon-bath me-2"></span>
                    <span className="caption">3 baths</span>
                </span>
            </div>

            <Link to="/singleProperty" className="btn btn-primary py-2 px-3">See details</Link>
        </div>
    </div>
</div> 

<div className="property-item">

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

<div className="property-item">

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

 
        </Slider>
      </div>
      
</div>
</div>
        </div>
    );
};

export default FeaturePro;