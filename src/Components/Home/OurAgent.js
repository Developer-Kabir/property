import React from 'react';
import { Link } from "react-router-dom";

const OurAgent = () => {
	

    return (
        <div>
            <div className="section section-5 bg-light">
		<div className="container">
			<div className="row justify-content-center  text-center mb-5">
				<div className="col-lg-6 mb-5">
					<h2 className="font-weight-bold heading text-primary mb-4">Our Agents</h2>
					<p className="text-black-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim pariatur similique debitis vel nisi qui reprehenderit totam? Quod maiores.</p>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
					<div className="h-100 person">

						<img src="assets/images/person_1-min.jpg" alt="Ima/ge"
						className="img-fluid"/>

						<div className="person-contents">
							<h2 className="mb-0"><Link to="#">James Doe</Link></h2>
							<span className="meta d-block mb-3">Real Estate Agent</span>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>

							<ul className="social list-unstyled list-inline dark-hover">
							<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://twitter.com/"><span className="icon-twitter"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://web.facebook.com/"><span className="icon-facebook"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><span className="icon-linkedin"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><span className="icon-instagram"></span></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
					<div className="h-100 person">

						<img src="assets/images/person_2-min.jpg" alt="Imahge"
						className="img-fluid"/>

						<div className="person-contents">
							<h2 className="mb-0"><Link to="#">Jean Smith</Link></h2>
							<span className="meta d-block mb-3">Real Estate Agent</span>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>

							<ul className="social list-unstyled list-inline dark-hover">
							<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://twitter.com/"><span className="icon-twitter"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://web.facebook.com/"><span className="icon-facebook"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><span className="icon-linkedin"></span></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><span className="icon-instagram"></span></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
					<div className="h-100 person">

						<img src="assets/images/person_3-min.jpg" alt="Ihmage"
						className="img-fluid"/>

						<div className="person-contents">
							<h2 className="mb-0"><Link to="#">Alicia Huston</Link></h2>
							<span className="meta d-block mb-3">Real Estate Agent</span>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>

							<ul className="social list-unstyled list-inline dark-hover">
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

export default OurAgent;