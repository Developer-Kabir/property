import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="hero page-inner overlay" style={{backgroundImage: "url('assets/images/hero_bg_1.jpg')"}}>

<div className="container">
    <div className="row justify-content-center align-items-center">
        <div className="col-lg-9 text-center mt-5">
            <h1 className="heading">Contact Us</h1>

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-center justify-content-center">
                    <li className="breadcrumb-item "><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active text-white-50" aria-current="page">Contact</li>
                </ol>
            </nav>
        </div>
    </div>
</div>
</div>


<div className="section">
<div className="container">
    <div className="row">
        <div className="col-lg-4 mb-5 mb-lg-0" >
            <div className="contact-info">

                <div className="address mt-2">
                    <i className="icon-room"></i>
                    <h4 className="mb-2">Location:</h4>
                    <p>43 Raymouth Rd. New York,<br/> USA</p>
                </div>

                <div className="open-hours mt-4">
                    <i className="icon-clock-o"></i>
                    <h4 className="mb-2">Open Hours:</h4>
                    <p>
                        Sunday-Friday:<br/>
                        11:00 AM - 2300 PM
                    </p>
                </div>

                <div className="email mt-4">
                    <i className="icon-envelope"></i>
                    <h4 className="mb-2">Email:</h4>
                    <p>mail@MyProperty.com</p>
                    <p>info@MyProperty.com</p>
                </div>

                <div className="phone mt-4">
                    <i className="icon-phone"></i>
                    <h4 className="mb-2">Call:</h4>
                    <p>+1 1234 55488 55</p>
                </div>

            </div>
        </div>
        <div className="col-lg-8" >
            <form action="mailto:mail@myproperty.com">
                <div className="row">
                    <div className="col-6 mb-3">
                        <input type="text" className="form-control" placeholder="Your Name"/>
                    </div>
                    <div className="col-6 mb-3">
                        <input type="email" className="form-control" placeholder="Your Email"/>
                    </div>
                    <div className="col-12 mb-3">
                        <input type="text" className="form-control" placeholder="Subject"/>
                    </div>
                    <div className="col-12 mb-3">
                        <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                    </div>

                    <div className="col-12">
                        <input type="submit" value="Send Message" className="btn btn-primary"/>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
        </div>
    );
};

export default Contact;