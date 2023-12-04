import React from 'react'
import Logo from '../Assets/Logo.svg'
import { BsTwitter } from 'react-icons/bs'
import { SiLinkedin } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-section-one'>
                <img src={Logo} alt="logo" />
            </div>
            <div className='footer-icons'>

                <BsTwitter />
                <SiLinkedin />
                <FaFacebookF />
                <BsYoutube />

            </div>
            <div className='footer-section-two'>
                <div className='footer-section-columns'>
                    <span>About Us</span>
                    <span>Help</span>
                    <span>Careers</span>
                    <span>Share</span>
                    <span>Testimonials</span>
                    <span>Work</span>
                </div>
                <div className='footer-section-columns'>
                    <span>25-2555-5585</span>
                    <span>support@foodie.com</span>
                    <span>press@foodie.com</span>
                    <span>contact@foodie.com</span>

                </div>
                <div className='footer-section-columns'>
                    <span>Term & Conditions</span>
                    <span>Privacy Policy</span>

                </div>

            </div>

        </div>
    )
}

export default Footer