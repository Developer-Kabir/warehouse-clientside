import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BuySellCar from '../BuySellCar/BuySellCar';
import Cars from '../Cars/Cars';
import WhatYouCan from '../What you Can/WhatYouCan';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhatYouCan></WhatYouCan>
            <About></About>
            <Cars></Cars>
            <BuySellCar></BuySellCar>
        </div>
    );
};

export default Home;