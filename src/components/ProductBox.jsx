import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton, Rating } from '@mui/material';
import React, { useState, useEffect } from 'react';
import TestIMG1 from '../imgs/testsingle1.png';
import TestIMG2 from '../imgs/searched-products1.png';

const ProductBox = ({ data }) => {


    const [ratingValue, setRatingValue] = useState(3);
    const url = "http://127.0.0.1:5000/";

    return (
        <>
{
(data!=null)&&(
    <div className="product-card">
    <div className="img-area">
        {
            
            (data.discount != null) &&( 
            data.discount > 0 && (
                <div className="discount">
                    {data.discount}% Off
                </div>
            ))
        }


        <img src={`${url}uploads/products/${data.cardImages != null && data.cardImages[0]}`} alt={data.name} />
        <img
            src={`${url}uploads/products/${data.cardImages != null ? (data.cardImages.length > 1 ? data.cardImages[1] : data.cardImages[0]) : ''
                }`}
            alt={data.name}
            className="changed-img"
        />

    </div>
    <div className="content">
        <div className="category-rating-area">


            <h2 className="category">
                {data.category != null ? data.category.name : "None"}
            </h2>

            <Rating className='rating' name="read-only" value={ratingValue} readOnly />
        </div>
        <h2 className="title">
            {data.name}
        </h2>

        <div className="cart-price-area">
            <h2 className="price">
                Rs {data.price}
            </h2>

            <IconButton className='add-cart'>
                <AddShoppingCartIcon />
            </IconButton>
        </div>

    </div>
</div>

)
}


        </>
    )
}

export default ProductBox
