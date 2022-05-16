import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const SingleCar = ({car}) => {
    const { name, price , Description, quantity, supplier, picture} = car;
    return (
        <div>
            <Card style={{ width: '25rem' }}>
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
            </Card>
        </div>
    );
};

export default SingleCar;