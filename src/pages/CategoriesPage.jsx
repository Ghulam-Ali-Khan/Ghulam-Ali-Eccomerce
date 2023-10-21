import { Button, IconButton, Rating, Slider, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProductBox from '../components/ProductBox';
import FilterListIcon from '@mui/icons-material/FilterList';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useParams, Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import axios from 'axios';

const CategoriesPage = () => {


    const {  uri } = useParams();

    const [categoryRelatedData, setCategoryRelatedData] = useState([]);
    const [total, setTotal] = useState(0);
    const [categoryData, setCategoryData] = useState({ name: "", bannerImages: [""], cardImages: [""], discount: 0 });
    const url = "http://127.0.0.1:5000/";
  

    useEffect(() => {


       

        axios.get(`${url}api/fetch-categories`,
            {
                params: {
                    type: uri, // Send 'type' as a query parameter
                },
            }
        )
            .then((response) => {
                console.log(response.data.data);
                setCategoryRelatedData(response.data.data);
                setTotal(response.data.total);
            })
            .catch((error) => {
                console.log(error);
            })






    }, [uri]);

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

                <img src="/src/imgs/ecommerce slide2.png" alt={categoryData.name} />

            </div>


            <ThemeProvider theme={theme}>
                <div className="container-fluid searched-container">

                    <div className="row">







                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="searched-products">


                                <div className="row-filters ">
                                    <div className="number-of-products" style={{ paddingLeft: "15px" }}>
                                        Categories Found <span>{total}</span>
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



                                    {
                                        categoryRelatedData.map((item, index) => (

                                            
                                                <div className="card" style={{width: "18rem", margin:"10px"}}>
                                                    <img src={`${url}uploads/categories/${item.cardImage}`} className="card-img-top" alt="..." />
                                                        <div className="card-body">
                                                            <h5 className="card-title">{item.name}</h5>
                                                            <p className="card-text">{item.description.slice(0,100)}</p>
                                                         <Link to={`/category-page/${uri}/${item._id}`} className='text-decoration-none'>  
                                                          <span  className="btn btn-primary">Learn More</span>
                                                           </Link>
                                                        </div>
                                                </div>
                                           
                                        ))
                                    }



                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </ThemeProvider>
        </>
    )
}

export default CategoriesPage
