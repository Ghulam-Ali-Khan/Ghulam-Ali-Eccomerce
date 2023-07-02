import React from 'react'

const BlogCard = () => {
  return (
    <>

<div className="blog-card">
    <div className="img-area">
        <img src="https://htmldemo.net/reid/reid/assets/img/blog/blog1.jpg" alt="" />
    </div>
    <div className="content">
        <div className="category-time">
           <h3 className='category'>Shoes</h3>  

           <p className='time'>22/03/2023</p>
        </div>
       
        <h3 className='title'>Dior F/W 2015 First Fashion Experience</h3>
        <p className='description'>
        Maria Denardo is the Fashion Director at theFashionSpot. Prior to joining tFS, she worked as...
        </p>
    </div>
</div>


    </>
  )
}

export default BlogCard
