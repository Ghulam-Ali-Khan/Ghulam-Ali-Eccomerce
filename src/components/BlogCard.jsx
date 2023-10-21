import React from 'react'

const BlogCard = ({data}) => {

  let url = "http://localhost:5000/";

  return (
    <>

<div className="blog-card " style={{maxWidth:"300px"}}>
    <div className="img-area ">
        <img src={`${url}uploads/blogs/${data.cardImage}`} alt="" style={{maxWidth:"100%"}}/>
    </div>
    <div className="content">
        <div className="category-time">
           <h3 className='category'>{data.category!=null ? data.category.name: "None"}</h3>  

           <p className='time'>{new Date(data.updatedAt).toLocaleDateString('en-GB')}</p>
        </div>
       
        <h3 className='title'>{data.name}</h3>
        <p className='description' dangerouslySetInnerHTML={{ __html: (data.description.slice(0,100)+"...")  }}>

        </p>
    </div>
</div>


    </>
  )
}

export default BlogCard
