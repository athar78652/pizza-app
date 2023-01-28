import React from 'react';
import { Link } from 'react-router-dom';
import "./error.css";

const Error = () => {
    return (
        <>
        <div className='error'>
        <h1 >Oops Page Not Found!</h1>
            <Link to='/'>Go to Home Page</Link>
        </div>
            
        </>
    );
}

export default Error;
