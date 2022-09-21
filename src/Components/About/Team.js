import React from 'react';
import Slider from "react-slick";

const Team = () => {

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
            <div className="section sec-testimonials bg-light">
		<div className="container">
			<div className="row mb-5 align-items-center">
				<div className="col-md-6">
					<h2 className="font-weight-bold heading text-primary mb-4 mb-md-0">The Team</h2>
				</div>
			</div>


            <div>
        <Slider {...settings}>
         
        <div className="item px-3">
						<div className="testimonial">
							<img src="assets/images/person_1-min.jpg" alt="Im/age" className="img-fluid rounded-circle w-25 mb-4"/>
							<h3 className="h5 text-primary">James Smith</h3>
							<p className="text-black-50">Chairman</p>


							<ul className="social list-unstyled list-inline dark-hover">
							<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://twitter.com/"><span className="icon-twitter"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://web.facebook.com/"><span className="icon-facebook"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><span className="icon-linkedin"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><span className="icon-instagram"></span></a></li>
							</ul>

						</div>
					</div>

					<div className="item px-3 ">
						<div className="testimonial">
							<img src="assets/images/person_2-min.jpg" alt="Ima/ge" className="img-fluid rounded-circle w-25 mb-4"/>
							<h3 className="h5 text-primary">Carol Houston</h3>
							<p className="text-black-50">Managing Director</p>

						

							<ul className="social list-unstyled list-inline dark-hover">
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://twitter.com/"><span className="icon-twitter"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://web.facebook.com/"><span className="icon-facebook"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><span className="icon-linkedin"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><span className="icon-instagram"></span></a></li>
							</ul>


						</div>
					</div>

					<div className="item px-3">
						<div className="testimonial">
							<img src="assets/images/person_3-min.jpg" alt="I/mage" className="img-fluid rounded-circle w-25 mb-4"/>
							<h3 className="h5 text-primary">Synthia Cameron</h3>
							<p className="text-black-50">Head of Design</p>

							

							<ul className="social list-unstyled list-inline dark-hover">
							<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://twitter.com/"><span className="icon-twitter"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://web.facebook.com/"><span className="icon-facebook"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><span className="icon-linkedin"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><span className="icon-instagram"></span></a></li>
							</ul>


						</div>
					</div>

					<div className="item px-3">
						<div className="testimonial">
							<img src="assets/images/person_4-min.jpg" alt="Ima/ge" className="img-fluid rounded-circle w-25 mb-4"/>
							<h3 className="h5 text-primary">Davin Smith</h3>
							<p className="text-black-50">Head Of marketing</p>


							<ul className="social list-unstyled list-inline dark-hover">
							<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://twitter.com/"><span className="icon-twitter"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://web.facebook.com/"><span className="icon-facebook"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><span className="icon-linkedin"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><span className="icon-instagram"></span></a></li>
							</ul>


						</div>
					</div>
        </Slider>
      </div>



		</div>
	</div>

        </div>
    );
};

export default Team;