import React from 'react';
import Slider from "react-slick";

const SingleProperty = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
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
            <div className="hero page-inner overlay" style={{backgroundImage: "url('assets/images/hero_bg_3.jpg')"}}>

<div className="container">
    <div className="row justify-content-center align-items-center">
        <div className="col-lg-9 text-center mt-5">
            <h1 className="heading">5232 California AVE. 21BC</h1>

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-center justify-content-center">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item "><a href="properties.html">Properties</a></li>
                    <li className="breadcrumb-item active text-white-50" aria-current="page">5232 California AVE. 21BC</li>
                </ol>
            </nav>


        </div>
    </div>


</div>
</div>


<div className="section">
<div className="container">
    <div className="row justify-content-between">
        <div className="col-lg-7">
            <div className="img-property-slide-wrap">
                <div className="img-property-slide">
                <Slider {...settings}>
                    <img src="assets/images/img_1.jpg" alt="Imagge" className="img-fluid"/>
                    <img src="assets/images/img_2.jpg" alt="Imagge" className="img-fluid"/>
                    <img src="assets/images/img_3.jpg" alt="Imaxge" className="img-fluid"/>
                    <img src="assets/images/img_4.jpg" alt="Imaxge" className="img-fluid"/>
                    <img src="assets/images/img_5.jpg" alt="Imaxge" className="img-fluid"/>
                    <img src="assets/images/img_6.jpg" alt="Imaxge" className="img-fluid"/>
                    <img src="assets/images/img_7.jpg" alt="Imaxge" className="img-fluid"/>
                    </Slider>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <h2 className="heading text-primary">5232 California Ave. 21BC</h2>
            <p className="meta">California, United States</p>
            <p className="text-black-50">Property is a system of rights that gives people legal control of valuable things,[1] and also refers to the valuable things themselves. Depending on the nature of the property, an owner of property may have the right to consume, alter, share, redefine, rent, mortgage, pawn, sell, exchange, transfer, give away or destroy it, or to exclude others from doing these things,[2] as well as to perhaps abandon it; whereas regardless of the nature of the property, the owner thereof has the right to properly use it under the granted property rights.</p>
            
            <div className="d-block agent-box p-5">
                <div className="img mb-4">
                    <img src="assets/images/person_2-min.jpg" alt="Imxage" className="img-fluid"/>
                </div>
                <div className="text">
                    <h3 className="mb-0">Alicia Huston</h3>
                    <div className="meta mb-3">Real Estate Agent</div>
                    <p>Searching for the perfect place to live on? Well, look no further, as bdHousing is here with everything you have been looking for with the largest real estate marketing portal</p>
                    <ul className="list-unstyled social dark-hover d-flex">
                    <li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://twitter.com/"><span className="icon-twitter"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://web.facebook.com/"><span className="icon-facebook"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><span className="icon-linkedin"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><span className="icon-instagram"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
        </div>
    );
};

export default SingleProperty;