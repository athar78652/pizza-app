import React from 'react';
import {BsInstagram,BsFacebook,BsTwitter,BsWhatsapp} from "react-icons/bs";
import "./footer.css";

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='copyright'>Copyright &copy; 2023-24 pizzahut.com </div>
                <div className='icons'> <BsInstagram size={40} fill='brown' className='icon'/> <BsFacebook size={40} fill='skyblue' className='icon'/> <BsTwitter size={40} fill='blue' className='icon'/> <BsWhatsapp size={40} fill='green' className='icon'/></div>
            </div>
            
        </>
    );
}

export default Footer;
