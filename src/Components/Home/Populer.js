import React from 'react';
import { Link } from "react-router-dom";
import FeaturePro from '../Properties/FeaturePro';

const Populer = () => {
    return (
        <div className='mt-5'>
            <div className="container">
			<div className="row mb-5 align-items-center">
				<div className="col-lg-6">
					<h2 className="font-weight-bold text-primary heading">Popular Properties</h2>
				</div>
				<div className="col-lg-6 text-lg-end">
					<p><Link to="#" target="_blank" className="btn btn-primary text-white py-3 px-4">View all properties</Link></p>
				</div>
			</div>
            <FeaturePro></FeaturePro>
            </div>
        </div>
    );
};

export default Populer;