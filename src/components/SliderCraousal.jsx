import React from 'react';
import Carousel from 'react-material-ui-carousel';
import SliderCrousalItem from './SliderCrousalItem';


// import testingimg from '../imgs/ecommerce slide1.png';


const SliderCraousal = () => {



    const items = [
        {
            img: '/src/imgs/ecommerce slide1.png',
            text: "Item 1"
        },
        {
            img: '/src/imgs/ecommerce slide2.png',
            text: "Item 2"
        },
        {
            img: '/src/imgs/ecommerce slide3.png',
            text: "Item 3"
        }
    ];

    return (
        <>
            <Carousel swipe>
                {items.map((item, index) => (
                    <SliderCrousalItem url={item.img} key={index} text={item.text} />
                ))}
            </Carousel>
        </>
    );
}

export default SliderCraousal;
