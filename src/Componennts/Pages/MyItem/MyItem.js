import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const Myitems = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const email = user.email;

    useEffect(() => {
        const url = `http://localhost:3000/myitems?email=${email}`;
        const getMyitems = async () => {

            await axios.get(url)
                .then(response => {
                    setItems(response.data);
                })
            try {

                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getitems("accessToken")}`,
                    },
                })

                    .then(response => {
                        setItems(data);
                    })
            } catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate("/login");
                }
            }
        }
        getMyitems();
    }, [user.email])

    const deleteFromMyitems = async (id) => {

        const deleteMyitems = window.confirm('Are you sure to delete this items?');
        if (deleteMyitems) {
            const url = `https://safe-everglades-50788.herokuapp.com/myitems/${id}`;

            await axios.delete(url)
                .then(response => {
                    if (response.data.deletedCount === 1) {
                        const restitems = items.filter(items => items._id !== id);
                        setItems(restitems);
                        toast.success('Delete Successfully')
                    }
                })

        }

    }
    return (
        <div className='my-5'>
            <h1 className='text-dark fw-bold text-center'>MY ADDED CAR as PRODUCT</h1>
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
                            items.map((items, index) =>
                                <tr key={items._id}>
                                    <td>{index + 1}</td>
                                    <td className='text-start'>{items.name}</td>
                                    <td>$ {items.price}</td>
                                    <td>{items.quantity}</td>
                                    <td><button className='btn btn-light border-0' onClick={() => deleteFromMyitems(items._id)}><FontAwesomeIcon className='fw-bold text-danger display-6' icon={faTrash} /></button></td>
                                </tr>
                            )
                        }
                    </tbody>

                </Table>
            </div>

        </div >
    );
};

export default Myitems;