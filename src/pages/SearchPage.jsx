import { Button, IconButton, Rating, Slider, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProductBox from '../components/ProductBox';
import FilterListIcon from '@mui/icons-material/FilterList';
import useMediaQuery from '@mui/material/useMediaQuery';


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

    const [categoriesToDisplay, setCategoriesToDisplay] = useState({
        lenght: 5,
        show: false,
    });

    const [ratingValue, setRatingValue] = useState(3);

    const [priceRange, setPriceRange] = useState([0, 1000000000]);
    const changePriceRange = (event, newValue) => {
        setPriceRange(newValue);
        // console.log(newValue);
    };

    // const [priceRangeValue, setPriceRangeValue] = useState({
    //     from:0,
    //     to:1000000000
    // })


    const mobileDevice = useMediaQuery('(max-width: 1000px)');
    const [mobileWidth, setMobileWidth] = useState(null);
    const [toggleFilter, setToggleFilter] = useState(false);


    useEffect(() => {


        // setWidth(matches);
        setMobileWidth(mobileDevice);

        mobileWidth ? setToggleFilter(false) : setToggleFilter(true) 

        console.log(toggleFilter);

        //   console.log(matches);
    }, [mobileDevice]);

    console.log(toggleFilter);

    return (
        <>

            <ThemeProvider theme={theme}>
                <div className="container-fluid searched-container">

                    <div className="row">



        <div className="col-lg-2 col-md-12 col-sm-12 ">
                            <div className="filters">
                                <h2 className="heading">
                                    Filters

                                    {
                                        mobileWidth && (
                                            <>
                                                <IconButton className='filter-btn' onClick={()=>{
                                                    setToggleFilter(!toggleFilter);
                                                }}>
                                                    <FilterListIcon />
                                                </IconButton>
                                            </>
                                        )
                                    }

                                </h2>
{
    (!toggleFilter) && (
        <>
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
                                <div className="from-to">
                                    <TextField id="outlined-basic" label="From" variant="outlined" value={priceRange[0]} onChange={(e) => { setPriceRange([e.target.value, priceRange[1]]) }} type='number' />
                                    <TextField id="outlined-basic" label="To" variant="outlined" value={priceRange[1]} onChange={(e) => { setPriceRange([priceRange[0], e.target.value]) }} type='number' />
                                </div>
                                <Slider
                                    getAriaLabel={() => 'Price range'}
                                    value={priceRange}
                                    onChange={changePriceRange}
                                    valueLabelDisplay="auto"
                                    // getAriaValueText={valuetext}
                                    color="primary"
                                    className='range-slider'

                                    min={0}
                                    max={1000000000}
                                />

       </>
    )
}

                            </div>
                        </div>
        
 
                        
                        <div className="col-lg-10 col-md-12 col-sm-12">
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

export default SearchPage
