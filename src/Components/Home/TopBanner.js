import React from 'react';
import { Carousel } from 'react-bootstrap';

const TopBanner = () => {
    return (
        <div>
             <div class="hero">


<div class="hero-slide">

<Carousel>
<Carousel.Item>
<div class="img overlay" style={{backgroundImage: "url('assets/images/hero_bg_3.jpg')"}}></div>
</Carousel.Item>
<Carousel.Item>
<div class="img overlay" style={{backgroundImage: "url('assets/images/hero_bg_2.jpg')"}}></div>
</Carousel.Item>
<Carousel.Item>
<div class="img overlay" style={{backgroundImage: "url('assets/images/hero_bg_1.jpg')"}}></div>

</Carousel.Item>
</Carousel>
  
</div>

<div class="container">
    <div class="row justify-content-center align-items-center">
        <div class="col-lg-9 text-center">
            <h1 class="heading">Easiest way to find your dream home</h1>
            <form action="#" class="narrow-w form-search d-flex align-items-stretch mb-3">
                <input type="text" class="form-control px-4" placeholder="Your ZIP code or City. e.g. New York"/>
                <button type="submit" class="btn btn-primary">Search</button>
            </form>
        </div>
    </div>
</div>
</div> 
        </div>
    );
};

export default TopBanner;