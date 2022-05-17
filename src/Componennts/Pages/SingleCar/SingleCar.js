import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SingleCar.css'

const SingleCar = ({car}) => {
    const { _id, name, price , Description, quantity, supplier, picture} = car;
    const navigate = useNavigate();

    const navigateToCarDetail = id =>{
        navigate(`car/${id}`);
    }

    return (
        <div>
            <Card className='car-card'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {Description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Price : {price} </ListGroupItem>
                    <ListGroupItem>Quantity : {quantity} </ListGroupItem>
                    <ListGroupItem>Supplier : {supplier} </ListGroupItem>
                </ListGroup>
                <Button onClick={()=> navigateToCarDetail(_id)} variant='dark'>Update Stock</Button>
            </Card>
        </div>
    );
};

export default SingleCar;