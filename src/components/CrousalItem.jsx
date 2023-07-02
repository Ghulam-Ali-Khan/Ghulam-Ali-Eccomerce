import React,{useState} from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Item from './Item';
const CrousalItem = () => {
  const blogs = [
    {
      blog_name: 'Nike Best Shoes Nike Best Shoes Nike Best Shoes',
      category_name: 'Shoes',
      url: "https://htmldemo.net/reid/reid/assets/img/blog/blog1.jpg",
      
    },
    {
      blog_name: 'Nike Best Shoes Nike Best Shoes Nike Best Shoes',
      category_name: 'Shoes',
      url: "https://htmldemo.net/reid/reid/assets/img/blog/blog1.jpg",
    },
    {
      blog_name: 'Nike Best Shoes Nike Best Shoes Nike Best Shoes',
      category_name: 'Shoes',
      url: "https://htmldemo.net/reid/reid/assets/img/blog/blog1.jpg",
      
    },
    {
      blog_name: 'Nike Best Shoes Nike Best Shoes Nike Best Shoes',
      category_name: 'Shoes',
      url: "https://htmldemo.net/reid/reid/assets/img/blog/blog1.jpg",
    },
    {
      blog_name: 'Nike Best Shoes Nike Best Shoes Nike Best Shoes',
      category_name: 'Shoes',
      url: "https://htmldemo.net/reid/reid/assets/img/blog/blog1.jpg",
    },
    {
      blog_name: 'Nike Best Shoes Nike Best Shoes Nike Best Shoes',
      category_name: 'Shoes',
      url: "https://htmldemo.net/reid/reid/assets/img/blog/blog1.jpg",
    },
  ];
 
 
 
  return (
    <>

    <Carousel
    className='crousal-item-category'
    showArrows={true} showThumbs={false} showStatus={false} emulateTouch={true} centerMode={true} centerSlidePercentage={33.33}
    >
    {blogs.map((item, index)=>(
  <Item  url={item.url} title={item.blog_name}  key={index} style={{margin:"10px"}} />
))} 


</Carousel>   
    </>
  )
}

export default CrousalItem
