import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import useToken from '../../../Hooks/useToken';
import Loading from '../../Shared Components/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
const axios = require('axios');

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorMessage;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user);

    if (loading || sending) {
        return <Loading></Loading>
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('https://salty-meadow-11371.herokuapp.com/login', {email});
        console.log(data);

    }

    if (error) {
        errorMessage = <p className='text-dark'>Error: {error.message}</p>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    const navigateSignUp = event => {
        navigate('/register')
    }
    return (
        <div className='mx-auto mt-5'>
            <h2 className='text-dark fw-bold text-center mb-4'>PLEASE LOGIN</h2>
            <Form className='form-design' onSubmit={handleSubmit}>
    
                <Form.Group className='form-design-input mb-3' controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className='form-design-input mb-3' controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='mb-3 w-50 mx-auto text-white fw-bold d-block' variant="dark" type="submit">
                    Login
                </Button>
            </Form>
            {errorMessage}
            <p className='text-center'>New to this site? <Link to="/signUp" onClick={navigateSignUp} className='text-success pe-auto text-decoration-none' >Please Register</Link> </p>
            <p className='text-center'>Forget Password?<button className='btn btn-link text-warning pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;