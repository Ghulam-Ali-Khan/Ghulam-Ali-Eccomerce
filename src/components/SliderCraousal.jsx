import React from 'react';
import Carousel from 'react-material-ui-carousel';
import SliderCrousalItem from './SliderCrousalItem';


// import testingimg from '../imgs/ecommerce slide1.png';


const SliderCraousal = ({data}) => {



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

    let url = "http://localhost:5000/";


    return (
        <>
            <Carousel swipe>
                {data.map((item, index) => (
                    <SliderCrousalItem url={`${url}uploads/sliders/${item.banner}`}  key={index} text={item.name} />
                ))}
            </Carousel>
        </>
    );
}

export default SliderCraousal;
