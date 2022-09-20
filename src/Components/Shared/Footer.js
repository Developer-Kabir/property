import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div class="site-footer">
		<div class="container">
			
			<div class="row">
				<div class="col-lg-4">
					<div class="widget">
						<h3>Contact</h3>
						<address>43 Raymouth Rd. Baltemoer, London 3910</address>
						<ul class="list-unstyled links">
							<li><Link to="tel://11234567890">+1(123)-456-7890</Link></li>
							<li><Link to="tel://11234567890">+1(123)-456-7890</Link></li>
							<li><Link to="mailto:info@mydomain.com">info@mydomain.com</Link></li>
						</ul>
					</div> 
				</div> 
				<div class="col-lg-4">
					<div class="widget">
						<h3>Sources</h3>
						<ul class="list-unstyled float-start links">
							<li><Link to="/about">About us</Link></li>
							<li><Link to="/service">Services</Link></li>
							<li><Link to="#">Vision</Link></li>
							<li><Link to="#">Mission</Link></li>
							<li><Link to="#">Terms</Link></li>
							<li><Link to="#">Privacy</Link></li>
						</ul>
						<ul class="list-unstyled float-start links">
							<li><Link to="#">Partners</Link></li>
							<li><Link to="#">Business</Link></li>
							<li><Link to="#">Careers</Link></li>
							<li><Link to="#">Blog</Link></li>
							<li><Link to="#">FAQ</Link></li>
							<li><Link to="#">Creative</Link></li>
						</ul>
					</div> 
				</div>
				<div class="col-lg-4">
					<div class="widget">
						<h3>Links</h3>
						<ul class="list-unstyled links">
							<li><Link to="#">Our Vision</Link></li>
							<li><Link to="/about">About us</Link></li>
							<li><Link to="/contact">Contact us</Link></li>
						</ul>

						<ul class="list-unstyled social">
							<li className='pe-2'><Link to="#"><span class="icon-dribbble"></span></Link></li>
							<li className='pe-2'><Link to="#"><span class="icon-instagram"></span></Link></li>
							<li className='pe-2'><Link to="#"><span class="icon-twitter"></span></Link></li>
							<li className='pe-2'><Link to="#"><span class="icon-facebook"></span></Link></li>
							<li className='pe-2'><Link to="#"><span class="icon-linkedin"></span></Link></li>
							<li className='pe-2'><Link to="#"><span class="icon-pinterest"></span></Link></li>
						</ul>
					</div>
				</div> 
			</div> 

			<div class="row mt-5">
				<div class="col-12 text-center">
			
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