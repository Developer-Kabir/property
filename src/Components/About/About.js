import React from 'react';
import AboutBanner from './AboutBanner';
import Counter from './Counter';
import Gellary from './Gellary';
import QualityProperties from './QualityProperties';
import QualityProperties2 from './QualityProperties2';
import Team from './Team';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <QualityProperties></QualityProperties>
            <QualityProperties2></QualityProperties2>
            <Gellary></Gellary>
            <Counter></Counter>
            <Team></Team>
        </div>
    );
};

export default About;