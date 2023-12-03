import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Delivery",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        },
    ];

    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>Work</p>
                <h1 className='primary-heading'>How it works</h1>
                <p className='primary-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
            <div className='work-section-bottom'>
                {workInfoData.map((data) => (
                    <div className='work-section-info' key={data.title}>
                        <div className='work-section-img-container'>
                            <img src={data.image} alt='' />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;