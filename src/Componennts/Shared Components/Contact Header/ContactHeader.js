import React from 'react';
import './ContactHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ContactHeader = () => {
    return (
        <div className='abc'>
            <div className='contact-header d-flex justify-content-between'>
                <div className='t&m d-flex justify-content-between'>
                    <p><FontAwesomeIcon icon={faClock} /> 10:00 AM To 5:00 PM</p>
                    <p className='ms-3'><FontAwesomeIcon icon={faEnvelope} /> support@elegentcar.com</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p><FontAwesomeIcon icon={faPhone} /> +1 524 845254</p>
                    <Nav.Link as={Link} to="/login" className='text-light login-btn'>
                        <p><FontAwesomeIcon icon={faLock} className='me-1' />Login</p>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/signUp" className='text-light login-btn'>
                        <p>SignUp</p>
                    </Nav.Link>
                </div>

            </div>

        </div>

    );
};

export default ContactHeader;