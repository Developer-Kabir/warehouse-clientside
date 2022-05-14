import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import WhatYouCan from '../What you Can/WhatYouCan';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhatYouCan></WhatYouCan>
            <About></About>
        </div>
    );
};

export default Home;