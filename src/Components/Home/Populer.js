import React from 'react';
import { Link } from "react-router-dom";
import FeaturePro from '../Properties/FeaturePro';

const Populer = () => {
    return (
        <div className='mt-5'>
            <div class="container">
			<div class="row mb-5 align-items-center">
				<div class="col-lg-6">
					<h2 class="font-weight-bold text-primary heading">Popular Properties</h2>
				</div>
				<div class="col-lg-6 text-lg-end">
					<p><Link to="#" target="_blank" class="btn btn-primary text-white py-3 px-4">View all properties</Link></p>
				</div>
			</div>
            <FeaturePro></FeaturePro>
            </div>
        </div>
    );
};

export default Populer;