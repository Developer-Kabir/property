import React from 'react';
import { Link } from "react-router-dom";

const Bepart = () => {
    return (
        <div className='container mt-5'>
            <div className="row justify-content-center footer-cta">
			<div className="col-lg-7 mx-auto text-center">
				<h2 className="mb-4 ">Be a part of our growing real state agents</h2>
				<p><Link to="#" target="_blank" className="btn btn-primary text-white py-3 px-4">Apply for Real Estate agent</Link></p>
			</div> 
		</div>
        </div>
    );
};

export default Bepart;