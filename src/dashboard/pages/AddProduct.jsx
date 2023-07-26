import { Button } from '@mui/material'
import React, { useState } from 'react'

const AddProduct = () => {

    const [addDiscount, setAddDiscount] = useState(null);

    const [priceCalculations, setPriceCalculations] = useState({

        retailPrice: 0,
        sellPrice: 0,
        profit: 0,
        priceAfterDiscount: 0,
        discount: 0,


    });




    return (
        <>

            <div className="main-content add-product-page">

                <div className="page-content">
                    <div className="container-fluid">

                        <div className="card p-4">
                            <div className="row">
                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="productName">Product Name</label>
                                        <input type="text" class="form-control" id="productName" placeholder="Enter name" />

                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 ">
                                    <div class="form-group">
                                        <label for="productCategory">Category</label>
                                        <select class="form-control" id="productCategory">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productDescription">Product Description</label>
                                        <textarea class="form-control" id="productDescription" rows="3"></textarea>
                                    </div>
                                </div>


                                <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productRetailPrice">Product Retail Price </label>
                                        <input type="number" value={priceCalculations.retailPrice} onChange={(e) => {
                                            setPriceCalculations({
                                                ...priceCalculations,
                                                retailPrice: e.target.value,
                                                profit: priceCalculations.sellPrice - e.target.value,
                                            })
                                        }} class="form-control" id="productRetailPrice" placeholder="Enter Price" />

                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productSellingPrice">Product Selling Price </label>
                                        <input type="number" value={priceCalculations.sellPrice} onChange={(e) => {
                                            setPriceCalculations({
                                                ...priceCalculations,
                                                sellPrice: e.target.value,

                                                profit: e.target.value - priceCalculations.retailPrice,

                                            })
                                        }} class="form-control" id="productSellingPrice" placeholder="Enter Sell Price" />

                                    </div>
                                </div>

                                <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productSellingPrice">Product Profit </label>
                                        <input type="number" value={priceCalculations.profit}
                                            class="form-control" id="productSellingPrice" placeholder="Enter Profit" disabled />

                                    </div>
                                </div>

                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productCardImgs">Product Card Images</label>
                                        <input type="file" class="form-control" id="productCardImgs" multiple />

                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productDetailImgs">Product Detail Images</label>
                                        <input type="file" class="form-control" id="productDetailImgs" multiple />

                                    </div>
                                </div>

                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6">
                                    <div class="form-group mt-2">
                                        <label for="productAddDiscount">Add Discount</label>
                                        <div className="btns-area">
                                            <Button variant='outlined' className={(addDiscount === "yes") && (`add-discount-yes`)}
                                                onClick={() => {
                                                    setAddDiscount('yes')
                                                }}
                                            >Yes</Button>
                                            <Button variant='outlined' className={(addDiscount === "no") && (`add-discount-no`)}
                                                onClick={() => {
                                                    setAddDiscount('no')
                                                }}
                                            >No</Button>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productQuantity">Product Quantity</label>
                                        <input type="text" class="form-control" id="productQuantity" placeholder="Enter Quantity" />

                                    </div>
                                </div>




                                {
                                    (addDiscount === "yes") && (
                                        <>
                                            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                                <div class="form-group mt-2">
                                                    <label for="discountPercentage"> Discount Percentage </label>
                                                    <input type="number" value={priceCalculations.discount}

                                                        onChange={(e) => {
                                                            setPriceCalculations({
                                                                ...priceCalculations,
                                                                discount: e.target.value,
                                                                priceAfterDiscount: priceCalculations.sellPrice - (priceCalculations.sellPrice * (e.target.value / 100)),
                                                            })
                                                        }}

                                                        min="0" max="100" class="form-control" id="discountPercentage" placeholder="Enter Discount Percentage" />

                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                                <div class="form-group mt-2">
                                                    <label for="priceAfterDiscount"> Price After Discount </label>
                                                    <input type="number" value={

                                                        priceCalculations.priceAfterDiscount

                                                    } class="form-control" id="priceAfterDiscount" placeholder="0" disabled />

                                                </div>
                                            </div>

                                        </>
                                    )
                                }






<h3 className='mt-4'> Seo Area</h3>


                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="metaTitle">Meta Title</label>
                                        <input type="text" class="form-control" id="metaTitle" placeholder="Enter Meta" />

                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 ">
                                    <div class="form-group">
                                        <label for="metaTags">Meta Tags</label>
                                        <input type="text" class="form-control" id="metaTags" placeholder="Enter Tags" />

                                    </div>
                                </div>

                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="metaDescription">Meta Description</label>
                                        <textarea class="form-control" id="metaDescription" rows="3"></textarea>
                                    </div>
                                </div>




                            </div>
                        </div>


                        </div>
                </div>

            </div>


        </>
    )
}

export default AddProduct