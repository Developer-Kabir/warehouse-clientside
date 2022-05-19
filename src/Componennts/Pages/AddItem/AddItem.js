import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const handleItems = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const price = event.target.price.value;
        const picture = event.target.picture.value;
        const Description = event.target.Description.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const email = user?.email;

        const item = {
            name: name,
            price: price,
            picture: picture,
            Description,
            quantity,
            supplier: supplier,
            email
        }

        const url = 'https://salty-meadow-11371.herokuapp.com/car';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('The item has been added successfully!')
                }
            })
        event.target.reset();
    }
    return (
        <div className='my-2'>
            <h1 className='my-2 text-center text-warning'>Add New Item</h1>
            <div className='mx-auto mt-4'>
                <Form className='form-design' onSubmit={handleItems}>
                    <Form.Group className="mb-3 form-design-input" controlId="formBasicEmail">
                        <Form.Control type="name" name='name' placeholder="Car Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3 form-design-input" controlId="formBasicPassword">
                        <Form.Control type="number" name='price' placeholder="Car Price" required />
                    </Form.Group>
                    <Form.Group className="mb-3 form-design-input" controlId="formBasicPassword">
                        <Form.Control type="text" name='picture' placeholder="Image URl" required />
                    </Form.Group>
                    <Form.Group className="mb-3 form-design-input" controlId="formBasicPassword">
                        <Form.Control as="textarea" name='Description' row='4' placeholder="A short description of Car" required />
                    </Form.Group>
                    <Form.Group className="mb-3 form-design-input" controlId="formBasicPassword">
                        <Form.Control type="number" name='quantity' placeholder="Quantity" required />
                    </Form.Group>
                    <Form.Group className="mb-3 form-design-input" controlId="formBasicPassword">
                        <Form.Control type="text" name='supplier' placeholder="Supplier Name" required />
                    </Form.Group>
                    <Button className='mx-auto d-block' variant="dark" type="submit">
                        Add This Car
                    </Button>
                </Form>
            </div>
        </div>



    );
};
export default AddItem;