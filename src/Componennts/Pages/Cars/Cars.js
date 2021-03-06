import useCar from '../../../Hooks/useCar';
import SingleCar from '../SingleCar/SingleCar';
import './Cars.css'

const Cars = () => {
const [cars] = useCar([]);


    return (
        <div>
            <div className='car-container'>
                {
                    cars.map(car => <SingleCar
                        key={car._id}
                        car={car}
                    ></SingleCar>)
                }
            </div>
        </div>
    );
};

export default Cars;