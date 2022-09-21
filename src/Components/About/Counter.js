import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <div className='container'>
            <div class="row section-counter mt-5">
				<div class="col-6 col-sm-6 col-md-6 col-lg-3">
					<div class="counter-wrap mb-5 mb-lg-0">
						<span class="number"><span class="countup text-primary"><CountUp end={2917} /></span></span>
						<span class="caption text-black-50"># of Buy Properties</span>
					</div>
				</div>
				<div class="col-6 col-sm-6 col-md-6 col-lg-3">
					<div class="counter-wrap mb-5 mb-lg-0">
						<span class="number"><span class="countup text-primary"><CountUp end={3918} /></span></span>
						<span class="caption text-black-50"># of Sell Properties</span>
					</div>
				</div>
				<div class="col-6 col-sm-6 col-md-6 col-lg-3">
					<div class="counter-wrap mb-5 mb-lg-0">
						<span class="number"><span class="countup text-primary"><CountUp end={38928} /></span></span>
						<span class="caption text-black-50"># of All Properties</span>
					</div>
				</div>
				<div class="col-6 col-sm-6 col-md-6 col-lg-3">
					<div class="counter-wrap mb-5 mb-lg-0">
						<span class="number"><span class="countup text-primary"><CountUp end={1290} /></span></span>
						<span class="caption text-black-50"># of Agents</span>
					</div>
				</div>
			</div>
        </div>
    );
};

export default Counter;