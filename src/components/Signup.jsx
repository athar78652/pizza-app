import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./signup.css";

const Signup = () => {


const toggle=useNavigate();

    return (
        <>
        <div className='main_box'>
        <div className='signup_container'>
            
        </div>
        <div className='signup_form'>
            <div className='inputs'>
            <h1 id='heading'>Sign Up</h1>
                <label className='label1'>Full Name</label>
                <input type='text' className='inputs1'/>
                <label className='label2'>Email Id</label>
                <input type='text' className='inputs2'/>
                <label className='label3'>Mobile No.</label>
                <input type='number' className='inputs3'/>
                <label className='label4'>Password</label>
                <input type='password' className='inputs4'/>
                <label className='label5'>Confirm Password</label>
                <input type='password' className='inputs5'/>
                
                <button id='btn' onClick={()=>toggle('/signin')}>Submit</button>
               <div id='login'> <p>Already a member?</p> <Link to='/signin'> <p>Log In</p> </Link></div>

            </div>
        </div>
        </div>
        </>
    );
}

export default Signup;
