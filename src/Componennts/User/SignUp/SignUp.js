import React, { useRef } from 'react';
import './SignUp.css'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useToken from '../../../Hooks/useToken';
import Loading from '../../Shared Components/Loading/Loading';



const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating] = useUpdateProfile(auth);
      const [token] = useToken(user);

      if (loading || updating) {
        return <Loading></Loading>
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName: name });
       navigate('/home');
    }
    
    if(token){
        navigate('/home')
    }

    const navigateLogin = () => {
        navigate('/login')
    }
    return (
        <div className='mx-auto my-5'>
        <h2 className='text-black fw-bold text-center mb-3'>SIGN UP FIRST</h2>
      <Form className='form-design' onSubmit={handleSubmit}>
      <Form.Group className="mb-3 form-design-input" controlId="">
              <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" required />
          </Form.Group>

          <Form.Group className="mb-3 form-design-input" controlId="formBasicEmail">
              <Form.Control ref={emailRef} type="email" placeholder="Enter Ymail" required />
          </Form.Group>

          <Form.Group className="mb-3 form-design-input" controlId="formBasicPassword">
              <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
          </Form.Group>
          <Button className='w-50 mx-auto d-block text-white fw-bold' variant="dark" type="submit">
              Register
          </Button>
      </Form>
      <p className='text-center mt-2'>Already have an account? <Link to="/login" onClick={navigateLogin} className='text-success pe-auto text-decoration-none' >Please Login</Link> </p>
            
        </div>

    );
};

export default SignUp;