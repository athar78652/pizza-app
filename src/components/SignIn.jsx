import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./signin.css";

const SignIn = () => {


const Navigate = useNavigate()

    return (
        <>
            <div className='container'>
                <div className='inner_container'>
                
                        <label className='userName'> User Name</label>
                        <input type='text' className='input1'/>
                        <label className='password'> User Password</label>
                        <input type='password' className='input2'/>
                        <button onClick={()=>Navigate('/order')} className='btnn'>Submit</button>
                        <div className='account'><p className='p1'>Don't have account?</p> <Link to='/signup' className='link'><p className='p2'> Sign Up Here</p></Link></div>
                        
                    
                </div>
            </div>
        </>
    );
}

export default SignIn;
