import React from 'react';
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <div>
            <div class="site-mobile-menu site-navbar-target">
		<div class="site-mobile-menu-header">
			<div class="site-mobile-menu-close">
				<span class="icofont-close js-menu-toggle"></span>
			</div>
		</div>
		<div class="site-mobile-menu-body"></div>
	</div>

	<nav class="site-nav">
		<div class="container">
			<div class="menu-bg-wrap">
				<div class="site-navigation">
					<Link to="/" class="logo m-0 float-start">Property</Link>

					<ul class="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
						<li class="active"><Link to="/">Home</Link></li>
						<li class="has-children">
							<Link to="/property">Properties</Link>
							<ul class="dropdown">
								<li><Link to="#">Buy Property</Link></li>
								<li><Link to="#">Sell Property</Link></li>
								<li class="has-children">
									<Link to="#">Dropdown</Link>
									<ul class="dropdown">
										<li><Link to="#">Sub Menu One</Link></li>
										<li><Link to="#">Sub Menu Two</Link></li>
										<li><Link to="#">Sub Menu Three</Link></li>
									</ul>
								</li>
							</ul>
						</li>
						<li><Link to="/service">Services</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/contact">Contact Us</Link></li>
					</ul>

					<Link to="#" class="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none" data-toggle="collapse" data-target="#main-navbar">
						<span></span>
					</Link>

				</div>
			</div>
		</div>
	</nav>

	
        </div>
    );
};

export default Header;