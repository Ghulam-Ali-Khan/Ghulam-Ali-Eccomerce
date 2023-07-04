import { Button, Rating, Slider } from '@mui/material';
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const SearchPage = () => {

    const theme = createTheme({
        palette: {
          primary: {
            main: '#2ecc71', // Use the desired color code here
          },
        },
      });

    const categories = [{
        numbers: 8897,
        name: "Motor Bikes"
    },
    {
        numbers: 2569,
        name: "Cars"
    },
    {
        numbers: 1125,
        name: "Electronics"
    },
    {
        numbers: 985,
        name: "Mobiles"
    },
    {
        numbers: 145,
        name: "Clothes"
    },
    {
        numbers: 2000,
        name: "Tools"
    },
    {
        numbers: 1300,
        name: "Food"
    },
    {
        numbers: 8689,
        name: "Furniture"
    },
    {
        numbers: 7778,
        name: "Crockry"
    },
    ];

    const [categoriesToDisplay, setCategoriesToDisplay] = useState({
        lenght: 5,
        show: false,
    });

    const [ratingValue, setRatingValue] = useState(3);

    const [priceRange, setPriceRange] = useState([20, 37]);
    const changePriceRange = (event, newValue) => {
        setPriceRange(newValue);
      };
    return (
        <>

<ThemeProvider  theme={theme}>
            <div className="container-fluid searched-container">

                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 ">
                        <div className="filters">
                            <h2 className="heading">
                                Filters
                            </h2>

                            <h3 className='sub-heading'>Categories</h3>


                            <ul className='categories-list'>

                                {
                                    categories.slice(0, categoriesToDisplay.lenght).map((category, index) => (
                                        <li className="category">{category.name} ({category.numbers})</li>
                                    ))
                                }


                            </ul>

                            <Button className='view-more-btn' onClick={() => {
                                categoriesToDisplay.show ? setCategoriesToDisplay({
                                    ...categoriesToDisplay,
                                    lenght: 5,
                                    show: false

                                }) : setCategoriesToDisplay({
                                    ...categoriesToDisplay,
                                    lenght: categories.length,
                                    show: true

                                })
                            }} >View {categoriesToDisplay.show ? "Less" : "More"}</Button>



                            <h3 className='sub-heading mt-2'>Rating</h3>
                            <span className='short-heading'>Rating should be above</span>
                            <br />
                            <Rating
                                name="simple-controlled"
                                value={ratingValue}
                                onChange={(event, newValue) => {
                                    setRatingValue(newValue);
                                }}
                            />

                            <h3 className='sub-heading mt-2'>Price</h3>

                            <Slider
                                getAriaLabel={() => 'Price range'}
                                value={priceRange}
                                onChange={changePriceRange}
                                valueLabelDisplay="auto"
                                // getAriaValueText={valuetext}
                                color="primary"
                                sx={{width:"200px"}}
                                min={0}
                                max={1000000000}
                            />



                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12">
                        <div className="searched-products">
                            <h2>Searched Results for Ali...</h2>

                        </div>
                    </div>
                </div>
            </div>

</ThemeProvider>
        </>
    )
}

export default SearchPage
