import React from 'react';
import useCar from '../../../Hooks/useCar';
import SingleCar from '../SingleCar/SingleCar';
import './FeatureCar.css'

const FeatureCar = () => {

    const [cars] = useCar([]);
    const sliceCar = cars.slice(0,6);

    return (
        <div className='cars'>
            <p>Check out our recent cars</p>
            <h2>FEATURE CAR</h2>

            <div className='car-container'>
                {
                    sliceCar.map(car => <SingleCar
                        key={car._id}
                        car={car}
                    ></SingleCar>)
                }
            </div>

        </div>
    );
};

export default FeatureCar;