import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../static/photos/404.png';
import { Image } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Misc = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to '/' after 5 seconds
        const timeout = setTimeout(() => {
            navigate('/');
        }, 5000);

        // Clear the timeout if the component is unmounted
        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <div className='text-center'>
            <Image 
                src={Avatar} 
                alt="404 Image" 
                className='m-2' 
                roundedCircle 
                fluid 
                style={{ 
                    width: '100%', 
                    maxWidth: '300px', 
                    height: '350px', 
                    borderRadius: '10px', 
                    alignContent: 'center' 
                }}  
            /> 
            <h2 className='m-1'>You have a lot of curiosity. You don't have permission yet to access this page.</h2>
            <h3>Play around some more!</h3>
            <div className='m-5'>
                <p style={{ color: 'red' }}>Loading ...</p>
                <ProgressBar striped variant="danger" now={80} />
            </div>
        </div>
    );
};

export default Misc;
