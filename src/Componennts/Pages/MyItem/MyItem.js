import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect} from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useCar from '../../../Hooks/useCar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const Mycars = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [cars, setCars] = useCar([]);
    const email = user.email;

    useEffect(() => {
        const url = `http://localhost:3000/mycars?email=${email}`;
        const getMycars = async () => {

            await axios.get(url)
                .then(response => {
                    setCars(response.data);
                })
            try {

                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getcars("accessToken")}`,
                    },
                })

                    .then(response => {
                        setCars(data);
                    })
            } catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate("/login");
                }
            }
        }
        getMycars();
    }, [user.email])

    const deleteFromMycars = async (id) => {

        const deleteMycars = window.confirm('Are you sure to delete this cars?');
        if (deleteMycars) {
            const url = `https://safe-everglades-50788.herokuapp.com/mycars/${id}`;

            await axios.delete(url)
                .then(response => {
                    if (response.data.deletedCount === 1) {
                        const restcars = cars.filter(cars => cars._id !== id);
                        setCars(restcars);
                        toast.success('Delete Successfully')
                    }
                })

        }

    }
    return (
        <div className='my-5'>
            <h1 className='text-warning text-center'>My cars</h1>
            <div className='col col-md-10 offset-md-1 my-5'>
                <Table striped bordered hover>

                    <thead>
                        <tr>
                            <th className='bg-danger text-light'>No of Car:</th>
                            <th className='bg-dark text-light'>Name of Car</th>
                            <th className='bg-danger text-light'>Price</th>
                            <th className='bg-dark text-light'>Quantity</th>
                            <th className='bg-danger text-light'>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            cars.map((cars, index) =>
                                <tr key={cars._id}>
                                    <td>{index + 1}</td>
                                    <td className='text-start'>{cars.name}</td>
                                    <td>$ {cars.price}</td>
                                    <td>{cars.quantity}</td>
                                    <td><button className='btn btn-light border-0' onClick={() => deleteFromMycars(cars._id)}><FontAwesomeIcon className='fw-bold text-danger display-6' icon={faTrash} /></button></td>
                                </tr>
                            )
                        }
                    </tbody>

                </Table>
            </div>

        </div >
    );
};

export default Mycars;