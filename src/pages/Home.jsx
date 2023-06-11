import React, { useState } from 'react';
import SliderCraousal from '../components/SliderCraousal';
import { Button } from '@mui/material';
import { Typography } from '@material-ui/core';
import CrousalItem from "../components/CrousalItem";
import ProductCard from '../components/ProductCard';
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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




  return (
    <>
      <SliderCraousal />
      <Typography className='heading-styled' component='h2' variant='h3'>
        Categories
      </Typography>
      <CrousalItem />
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




     
    </>
  );
}

export default Home;
