import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState();
    const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handelSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then( result =>{
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            handelUpdateUserProfile(name, photoURL);
            handelEmailVerify();
            toast.success('please your email verify')
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })

    }

    const handelAccept = e =>{
        setAccepted(e.target.checked)
    }

    const handelUpdateUserProfile = (name, photoURL) =>{
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
        .then( () =>{})
        .catch(error => console.error(error))
    }

    const handelEmailVerify = () =>{
        verifyEmail()
        .then(() => {})
        .catch(error => console.error(error))
    }
    return (
        <div>
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Your Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email"  required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    type="checkbox" 
                    onClick={handelAccept}
                    label={<>Accept <Link to='/terms'>Terms and Condition</Link></>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register Now
                </Button>
                <Form.Text className="text-danger">
                    {error}
                    </Form.Text>
            </Form>
        </div>
    );
};

export default Register;