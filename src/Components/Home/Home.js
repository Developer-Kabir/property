import React from 'react';
import Counter from '../About/Counter';
import QualityProperties from '../About/QualityProperties';
import Review from '../Service/Review';
import Services from '../Service/Services';
import Bepart from './Bepart';
import FindsHome from './FindsHome';
import OurAgent from './OurAgent';
import Populer from './Populer';
import TopBanner from './TopBanner';


const Home = () => {
    return (
        <div>
          <TopBanner></TopBanner>
          <Populer></Populer>
          <Services></Services>
          <Review></Review>
          <FindsHome></FindsHome>
          <QualityProperties></QualityProperties>
          <Counter></Counter>
          <Bepart></Bepart>
          <OurAgent></OurAgent>
        </div>
    );
};

export default Home;