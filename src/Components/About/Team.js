import React from 'react';
import { Link } from "react-router-dom";
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
            <div class="section sec-testimonials bg-light">
		<div class="container">
			<div class="row mb-5 align-items-center">
				<div class="col-md-6">
					<h2 class="font-weight-bold heading text-primary mb-4 mb-md-0">The Team</h2>
				</div>
				<div class="col-md-6 text-md-end">
					<div id="testimonial-nav">
						<span class="prev" data-controls="prev">Prev</span>

						<span class="next" data-controls="next">Next</span>
					</div>
				</div>
			</div>


            <div>
        <Slider {...settings}>
         
        <div class="item">
						<div class="testimonial">
							<img src="assets/images/person_1-min.jpg" alt="Im/age" class="img-fluid rounded-circle w-25 mb-4"/>
							<h3 class="h5 text-primary">James Smith</h3>
							<p class="text-black-50">Designer, Co-founder</p>

							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

							<ul class="social list-unstyled list-inline dark-hover">
								<li class="list-inline-item"><Link to="#"><span class="icon-twitter"></span></Link></li>
								<li class="list-inline-item"><Link to="#"><span class="icon-facebook"></span></Link></li>
								<li class="list-inline-item"><Link to="#"><span class="icon-linkedin"></span></Link></li>
								<li class="list-inline-item"><Link to="#"><span class="icon-instagram"></span></Link></li>
							</ul>

						</div>
					</div>

					<div class="item">
						<div class="testimonial">
							<img src="assets/images/person_2-min.jpg" alt="Ima/ge" class="img-fluid rounded-circle w-25 mb-4"/>
							<h3 class="h5 text-primary">Carol Houston</h3>
							<p class="text-black-50">Designer, Co-founder</p>

							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

							<ul class="social list-unstyled list-inline dark-hover">
								<li class="list-inline-item"><Link to="#"><span class="icon-twitter"></span></Link></li>
								<li class="list-inline-item"><Link to="#"><span class="icon-facebook"></span></Link></li>
								<li class="list-inline-item"><Link to="#"><span class="icon-linkedin"></span></Link></li>
								<li class="list-inline-item"><Link to="#"><span class="icon-instagram"></span></Link></li>
							</ul>


						</div>
					</div>

					<div class="item">
						<div class="testimonial">
							<img src="assets/images/person_3-min.jpg" alt="I/mage" class="img-fluid rounded-circle w-25 mb-4"/>
							<h3 class="h5 text-primary">Synthia Cameron</h3>
							<p class="text-black-50">Designer, Co-founder</p>

							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

							<ul class="social list-unstyled list-inline dark-hover">
								<li class="list-inline-item"><Link to="#"><span class="icon-twitter"></span></Link></li>
								<li class="list-inline-item"><Link to="#"><span class="icon-facebook"></span></Link></li>
								<li class="list-inline-item"><Link to="#"><span class="icon-linkedin"></span></Link></li>
								<li class="list-inline-item"><Link to="#"><span class="icon-instagram"></span></Link></li>
							</ul>


						</div>
					</div>

					<div class="item">
						<div class="testimonial">
							<img src="assets/images/person_4-min.jpg" alt="Ima/ge" class="img-fluid rounded-circle w-25 mb-4"/>
							<h3 class="h5 text-primary">Davin Smith</h3>
							<p class="text-black-50">Designer, Co-founder</p>

							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

							<ul class="social list-unstyled list-inline dark-hover">
								<li class="list-inline-item"><Link to="#"><span class="icon-twitter"></span></Link></li>
								<li class="list-inline-item"><Link to="#"><span class="icon-facebook"></span></Link></li>
								<li class="list-inline-item"><Link to="#"><span class="icon-linkedin"></span></Link></li>
								<li class="list-inline-item"><Link to="#"><span class="icon-instagram"></span></Link></li>
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