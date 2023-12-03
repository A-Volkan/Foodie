import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png';
import { AiFillStar } from 'react-icons/ai';

const Testimonials = () => {
    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>
                    Testimonials
                </p>
                <h1 className='primary-heading'>
                    What Our Clients Say
                </h1>
                <p className='primary-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
                <div className='testimonial-section-bottom'>
                    <img src={ProfilePic} alt="profile" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis
                    </p>
                    <div className='testimonials-stars-container'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;