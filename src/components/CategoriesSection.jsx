import { IconButton, Typography } from '@mui/material'
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const CategoriesSection = (props) => {

    const carts = [
        {
            price: "Rs 900",
            category: "Shoe",
            name: "Bata Shoe Branded",

        },
        {
            price: "Rs 900",
            category: "Shoe",
            name: "Bata Shoe Branded",

        },
        {
            price: "Rs 900",
            category: "Shoe",
            name: "Bata Shoe Branded",

        },
        {
            price: "Rs 900",
            category: "Shoe",
            name: "Bata Shoe Branded",

        },
        {
            price: "Rs 900",
            category: "Shoe",
            name: "Bata Shoe Branded",

        },
        {
            price: "Rs 900",
            category: "Shoe",
            name: "Bata Shoe Branded",

        },

    ]



    return (
        <>
            <div className="row categories-section" style={{flexDirection: props.sectionDirection ?"row-reverse": "row"}}>
                <div className="col-lg-6 col-md-6 img-section">

                    <img src="https://htmldemo.net/reid/reid/assets/img/bg/banner2.jpg" alt="" />

                </div>
                <div className="col-lg-6 col-md-6 cards">
                    <div className="cards-section">
                        <Typography variant='h3' component='h3' className='collection-head'>
                            Men Collection
                        </Typography>
                        <p className="subhead">
                        Contemporary, minimal and modern designs embody the Lavish Alice handwriting
                        </p>
                        <div className="row">

                            {
                                carts.map((item, index) => (
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="card mb-2">
                                            <div className="img-area">
                                                <div className="discount">
                                                    20% Off
                                                </div>
                                                <img src="src/imgs/searched-products.png" alt="" />
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXy88SWy3C8-nbZY41r80vHJjgqJ52edCEyg" alt="" className='img-front' />
                                            </div>
                                            <div className="content">
                                                <h3 className='category-name'>
                                                    {item.category}
                                                </h3>
                                                <h3 className='product-name'>
                                                    {item.name}
                                                </h3>
                                                <div className="add-cart-price">
                                                    <h3 className='product-price'>
                                                        {item.price}
                                                    </h3>


                                                    <IconButton className='add-cart'>
                                                        <AddShoppingCartIcon />
                                                    </IconButton>

                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                ))


                            }


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoriesSection
