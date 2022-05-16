import React from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faForward } from '@fortawesome/free-solid-svg-icons'


const Contact = () => {
    return (
        <div>
            <div className='contact-area'>
                <div className='contact-location'>
                    <p>We provide everything you need to build an amazing dealership website developed especially for car sellers dealers or auto motor retailers.</p>
                    <p><FontAwesomeIcon icon={faLocation} /> 220E Front St. Burlington NC 27215</p>
                    <p><FontAwesomeIcon icon={faPhone} /> +1 652 455556</p>
                    <p><FontAwesomeIcon icon={faMailBulk} /> support@elegentcar.com</p>
                </div>
                <div className='link-contact'>
                    <h4>USEFUL LINKS</h4>
                    <hr />
                    <Nav.Link as={Link} to="/blog" className='text-light login-btn'>
                        <p><FontAwesomeIcon icon={faForward} /> Blog</p>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about" className='text-light login-btn'>
                        <p><FontAwesomeIcon icon={faForward} /> About</p>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/car" className='text-light login-btn'>
                        <p><FontAwesomeIcon icon={faForward} /> Our All Car</p>
                    </Nav.Link>
                </div>
                <div className='newslatter'>
                    <h4>Subscribe Our Newslatter</h4>
                    <p>Keep up on our always evolving products features and technology. Enter your e-mail and subscribe to our newsletter.</p>
                    <input className='contact-input' placeholder='Input Your Mail' type="email" name="" id="" />
                    <br />
                    <br />
                    <Button variant="light">Subscribe</Button>
                </div>
            </div>
        </div>
    );
};

export default Contact;