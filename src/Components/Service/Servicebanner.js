import React from 'react';

const Servicebanner = () => {
    return (
        <div>
            <div className="hero page-inner overlay" style={{backgroundImage: "url('assets/images/hero_bg_1.jpg')"}}>

<div className="container">
    <div className="row justify-content-center align-items-center">
        <div className="col-lg-9 text-center mt-5">
            <h1 className="heading">Services</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-center justify-content-center">
                    <li className="breadcrumb-item "><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active text-white-50" aria-current="page">Services</li>
                </ol>
            </nav>
        </div>
    </div>
</div>
</div>
        </div>
    );
};

export default Servicebanner;