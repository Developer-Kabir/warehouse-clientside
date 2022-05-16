import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BuySellCar from '../BuySellCar/BuySellCar';
import Clients from '../Clients/Clients';
import Contact from '../Contact/Contact';
import FeatureCar from '../FeatureCar/FeatureCar';
import WhatYouCan from '../What you Can/WhatYouCan';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhatYouCan></WhatYouCan>
            <About></About>
            <FeatureCar></FeatureCar>
            <BuySellCar></BuySellCar>
            <Clients></Clients>
            <Contact></Contact>
        </div>
    );
};

export default Home;