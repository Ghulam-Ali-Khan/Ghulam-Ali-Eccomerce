import { Alert, Button } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const AddProduct = () => {
const formData = new FormData();

    const [addDiscount, setAddDiscount] = useState(null);
    const [responseMsg, setResponseMsg] = useState({
        display: false,
        msg: "",
        color: "success"
    });
    const [productDetails, setProductDetails] = useState({
        name: null,
        description: null,
        price: 0,
        discount: 0,
        salePrice: 0,
        purchasePrice: 0,
        quantity: 0,
        category: null,
        
        metaTitle: null,
        metaDescription: null,
        metaKeywords: null,


    });
    const [priceCalculations, setPriceCalculations] = useState({

        retailPrice: 0,
        sellPrice: 0,
        profit: 0,
        priceAfterDiscount: 0,
        discount: 0,

    });



    const [fetchedCategories, setFetchedCategories] = useState(null);

    const scrollToTop = () => {
        console.log('Scrolling to top...');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };



    useEffect(() => {

        axios.get("http://localhost:5000/api/fetch-categories")
            .then(
                (response) => {


                    console.log(response.data.data);

                    setFetchedCategories(response.data.data);

                }
            )
            .catch((error) => {
                console.log(error);
            })


    }, []);

    useEffect(() => {

        setProductDetails((prevObj) => ({
            ...prevObj,
            price: priceCalculations.priceAfterDiscount
        }))


    }, [priceCalculations.priceAfterDiscount]);


    const updateValues = (e) => {


        setProductDetails((prevObj) => ({
            ...prevObj,
            [e.target.name]: e.target.value,
        }));

    }

    const updateFiles = async(e) => {


        const files = e.target.files;
  // Append all files to the same field in formData
  for (let i = 0; i < files.length; i++) {
   await formData.append(e.target.name, files[i]);
  }


        // setProductDetails((prevObj) => ({
        //     ...prevObj,
        //     [e.target.name]: e.target.files,
        // }));

    }


    const createProduct = async () => {
      

        const keys = Object.keys(productDetails);

        // Use map to append key-value pairs to FormData
        await keys.forEach((key) => {
            formData.append(key, productDetails[key]);
        });

        await axios.post("http://localhost:5000/api/add-product", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((response) => {
                // Handle the success response from the server
                console.log('Response from server:', response.data);





                if (response.data.success) {


                    setResponseMsg(prevObj => ({
                        ...prevObj,
                        display: true,
                        msg: "Product Created Succesfully",
                        color: "success"
                    }));

                    setProductDetails(prevObj => ({
                        ...prevObj,
                        name: "",
                        description: "",
                        price: 0,
                        discount: 0,
                        salePrice: 0,
                        purchasePrice: 0,
                        quantity: 0,
                        category: "",
                        cardImages: null,
                        bannerImages: null,
                        metaTitle: "",
                        metaDescription: "",
                        metaKeywords: "",
                    }));

                    scrollToTop();

                } else {


                    scrollToTop();

                    setResponseMsg(prevObj => ({
                        ...prevObj,
                        display: true,
                        msg: "Product Creation Failed (Something went wrong)",
                        color: "error"
                    }));


                }



                setTimeout(() => {
                    setResponseMsg(prevObj => ({
                        ...prevObj,
                        display: false,
                    }))
                }, 5000);


            })
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.error('Error sending FormData:', error);
                scrollToTop();

                setResponseMsg(prevObj => ({
                    ...prevObj,
                    display: true,
                    msg: "Product Creation Failed (Something went wrong)" + error,
                    color: "error"
                }));


                setTimeout(() => {
                    setResponseMsg(prevObj => ({
                        ...prevObj,
                        display: false,
                    }))
                }, 5000);

            });
    }

    console.log(productDetails);

    return (
        <>

            <div className="main-content add-product-page">

                <div className="page-content">
                    <div className="container-fluid">


                        {
                            responseMsg.display && (
                                <Alert variant="filled" severity={responseMsg.color} sx={{ marginBottom: "1rem" }} >
                                    {responseMsg.msg}
                                </Alert>
                            )
                        }

                        <div className="card p-4">
                            <div className="row">
                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="productName">Product Name</label>
                                        <input type="text" class="form-control" id="productName" placeholder="Enter name" name='name' onChange={updateValues} />

                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 ">
                                    <div class="form-group">
                                        <label for="productCategory">Category</label>
                                        <select class="form-control" id="productCategory" name='category' onChange={updateValues}>

                                            <option >Choose One</option>

                                            {
                                                (fetchedCategories != null) && (

                                                    fetchedCategories.map((item) => (

                                                        <option value={item._id}>{item.name}</option>
                                                    ))

                                                )
                                            }

                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productDescription">Product Description</label>
                                        <textarea class="form-control" id="productDescription" rows="3" name='description' onChange={updateValues}></textarea>
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
                                            });
                                            updateValues(e);
                                        }} class="form-control" id="productRetailPrice" placeholder="Enter Price" name='purchasePrice' />

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

                                            });

                                            updateValues(e);


                                        }} class="form-control" id="productSellingPrice" placeholder="Enter Sell Price" name='salePrice' />

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
                                        <input type="file" class="form-control" id="productCardImgs" name='cardImages' onChange={updateFiles} multiple />

                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productDetailImgs">Product Detail Images</label>
                                        <input type="file" class="form-control" id="productDetailImgs" name='bannerImages' onChange={updateFiles} multiple />

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
                                        <input type="text" class="form-control" id="productQuantity" placeholder="Enter Quantity" name='quantity' onChange={updateValues} />

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
                                                            });
                                                            updateValues(e);
                                                        }}

                                                        min="0" max="100" class="form-control" id="discountPercentage" placeholder="Enter Discount Percentage" name='discount' />

                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                                <div class="form-group mt-2">
                                                    <label for="priceAfterDiscount"> Price After Discount </label>
                                                    <input type="number" value={

                                                        priceCalculations.priceAfterDiscount

                                                    } class="form-control" id="priceAfterDiscount" placeholder="0" name='price' disabled />

                                                </div>
                                            </div>

                                        </>
                                    )
                                }






                                <h3 className='mt-4'> Seo Area</h3>


                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="metaTitle">Meta Title</label>
                                        <input type="text" class="form-control" id="metaTitle" placeholder="Enter Meta" name='metaTitle' onChange={updateValues} />

                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 ">
                                    <div class="form-group">
                                        <label for="metaTags">Meta Tags</label>
                                        <input type="text" class="form-control" id="metaTags" placeholder="Enter Tags" name='metaKeywords' onChange={updateValues} />

                                    </div>
                                </div>

                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="metaDescription">Meta Description</label>
                                        <textarea class="form-control" id="metaDescription" rows="3" name='metaDescription' onChange={updateValues}></textarea>
                                    </div>
                                </div>


                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 mt-2" style={{ display: "flex", justifyContent: "end" }}>
                                    <Button onClick={createProduct} variant='contained' className='crud-submit-btns' startIcon={<AddCircleIcon />} >Create</Button>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>

            </div>


        </>
    )
}

export default AddProduct;