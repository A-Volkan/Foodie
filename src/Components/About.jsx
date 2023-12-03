import React from 'react'
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
    return (
        <div className='about-section-container'>
            <div className='about-background-image-container'>
                <img src={AboutBackground} alt="background" />
            </div>
            <div className='about-section-image-container'>
                <img src={AboutBackgroundImage} alt="background" />
            </div>
            <div className='about-section-text-container'>
                <h1 className='primary-heading'>
                    Food Is an essential part of everyone's life
                </h1>
                <p className='primary-text'>
                    lorem ipsum is simply dummy text of the printing and typesetting industry, lorem ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p
                    className='primary-text'>
                    lorem ipsum is simply dummy text of the printing and typesetting industry, lorem ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className='about-buttons-container'>
                    <button className='secondary-button' >Learn More </button>
                    <button className='watch-video-button'>
                        <BsFillPlayCircleFill /> Watch Video
                    </button>

                </div>
            </div>
        </div>
    )
}

export default About;