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
            <div class="section">
<div class="container">

    <div>
        <Slider {...settings}>


<div class="property-item">

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

<div class="property-item">

    <Link to="/singleProperty" class="img">
        <img src="assets/images/img_2.jpg" alt="" class="img-fluid"/>
    </Link>

    <div class="property-content">
        <div class="price mb-2"><span>$1,391,000</span></div>
        <div>
            <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
            <span class="city d-block mb-3">New York, USA</span>

            <div class="specs d-flex mb-4">
                <span class="d-block d-flex align-items-center me-3">
                    <span class="icon-bed me-2"></span>
                    <span class="caption">4 beds</span>
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

<div class="property-item">

    <Link to="/singleProperty" class="img">
        <img src="assets/images/img_3.jpg" alt="" class="img-fluid"/>
    </Link>

    <div class="property-content">
        <div class="price mb-2"><span>$1,191,000</span></div>
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

<div class="property-item">

    <Link to="/singleProperty" class="img">
        <img src="assets/images/img_4.jpg" alt="" class="img-fluid"/>
    </Link>

    <div class="property-content">
        <div class="price mb-2"><span>$2,291,000</span></div>
        <div>
            <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
            <span class="city d-block mb-3">California, USA</span>

            <div class="specs d-flex mb-4">
                <span class="d-block d-flex align-items-center me-3">
                    <span class="icon-bed me-2"></span>
                    <span class="caption">5 beds</span>
                </span>
                <span class="d-block d-flex align-items-center">
                    <span class="icon-bath me-2"></span>
                    <span class="caption">3 baths</span>
                </span>
            </div>

            <Link to="/singleProperty" class="btn btn-primary py-2 px-3">See details</Link>
        </div>
    </div>
</div> 

<div class="property-item">

    <Link to="/singleProperty" class="img">
        <img src="assets/images/img_5.jpg" alt="" class="img-fluid"/>
    </Link>

    <div class="property-content">
        <div class="price mb-2"><span>$1,251,000</span></div>
        <div>
            <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
            <span class="city d-block mb-3">Texas, USA</span>

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

<div class="property-item">

    <Link to="/singleProperty" class="img">
        <img src="assets/images/img_6.jpg" alt="" class="img-fluid"/>
    </Link>

    <div class="property-content">
        <div class="price mb-2"><span>$5,291,000</span></div>
        <div>
            <span class="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
            <span class="city d-block mb-3">New York, USA</span>

            <div class="specs d-flex mb-4">
                <span class="d-block d-flex align-items-center me-3">
                    <span class="icon-bed me-2"></span>
                    <span class="caption">5 beds</span>
                </span>
                <span class="d-block d-flex align-items-center">
                    <span class="icon-bath me-2"></span>
                    <span class="caption">3 baths</span>
                </span>
            </div>

            <Link to="/singleProperty" class="btn btn-primary py-2 px-3">See details</Link>
        </div>
    </div>
</div> 

<div class="property-item">

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

<div class="property-item">

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

 
        </Slider>
      </div>
      
</div>
</div>
        </div>
    );
};

export default FeaturePro;