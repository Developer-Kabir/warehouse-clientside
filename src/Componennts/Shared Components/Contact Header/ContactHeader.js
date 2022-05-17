import React from 'react';
import './ContactHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const ContactHeader = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }


    return (
        <div className='abc'>
            <div className='contact-header'>
                <div className='t&m d-flex justify-content-between'>
                    <p><FontAwesomeIcon icon={faClock} /> 10:00 AM To 5:00 PM</p>
                    <p className='ms-3'><FontAwesomeIcon icon={faEnvelope} /> support@elegentcar.com</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p><FontAwesomeIcon icon={faPhone} /> +1 524 845254</p>
                    {
                        user ?
                            <Nav.Link as={Link} to="/" className='text-light login-btn' onClick={handleSignOut}>Sign Out</Nav.Link>
                            :
                            <div className='d-flex'>
                                <Nav.Link as={Link} to="/login" className='text-light login-btn'>
                                    <p>Login</p>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/signUp" className='text-light login-btn'><p>SignUp</p></Nav.Link>
                            </div>
                    }
                </div>



            </div>

        </div>

    );
};

export default ContactHeader;