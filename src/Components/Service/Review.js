import React from 'react';
import Slider from "react-slick";

const Review = () => {

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


            <div className="section sec-testimonials">
                <div className="container">
                    <div className="row mb-5 align-items-center">
                        <div className="col-md-6">
                            <h2 className="font-weight-bold heading text-primary mb-4 mb-md-0">Customer Says</h2>
                        </div>
                      
                    </div>


                    <div>
                        <Slider {...settings}>

                            <div className="item px-3">
                                <div className="testimonial">
                                    <img src="assets/images/person_1-min.jpg" alt="Imag/e" className="img-fluid rounded-circle w-25 mb-4" />
                                    <div className="rate">
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                    </div>
                                    <h3 className="h5 text-primary mb-2">James Smith</h3>
                                    <h6 className="text-black-50">Designer, Facebook</h6>
                                    <blockquote>
                                        <p>A fantastic organisation! Great cutomer support from beginning to end of the process. I would recommend them unreservedly.</p>
                                    </blockquote>
                                  
                                </div>
                            </div>

                            <div className="item px-3">
                                <div className="testimonial">
                                    <img src="assets/images/person_2-min.jpg" alt="Imahge" className="img-fluid rounded-circle w-25 mb-4" />
                                    <div className="rate">
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                    </div>
                                    <h3 className="h5 text-primary mb-2">Mike Houston</h3>
                                    <h6 className="text-black-50">Director, Microsoft</h6>
                                    <blockquote>
                                        <p>Great customer service! The man I spoke with was very helpful in answering questions as well as helping in finding the best hotel for my wife and I.</p>
                                    </blockquote>
                                   
                                </div>
                            </div>

                            <div className="item px-3">
                                <div className="testimonial">
                                    <img src="assets/images/person_3-min.jpg" alt="Imag/e" className="img-fluid rounded-circle w-25 mb-4" />
                                    <div className="rate">
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                    </div>
                                    <h3 className="h5 text-primary mb-2">Cameron Webster</h3>
                                    <h6 className="text-black-50">Designer, Droit</h6>
                                    <blockquote>
                                        <p>Great service, efficient communication and a really easy way to get a mortgage with lots of help and support to get the right deal.</p>
                                    </blockquote>
                                  
                                </div>
                            </div>

                            <div className="item px-3">
                                <div className="testimonial">
                                    <img src="assets/images/person_4-min.jpg" alt="Ima/ge" className="img-fluid rounded-circle w-25 mb-4" />
                                    <div className="rate">
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                    </div>
                                    <h3 className="h5 text-primary mb-2">Dave Smith</h3>
                                    <h6 className="text-black-50">CEO, Amazon</h6>
                                    <blockquote>
                                        <p>If you only have blink minis in your home without the module, and have the app downloaded then there is no subscription .......</p>
                                    </blockquote>
                                  
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;