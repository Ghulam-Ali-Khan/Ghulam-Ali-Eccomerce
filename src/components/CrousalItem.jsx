import React,{useState} from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Item from './Item';
const CrousalItem = () => {
 const items = [
{
  url:"https://www.pngplay.com/wp-content/uploads/7/Android-Mobile-Download-Free-PNG.png",
  title:"Mobiles"
},
{
  url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ZiLN5iw2Wc79RRdoVK1CHUHvbcZTckK_9A",
  title:"Laptops"
},
{
  url:"https://png.pngtree.com/png-clipart/20201223/ourmid/pngtree-clothing-sweater-clothes-clothing-mens-clothing-spring-clothes-foreign-trade-tailor-png-image_2611494.jpg",
  title:"Cloths"
},
{
  url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXy88SWy3C8-nbZY41r80vHJjgqJ52edCEyg",
  title:"Shoes"
},
{
  url:"data:image/png;base64,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",
  title:"Medicine"
},


 ]
 
 
 
  return (
    <>

    <Carousel
    className='crousal-item-category'
    showArrows={true} showThumbs={false} showStatus={false} emulateTouch={true} centerMode={true} centerSlidePercentage={20}
    >
    {items.map((item, index)=>(
  <Item  url={item.url} title={item.title}  key={index} style={{margin:"10px"}} />
))} 


</Carousel>   
    </>
  )
}

export default CrousalItem
