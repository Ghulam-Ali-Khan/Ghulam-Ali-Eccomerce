import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import TestImg from "../imgs/testsingle1.png";
import TestImg1 from "../imgs/searched-products1.png";
import '../css/product-detail-page.css';
import { Button, Rating } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { IconButton, Typography } from '@mui/material'
// import React from 'react'
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import CrousalItem from '../components/CrousalItem';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductBox from '../components/ProductBox';
// import '../css/style.css';
// import Slider from "react-slick";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const DetailPage = () => {

    const { id } = useParams();
    const url = "http://127.0.0.1:5000/";

    const [productData, setProductData] = useState(null);


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // Desktop breakpoint
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768, // Tablet breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480, // Mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [cartQuantity, setCartQuantity] = useState(0);

    const slideIndexRef = useRef(1);
    const slidesRef = useRef(null);

    useEffect(() => {
        // const intervalId = setInterval(() => {
        plusSlides(1);

        // }, 3000);
        // return () => clearInterval(intervalId);
    }, []);

    function plusSlides(n) {
        slideIndexRef.current += n;
        showSlides(slideIndexRef.current);
    }

    function currentSlide(n) {
        showSlides(n);
    }

    function showSlides(n) {
        const slides = slidesRef.current?.getElementsByClassName("mySlides");
        const dots = slidesRef.current?.getElementsByClassName("demo");
        // const captionText = document.getElementById("caption");
        if (!slides || !dots) return;
        if (n > slides.length) n = 1;
        if (n < 1) n = slides.length;
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[n - 1].style.display = "block";
        dots[n - 1].className += " active";
        // captionText.innerHTML = dots[n - 1].alt;

        slideIndexRef.current = n; // Update the slide index
    }




    const related_products = [
        {
            price: "Rs 900",
            category: "Shoe",
            name: "Bata Shoe Branded",

        },
        {
            price: "Rs 900",
            category: "Shoe",
            name: "Bata Shoe Branded",

        },
        {
            price: "Rs 900",
            category: "Shoe",
            name: "Bata Shoe Branded",

        },
        {
            price: "Rs 900",
            category: "Shoe",
            name: "Bata Shoe Branded",

        },
        {
            price: "Rs 900",
            category: "Shoe",
            name: "Bata Shoe Branded",

        },
        {
            price: "Rs 900",
            category: "Shoe",
            name: "Bata Shoe Branded",

        },

    ];



    const mobileDevice = useMediaQuery('(max-width: 480px)');
    const [mobileWidth, setMobileWidth] = useState(null);
    // const [toggleFilter, setToggleFilter] = useState(!mobileDevice);


    useEffect(() => {


        // setWidth(matches);
        setMobileWidth(mobileDevice);

        // setToggleFilter(!mobileDevice);

        // console.log("Filter 1 value :",toggleFilter, " Mobile Width :", mobileWidth);

        //   console.log(matches);
    }, [mobileDevice]);


    useEffect(() => {


        axios.post(`${url}api/edit-products`, {

            data: {
                id: id,
            }
        })
            .then((response) => {
                console.log(response.data.data);
                setProductData(response.data.data);

            })
            .catch((error) => {
                console.log(error);
            })



    }, [id]);


    useEffect(() => {

        setTimeout(() => {
            currentSlide(1);
        }, 1000);



    }, []);


    return (
        <>

            {
                (productData != null) && (
                    <>
                        <div className="container product-detail-page">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12 col-xl-6 images-section">


                                    {
                                        (mobileDevice) ? (
                                            <>
                                                <img src={`${url}uploads/products/${productData.bannerImages[0]}`} alt="" className='productImg' />
                                            </>
                                        ) :
                                            (
                                                <>
                                                    <div className="product-container" ref={slidesRef}>


                                                        {
                                                            productData.bannerImages.map((item) => (
                                                                <div className="mySlides">

                                                                    <img src={`${url}uploads/products/${item}`} />
                                                                </div>
                                                            ))
                                                        }




                                                        <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
                                                        <a className="next" onClick={() => plusSlides(1)}>❯</a>



                                                        <div className="row mt-3 d-flex">

                                                            {
                                                                productData.bannerImages.map((item, index) => (


                                                                    <div className="column">
                                                                        <img className="demo cursor" src={`${url}uploads/products/${item}`} onClick={() => currentSlide(index + 1)} alt={productData.name} />
                                                                    </div>
                                                                ))
                                                            }


                                                        </div>
                                                    </div>
                                                </>
                                            )
                                    }


                                </div>
                                <div className="col-lg-6 col-md-6 col-12 col-xl-6 content-section" >


                                    <h2 className='title'>
                                        {productData.name}
                                    </h2>
                                    <div className="rating-section">

                                        <Rating name="read-only" value={3} readOnly />
                                        <p>(Number of Reviews 3)</p>
                                    </div>

                                    <div className="price-section">
                                        <h3>Price: <span>Rs  {productData.price}</span></h3>

                                    </div>

                                    {
                                        (productData.discount != null) && (
                                            (productData.discount > 0) && (
                                                <div className="category-section">
                                                    <h3 className='head'>Discount</h3>
                                                    <h3 className="title"> {productData.discount}% Off</h3>
                                                </div>
                                            ))
                                    }


                                    <div className="category-section">
                                        <h3 className='head'>Categorey</h3>
                                        <h3 className="title"> {productData.category != null ? productData.category.name : "None"}</h3>
                                    </div>

                                    <div className="quantity-section">

                                        <h3>Quantity</h3>

                                        <div className="inc-dec">
                                            <button onClick={() => {
                                                if (cartQuantity > 0) {
                                                    setCartQuantity(
                                                        cartQuantity - 1
                                                    );
                                                }
                                            }} >-</button> <p>{cartQuantity}</p>
                                            <button
                                                onClick={() => {

                                                    setCartQuantity(
                                                        cartQuantity + 1
                                                    );

                                                }}
                                            >+</button>
                                        </div>
                                    </div>

                                    <div className="buy-addcart-btns">
                                        <div className="row">
                                            <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
                                                <Button variant="contained" className='addcart' startIcon={<AddShoppingCartIcon />}  >Add Cart</Button>
                                            </div>
                                            <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
                                                <Button variant="contained" className='buynow' startIcon={<LocalMallIcon />} >Buy Now</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >

                        <div className="container relevant-product-slider">


                            <h2 className="relevant-products-head">
                                Relevant Products
                            </h2>

                            <Slider {...settings} >
                                {related_products.map((item, index) => (

                                    <ProductBox category={item.category} price={item.price} className="card" />

                                ))}


                            </Slider>
                        </div>
                    </>
                )
            }





        </>
    )
}

export default DetailPage
