import React, { useState,lazy, useEffect } from 'react';
import SliderCraousal from '../components/SliderCraousal';
// import { Button } from '@mui/material';
// import { Typography } from '@material-ui/core';
// import CrousalItem from "../components/CrousalItem";
// import ProductCard from '../components/ProductCard';
// import CategoriesSection from '../components/CategoriesSection';
const CategoriesSection = lazy(() => import('../components/CategoriesSection'));
import Slider from "react-slick";
import BlogCard from '../components/BlogCard';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const BlogCard = lazy(() => import('../components/BlogCard'));

const Home = () => {
  
  let url = "http://localhost:5000/";
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Desktop breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // Tablet breakpoint
        settings: {
          slidesToShow: 2,
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
  const products = [
    {
      product_name: 'Nike Best Shoes Nike Best Shoes Nike Best Shoes',
      category_name: 'Shoes',
      currency: 'Rs',
      price_now: 5000,
      price_before: 7000,
      discount: "20%",
      discount_title: "OFF"
    },
    {
      product_name: 'Nike Best Shoes Nike Best Shoes Nike Best Shoes',
      category_name: 'Shoes',
      currency: 'Rs',
      price_now: 5000,
      price_before: 7000,
      discount: "20%",
      discount_title: "OFF"
    },
    {
      product_name: 'Nike Best Shoes Nike Best Shoes Nike Best Shoes',
      category_name: 'Shoes',
      currency: 'Rs',
      price_now: 5000,
      price_before: 7000,
      discount: "20%",
      discount_title: "OFF",
    },
    {
      product_name: 'Nike Best Shoes Nike Best Shoes Nike Best Shoes',
      category_name: 'Shoes',
      currency: 'Rs',
      price_now: 5000,
      price_before: 7000,
      discount: "20%",
      discount_title: "OFF"
    },
    {
      product_name: 'Nike Best Shoes Nike Best Shoes Nike Best Shoes',
      category_name: 'Shoes',
      currency: 'Rs',
      price_now: 5000,
      price_before: 7000,
      discount: "20%",
      discount_title: "OFF"
    },
    {
      product_name: 'Nike Best Shoes Nike Best Shoes Nike Best Shoes',
      category_name: 'Shoes',
      currency: 'Rs',
      price_now: 5000,
      price_before: 7000,
      discount: "20%",
      discount_title: "OFF"
    }
  ];


  const [showProducts, setShowProducts] = useState(2);

  
  const [blogData, setBlogData] = useState([]);
  const [sliderData, setSliderData] = useState([]);

  useEffect(()=>{

    axios.get(`${url}api/fetched-blogs`)
    .then((response)=>{
      console.log(response.data.data);
      setBlogData(
        response.data.data
      )
    })
    .catch((error)=>{
      console.log(error);
    });



    axios.get(`${url}api/all-slider`)
    .then((response)=>{
      console.log(response.data.data);
      setSliderData(
        response.data.data
      )
    })
    .catch((error)=>{
      console.log(error);
    });

  },[]);




  return (
    <>
      <SliderCraousal data={sliderData} />
      {/* <Typography className='heading-styled' component='h2' variant='h3'>
        Categories
      </Typography> */}

      <div className="container" style={{marginTop:"20px"}}>
        <CategoriesSection sectionDirection={false} categoryId="64fcc2e064268d945ee56757" />

        <img src="https://htmldemo.net/reid/reid/assets/img/bg/banner3.jpg" alt="" className='ad-bnr' />

        <CategoriesSection sectionDirection={true} categoryId="0" />



        <h2 className="latest-blogs-head">
          Latest Blogs
        </h2>
        <p className='latest-blogs-para'>Contemporary, minimal and modern designs embody the Lavish Alice handwriting</p>


        {blogData.length > 0 && (
  <Slider {...settings} className='blog-slider'>
    {blogData.map((item, index) => (
      <div key={item._id}>
        <BlogCard data={item} />
      </div>
    ))}
  </Slider>
)}

      </div>






      {/* <CrousalItem /> */}



{/* 
      <Typography className='heading-styled' component='h2' variant='h3'>
        Products
      </Typography>

      <div className="products-grid">
        {
          products.slice(0, showProducts).map((item, index) => (
            <ProductCard discount_title={item.discount_title} discount={item.discount} price_before={item.price_before} price_now={item.price_now} currency={item.currency} category_name={item.category_name} product_name={item.product_name} key={index} />
          ))
        }


      </div>
      {
        products.length > showProducts && (
          <div className="" style={{ width: "100%", display: "flex", justifyContent: "center", margin: "20px 0px" }}>
            <Button className='load-more' variant="contained" onClick={() => { products.length > showProducts && setShowProducts(showProducts + 2) }}> Load More</Button>
          </div>
        )
      }

 */}



    </>
  );
}

export default Home;
