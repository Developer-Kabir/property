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
            <div class="hero page-inner overlay" style={{backgroundImage: "url('assets/images/hero_bg_3.jpg')"}}>

<div class="container">
    <div class="row justify-content-center align-items-center">
        <div class="col-lg-9 text-center mt-5">
            <h1 class="heading" data-aos="fade-up">5232 California AVE. 21BC</h1>

            <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="200">
                <ol class="breadcrumb text-center justify-content-center">
                    <li class="breadcrumb-item "><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item "><a href="properties.html">Properties</a></li>
                    <li class="breadcrumb-item active text-white-50" aria-current="page">5232 California AVE. 21BC</li>
                </ol>
            </nav>


        </div>
    </div>


</div>
</div>


<div class="section">
<div class="container">
    <div class="row justify-content-between">
        <div class="col-lg-7">
            <div class="img-property-slide-wrap">
                <div class="img-property-slide">
                <Slider {...settings}>
                    <img src="assets/images/img_1.jpg" alt="Imagge" class="img-fluid"/>
                    <img src="assets/images/img_2.jpg" alt="Imagge" class="img-fluid"/>
                    <img src="assets/images/img_3.jpg" alt="Imaxge" class="img-fluid"/>
                    <img src="assets/images/img_4.jpg" alt="Imaxge" class="img-fluid"/>
                    <img src="assets/images/img_5.jpg" alt="Imaxge" class="img-fluid"/>
                    <img src="assets/images/img_6.jpg" alt="Imaxge" class="img-fluid"/>
                    <img src="assets/images/img_7.jpg" alt="Imaxge" class="img-fluid"/>
                    </Slider>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <h2 class="heading text-primary">5232 California Ave. 21BC</h2>
            <p class="meta">California, United States</p>
            <p class="text-black-50">Property is a system of rights that gives people legal control of valuable things,[1] and also refers to the valuable things themselves. Depending on the nature of the property, an owner of property may have the right to consume, alter, share, redefine, rent, mortgage, pawn, sell, exchange, transfer, give away or destroy it, or to exclude others from doing these things,[2] as well as to perhaps abandon it; whereas regardless of the nature of the property, the owner thereof has the right to properly use it under the granted property rights.</p>
            
            <div class="d-block agent-box p-5">
                <div class="img mb-4">
                    <img src="assets/images/person_2-min.jpg" alt="Imxage" class="img-fluid"/>
                </div>
                <div class="text">
                    <h3 class="mb-0">Alicia Huston</h3>
                    <div class="meta mb-3">Real Estate Agent</div>
                    <p>Searching for the perfect place to live on? Well, look no further, as bdHousing is here with everything you have been looking for with the largest real estate marketing portal</p>
                    <ul class="list-unstyled social dark-hover d-flex">
                        <li class="me-1"><a href="#"><span class="icon-instagram"></span></a></li>
                        <li class="me-1"><a href="#"><span class="icon-twitter"></span></a></li>
                        <li class="me-1"><a href="#"><span class="icon-facebook"></span></a></li>
                        <li class="me-1"><a href="#"><span class="icon-linkedin"></span></a></li>

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