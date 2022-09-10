import React from 'react';
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div>
            <div class="section bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-6 col-lg-3">
                            <div class="box-feature mb-4">
                                <span class="flaticon-house mb-4 d-block"></span>
                                <h3 class="text-black mb-3 font-weight-bold">Quality Properties</h3>
                                <p class="text-black-50">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><Link to="#" class="learn-more">Read more</Link></p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="box-feature mb-4">
                                <span class="flaticon-house-2 mb-4 d-block-3"></span>
                                <h3 class="text-black mb-3 font-weight-bold">Top Rated Agent</h3>
                                <p class="text-black-50">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><Link to="#" class="learn-more">Read more</Link></p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="box-feature mb-4">
                                <span class="flaticon-building mb-4 d-block"></span>
                                <h3 class="text-black mb-3 font-weight-bold">Property for Sale</h3>
                                <p class="text-black-50">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><Link to="#" class="learn-more">Read more</Link></p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="box-feature mb-4">
                                <span class="flaticon-house-3 mb-4 d-block-1"></span>
                                <h3 class="text-black mb-3 font-weight-bold">House for Sale</h3>
                                <p class="text-black-50">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><Link to="#" class="learn-more">Read more</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;