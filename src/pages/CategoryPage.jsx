import { Button, IconButton, Rating, Slider, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProductBox from '../components/ProductBox';
import FilterListIcon from '@mui/icons-material/FilterList';
import useMediaQuery from '@mui/material/useMediaQuery';


const CategoryPage = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#2ecc71', // Use the desired color code here
            },
        },
    });

    const products = [{
        price: 8897,
        category: "Motor Bikes"
    },
    {
        price: 8897,
        category: "Motor Bikes"
    },
    {
        price: 8897,
        category: "Motor Bikes"
    },
    {
        price: 8897,
        category: "Motor Bikes"
    },
    {
        price: 8897,
        category: "Motor Bikes"
    },
    {
        price: 8897,
        category: "Motor Bikes"
    },
    {
        price: 8897,
        category: "Motor Bikes"
    },
    {
        price: 8897,
        category: "Motor Bikes"
    },
    {
        price: 8897,
        category: "Motor Bikes"
    },
    ];

  

   




 

    return (
        <>

            <ThemeProvider theme={theme}>
                <div className="container-fluid searched-container">

                    <div className="row">



      
        
 
                        
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="searched-products">


                                <div className="row-filters">
                                    <div className="number-of-products">
                                        Products Found <span>120578</span>
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

                                <div className="products-grid">
                                    {
                                        products.map((product, index) => (
                                            <>
                                                <ProductBox category={product.category} price={product.price} />
                                            </>
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

export default CategoryPage
