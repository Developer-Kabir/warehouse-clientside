import React from 'react';
import { Button } from 'react-bootstrap';
import './BuySellCar.css'

const BuySellCar = () => {
    return (
        <div className='buySell'>
            <div className='buyCar'>
                <div>
                    <img src="https://i.ibb.co/3WRW1Mp/pexels-anna-shvets-5325105-removebg-preview.png" alt="" />
                </div>
                <div className='desc'>
                    <h3>ARE YOU LOOKING FOR A CAR?</h3>
                    <p>Search your car in our Inventory and request a quote on the vehicle of your choosing.</p>
                    <Button variant="danger">Search</Button>
                </div>
            </div>
            <div className='SellCar'>
                <div className='desc'>
                    <h3>DO YOU WANT TO SELL YOUR CAR ?</h3>
                    <p>The vehicle of your choosing search your car in our Inventory and request a quote on.</p>
                    <Button variant="light">Contact</Button>
                </div>
                <div>
                    <img src="https://i.ibb.co/JHrSdbb/man.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BuySellCar;