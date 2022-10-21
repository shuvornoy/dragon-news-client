import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook, FaTwitch, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BaendCurosel from '../BaendCurosel/BaendCurosel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
    const {providerLogin} = useContext(AuthContext);
    const GoogleProvider = new GoogleAuthProvider()
    const handelGoogleSingIn = () =>{
        providerLogin(GoogleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handelGoogleSingIn} className='mb-3' variant="outline-primary"><FcGoogle></FcGoogle> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaLinkedin /> Linkedin</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BaendCurosel />
            </div>
        </div>
    );
};

export default RightSideNav;