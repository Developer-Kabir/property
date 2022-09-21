import React from 'react';
import { Carousel } from 'react-bootstrap';

const TopBanner = () => {
    return (
        <div>
             <div className="hero">


<div className="hero-slide">

<Carousel>
<Carousel.Item>
<div className="img overlay" style={{backgroundImage: "url('assets/images/hero_bg_3.jpg')"}}></div>
</Carousel.Item>
<Carousel.Item>
<div className="img overlay" style={{backgroundImage: "url('assets/images/hero_bg_2.jpg')"}}></div>
</Carousel.Item>
<Carousel.Item>
<div className="img overlay" style={{backgroundImage: "url('assets/images/hero_bg_1.jpg')"}}></div>

</Carousel.Item>
</Carousel>
  
</div>

<div className="container">
    <div className="row justify-content-center align-items-center">
        <div className="col-lg-9 text-center">
            <h1 className="heading">Easiest way to find your dream home</h1>
            <form action="#" className="narrow-w form-search d-flex align-items-stretch mb-3">
                <input type="text" className="form-control px-4" placeholder="Your ZIP code or City. e.g. New York"/>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        </div>
    </div>
</div>
</div> 
        </div>
    );
};

export default TopBanner;