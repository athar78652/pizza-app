import React from 'react';
import {GoLocation} from "react-icons/go";
import {BsFillTelephoneFill} from "react-icons/bs";
import {IoIosTime} from "react-icons/io";
import "./contact.css";

const Contact = () => {
    return (
        <>
            <div className='contact_main'>
                <div className='contact_inner1'>
                    <h2>CONTACT</h2>
                    <h1>Get in touch with us</h1>
                </div>
                <div className='contact_inner2'>
                    
                    <div className='c1'>
                        <GoLocation size={40} fill='red'/>
                        <h3>Get Directions</h3>
                        <p>Padleyganj,Gorakhpur, U.P., Pin 273009</p>
                    </div>
                    <div className='c2'>
                        <BsFillTelephoneFill size={40} fill='red'/>
                        <h3>Contact Us</h3>
                        <p>+91-123456789</p>
                        <p>Pizzapoint@pp.com</p>
                    </div>
                    <div className='c3'>
                        <IoIosTime size={40} fill='red'/>
                        <h3>Monday - Friday</h3>
                        <p>09:00 am to 10:00 pm</p>
                    </div>
                    
                   
                </div>
            </div>
        </>
    );
}

export default Contact;
