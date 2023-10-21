

// import { Button, IconButton, Rating, Slider, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import ProductBox from '../components/ProductBox';
import FilterListIcon from '@mui/icons-material/FilterList';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useParams, Link } from 'react-router-dom';
// import BlogCard from '../components/BlogCard';
import axios from 'axios';
// import AddBlog from '../dashboard/pages/AddBlog';
// import { Link } from 'react-router-dom';

const BlogDetailPage = () => {


    const { id } = useParams();

    const [blogData, setBlogData] = useState(null);
    const [blogRecentData, setBlogRecentData] = useState([]);

    const url = "http://127.0.0.1:5000/";

    useEffect(() => {





        axios.post(`${url}api/edit-blog`, {

            data: {
                id: id,
            }


        })
            .then((response) => {
                console.log(response.data.data);
                setBlogData(response.data.data);

            })
            .catch((error) => {
                console.log(error);
            })






    }, [id]);

    useEffect(() => {
        axios.get(`${url}api/fetched-blogs`, {
            params: {
                categoryId: blogData != null ? blogData.category._id : 0,
            }

        })
            .then((response) => {
                console.log(response.data.data);
                setBlogRecentData(response.data.data);

            })
            .catch((error) => {
                console.log(error);
            })

    }, [blogData])













    return (
        <>

            {
                blogData != null && (
                    <>

                        <div className="category-banner">

                            <img src={`${url}uploads/blogs/${blogData.bannerImage}`} alt={blogData.name} />

                        </div>

                        <div className="container blog-detailed">
                            <div className="row mt-4">
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xl-8">
                                    <div className="content shadow">

                                        <h1>{blogData.name}</h1>
                                        <div className="date-cat">
                                            <h6>{blogData.category != null ? blogData.category.name : "None"}</h6>
                                            <span>{new Date(blogData.updatedAt).toLocaleDateString('en-GB')}</span>
                                        </div>
                                        <p dangerouslySetInnerHTML={{ __html: blogData.description }}>

                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xl-4">
                                    <h2>
                                        Related Blogs
                                    </h2>
                                    {
                                        blogRecentData.slice(0,4).map((item) => (
                                            <div className="card card-recent" key={item._id}>

                                                <img src={`${url}uploads/blogs/${item.cardImage}`} alt="" />
                                                <div className="content-recent">
                                                <Link to={`/blog/${item._id}`} className='text-decoration-none'>    
                                                    <h2>
                                                        {item.name.slice(0,50)}...
                                                    </h2>
                                                    </Link>
                                                    <span>{new Date(item.updatedAt).toLocaleDateString('en-GB')}</span>
                                                </div>
                                            </div>
                                        ))
                                    }


                                </div>
                            </div>
                        </div>

                    </>
                )
            }




        </>
    )
}

export default BlogDetailPage
