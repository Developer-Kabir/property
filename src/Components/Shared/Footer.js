import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<div className="site-footer">
				<div className="container">

					<div className="row">
						<div className="col-lg-4">
							<div className="widget">
								<h3>Contact</h3>
								<address>43 Raymouth Rd. Baltemoer, London 3910</address>
								<ul className="list-unstyled links">
									<li><Link to="tel://11234567890">+1(123)-456-7890</Link></li>
									<li><Link to="tel://11234567890">+1(123)-456-7890</Link></li>
									<li><Link to="mailto:info@mydomain.com">info@myproperty.com</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="widget">
								<h3>Sources</h3>
								<ul className="list-unstyled float-start links">
									<li><Link to="/">Home</Link></li>
									<li><Link to="/about">About us</Link></li>
									<li><Link to="/service">Services</Link></li>
								</ul>
								
							</div>
						</div>
						<div className="col-lg-4">
							<div className="widget">
								<h3>Links</h3>
								<ul className="list-unstyled links">
								<li><Link to="/property">Properties</Link></li>
									<li><Link to="/contact">Contact us</Link></li>
								</ul>

								<ul className="list-unstyled social">
									<li className='pe-2'><a target="_blank" rel="noreferrer" href="https://dribbble.com/"><span className="icon-dribbble"></span></a></li>
									<li className='pe-2'><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><span className="icon-instagram"></span></a></li>
									<li className='pe-2'><a target="_blank" rel="noreferrer" href="https://twitter.com/"><span className="icon-twitter"></span></a></li>
									<li className='pe-2'><a target="_blank" rel="noreferrer" href="https://web.facebook.com/"><span className="icon-facebook"></span></a></li>
									<li className='pe-2'><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><span className="icon-linkedin"></span></a></li>
									<li className='pe-2'><a target="_blank" rel="noreferrer" href="https://www.pinterest.com/"><span className="icon-pinterest"></span></a></li>
								</ul>
							</div>
						</div>
					</div>

					<div className="row mt-5">
						<div className="col-12 text-center">

							<p>Copyright &copy; All Rights Reserved &mdash; Designed & Developed by Developer Kabir
							</p>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;