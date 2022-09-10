import React from 'react';
import Review from './Review';
import Servicebanner from './Servicebanner';
import Services from './Services';

const Service = () => {
    return (
        <div>
            <Servicebanner></Servicebanner>
            <Services></Services>
            <Review></Review>
        </div>
    );
};

export default Service;