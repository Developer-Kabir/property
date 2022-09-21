import React from 'react';

const AboutBanner = () => {
    return (
        <div>
            <div class="hero page-inner overlay" style={{ backgroundImage: "url('assets/images/hero_bg_3.jpg')" }}>

                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-lg-9 text-center mt-5">
                            <h1 class="heading">About</h1>

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb text-center justify-content-center">
                                    <li class="breadcrumb-item "><a href="index.html">Home</a></li>
                                    <li class="breadcrumb-item active text-white-50" aria-current="page">About</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>


            <div class="section">
                <div class="container">
                    <div class="row text-left mb-5">
                        <div class="col-12">
                            <h2 class="font-weight-bold heading text-primary mb-4">About Us</h2>
                        </div>
                        <div class="col-lg-6">
                            <p class="text-black-50">For over 17 years, bdHousing.com has been stand-still in the predominant position for providing a conventional and well-accepted stage for property owners, in order to foster their assets for rent, sell and allow property seekers to find their treasured home. Due to that, we are currently acknowledged as the largest online property selling site in Bangladesh
                                bdHousing.com facilitates people to find their land, deal home or commercial space in the online marketplace. We aim to assist our respected clients with the most realistic information in the marketing available right and allow them to contact the agents, developers, and the landlords as simply as possible. As the largest ready flat buy sale portal in Bangladesh, we have developed our system in a way that our system will give you much information about your desired property anytime.</p>
                        </div>
                        <div class="col-lg-6">

                            <p class="text-black-50">Whether you’ve been tired of all the existing ready flat buy sale portal, or in quest of flat for sale in Bangladesh, let the most noted online property selling site in Bangladesh, recommended by experts and developers, help you. We provide a huge collection of properties for home seekers from agents to individuals and other third parties. Our team of dedicated experts works relentlessly to increase the level of our service to facilitate you with an increased number of available properties across any divisional cities and across whole Bangladesh. When you are in search for ready flat buy sale portal, bdHousing can help you with everything you need.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AboutBanner;