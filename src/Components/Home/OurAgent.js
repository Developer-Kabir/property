import React from 'react';
import { Link } from "react-router-dom";

const OurAgent = () => {
	

    return (
        <div>
            <div class="section section-5 bg-light">
		<div class="container">
			<div class="row justify-content-center  text-center mb-5">
				<div class="col-lg-6 mb-5">
					<h2 class="font-weight-bold heading text-primary mb-4">Our Agents</h2>
					<p class="text-black-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim pariatur similique debitis vel nisi qui reprehenderit totam? Quod maiores.</p>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
					<div class="h-100 person">

						<img src="assets/images/person_1-min.jpg" alt="Ima/ge"
						class="img-fluid"/>

						<div class="person-contents">
							<h2 class="mb-0"><Link to="#">James Doe</Link></h2>
							<span class="meta d-block mb-3">Real Estate Agent</span>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>

							<ul class="social list-unstyled list-inline dark-hover">
							<li class="list-inline-item"><a target="_blank" rel="noreferrer" href="https://twitter.com/"><span class="icon-twitter"></span></a></li>
								<li class="list-inline-item"><a target="_blank" rel="noreferrer" href="https://web.facebook.com/"><span class="icon-facebook"></span></a></li>
								<li class="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><span class="icon-linkedin"></span></a></li>
								<li class="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><span class="icon-instagram"></span></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
					<div class="h-100 person">

						<img src="assets/images/person_2-min.jpg" alt="Imahge"
						class="img-fluid"/>

						<div class="person-contents">
							<h2 class="mb-0"><Link to="#">Jean Smith</Link></h2>
							<span class="meta d-block mb-3">Real Estate Agent</span>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>

							<ul class="social list-unstyled list-inline dark-hover">
							<li class="list-inline-item"><a target="_blank" rel="noreferrer" href="https://twitter.com/"><span class="icon-twitter"></span></a></li>
								<li class="list-inline-item"><a target="_blank" rel="noreferrer" href="https://web.facebook.com/"><span class="icon-facebook"></span></a></li>
								<li class="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><span class="icon-linkedin"></span></a></li>
								<li class="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><span class="icon-instagram"></span></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
					<div class="h-100 person">

						<img src="assets/images/person_3-min.jpg" alt="Ihmage"
						class="img-fluid"/>

						<div class="person-contents">
							<h2 class="mb-0"><Link to="#">Alicia Huston</Link></h2>
							<span class="meta d-block mb-3">Real Estate Agent</span>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>

							<ul class="social list-unstyled list-inline dark-hover">
							<li class="list-inline-item"><a target="_blank" rel="noreferrer" href="https://twitter.com/"><span class="icon-twitter"></span></a></li>
								<li class="list-inline-item"><a target="_blank" rel="noreferrer" href="https://web.facebook.com/"><span class="icon-facebook"></span></a></li>
								<li class="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><span class="icon-linkedin"></span></a></li>
								<li class="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><span class="icon-instagram"></span></a></li>
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

export default OurAgent;