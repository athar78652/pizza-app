import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./home.css";

const Home = () => {

const navigate = useNavigate();

    return (
        <>
        <div className='home_main'>
            <div className='home'>
            
            </div>
            <div className='text'>
                
                    <h1> Best Pizza & Delicious</h1>
                    <span className='buttons'> <button className='btn1' onClick={()=>navigate('/menu')}> Online Order</button> <button className='btn2' onClick={()=>navigate('/signup')} > Sign Up</button></span>
                
            </div>
        </div>
        </>
    );
}

export default Home;
