import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCar from '../../../Hooks/useCar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Manageitem = () => {
    const [cars, setCars] = useCar();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/car/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = cars.filter(item => item._id !== id);
                    setCars(remaining);
                })
        }
    }
    return (
        <div className='container my-5'>
            <h1 className='text-dark fw-bold text-center mb-3'>MANAGE CAR</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {
                    cars.map(item =>

                        <tbody >

                            <tr key={item._id}>
                                <th scope="row">{item.name}</th>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td onClick={() => handleDelete(cars._id)}><FontAwesomeIcon className='fw-bold text-danger display-6' icon={faTrash} /></td>
                            </tr>


                        </tbody>
                    )}

            </table>
            <Nav.Link className='border-1 bg-dark rounded-3 mx-auto w-50 text-center text-white fw-bold' as={Link} to="/addItem" >Add New Item</Nav.Link>

        </div>
    );
};

export default Manageitem;