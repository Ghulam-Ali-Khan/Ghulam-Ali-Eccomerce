import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton, Rating } from '@mui/material';
import React, { useState, useEffect } from 'react';



const ProductBox = (props) => {


    const [ratingValue, setRatingValue] = useState(3);
    

    return (
        <>

            <div className="product-card">
                <div className="img-area">
                    <img src="src/imgs/searched-products.png" alt="" />
                    <img src="src/imgs/searched-products1.png" alt="" className='changed-img' />
                </div>
                <div className="content">
                    <div className="category-rating-area">


                        <h2 className="category">
                            Mobiles
                        </h2>

                        <Rating className='rating' name="read-only" value={ratingValue} readOnly />
                    </div>
                    <h2 className="title">
                        Vivo v5 New branded
                    </h2>

                    <div className="cart-price-area">
                        <h2 className="price">
                            Rs 2000
                        </h2>
                        
                        <IconButton className='add-cart'>
                            <AddShoppingCartIcon />
                        </IconButton>
                    </div>

                </div>
            </div>


        </>
    )
}

export default ProductBox
