import React from 'react';
import './Menubar.css'
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Menubar = () => {

    const [user] = useAuthState(auth);

    return (
        <div className='menu'>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Nav.Link as={Link} className='fw-bold' to="/"> <h3><span className='text-danger fw-bold'>ElEgEnT</span> CaR <span className='text-danger fw-bold'>WaReHoUsE</span></h3> </Nav.Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 fw-bold"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="cars">Car</Nav.Link>
                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
                            
                        </Nav>
                        {
                            user?
                            <Nav
                            className="me-auto abcd my-lg-0 fw-bold"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                           >
                                 <Nav.Link as={Link} to="myitem">My Item</Nav.Link>
                                 <Nav.Link as={Link} to="manage">Manage Item</Nav.Link>
                                 <Nav.Link as={Link} to="additem">Add Item</Nav.Link>
                          </Nav>
                            :
                            <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                           
                          
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;