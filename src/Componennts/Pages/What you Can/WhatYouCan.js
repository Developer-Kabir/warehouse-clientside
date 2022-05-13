import React from 'react';
import './WhatYouCan.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'

const WhatYouCan = () => {
    return (
        <div>
            <div className='Youcan'>
                <div className='text-center canCard'>
                    <p className='canIcon'><FontAwesomeIcon icon={faPhone} /></p>
                    <p>CONTACT US</p>
                </div>
                <div className='text-center canCard'>
                    <p className='canIcon'><FontAwesomeIcon icon={faCar} /></p>
                    <p>NEW VEHICLE</p>
                </div>
                <div className='text-center canCard'>
                    <p className='canIcon'><FontAwesomeIcon icon={faDollar} /></p>
                    <p>APPLY FINANCE</p>
                </div>
                <div className='text-center canCard'>
                    <p className='canIcon'><FontAwesomeIcon icon={faTools} /></p>
                    <p>VEHICLE PARTS</p>
                </div>
                <div className='text-center canCard'>
                    <p className='canIcon'><FontAwesomeIcon icon={faForward} /></p>
                    <p>SPECIAL OFFER</p>
                </div>
                <div className='text-center canCard'>
                    <p className='canIcon'><FontAwesomeIcon icon={faTruck} /></p>
                    <p>VEHICLE SERVICE</p>
                </div>
            </div>
        </div>
    );
};

export default WhatYouCan;