import { Button, IconButton, Rating, Slider, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProductBox from '../components/ProductBox';
import FilterListIcon from '@mui/icons-material/FilterList';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useParams, Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import axios from 'axios';

const CategoryPage = () => {

    
    const { id , uri} = useParams();

    const [categoryRelatedData, setCategoryRelatedData] = useState([]);
    const [total, setTotal] = useState(0);
    const [categoryData, setCategoryData] = useState({name:"", bannerImages:[""], cardImages:[""], discount:0});
    const url = "http://127.0.0.1:5000/";
    let suburl = 'fetched-products';

    useEffect(()=>{


        if(uri==='product'){
            suburl='fetched-products';
        }else{
            suburl= 'fetched-blogs';
        }

    axios.get(`${url}api/${suburl}`,{
        params:{
          categoryId: id,
        }
      })
    .then((response)=>{
        console.log(response.data.data);
        setCategoryRelatedData(response.data.data);
        setTotal(response.data.total);
    })
    .catch((error)=>{
        console.log(error);
    })



  axios.post(`${url}api/edit-categories`,{
       
          id: id,
       
      })
    .then((response)=>{
        console.log(response.data.data);
        setCategoryData(response.data.data);
        
    })
    .catch((error)=>{
        console.log(error);
    })


    },[id]);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#2ecc71', // Use the desired color code here
            },
        },
    });

    // const products = [{
    //     price: 8897,
    //     category: "Motor Bikes"
    // },
    // {
    //     price: 8897,
    //     category: "Motor Bikes"
    // },
    // {
    //     price: 8897,
    //     category: "Motor Bikes"
    // },
    // {
    //     price: 8897,
    //     category: "Motor Bikes"
    // },
    // {
    //     price: 8897,
    //     category: "Motor Bikes"
    // },
    // {
    //     price: 8897,
    //     category: "Motor Bikes"
    // },
    // {
    //     price: 8897,
    //     category: "Motor Bikes"
    // },
    // {
    //     price: 8897,
    //     category: "Motor Bikes"
    // },
    // {
    //     price: 8897,
    //     category: "Motor Bikes"
    // },
    // ];

  

   




 

    return (
        <>



<div className="category-banner">

<img src={`${url}uploads/categories/${categoryData.bannerImage}`} alt={categoryData.name} />

</div>


            <ThemeProvider theme={theme}>
                <div className="container-fluid searched-container">

                    <div className="row">



      
        
 
                        
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="searched-products">


                                <div className="row-filters ">
                                    <div className="number-of-products" style={{paddingLeft:"15px"}}>
                                        {uri==="products"?"Products":"Blogs"} Found <span>{total}</span>
                                    </div>
                                    <div className="sorted-products">
                                        <label htmlFor="sortProducts"> Sorted By : </label>
                                        <select class="form-select" id='sortProducts' aria-label="Default select example">
                                            <option selected>Choose Option </option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="products-grid blog-slider">
                                   
                                   
                             
  {uri === "products" ? (
    categoryRelatedData.map((item, index) => (
        <Link to={`/detail-page/${item._id}`} className='text-decoration-none'>
      <ProductBox key={index} data={item} />
      </Link>
    ))
  ) : (
    categoryRelatedData.map((item, index) => (
      
        <Link to={`/blog/${item._id}`} className='text-decoration-none'>
        <BlogCard data={item} />
        </Link>
    ))
  )}



                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </ThemeProvider>
        </>
    )
}

export default CategoryPage
