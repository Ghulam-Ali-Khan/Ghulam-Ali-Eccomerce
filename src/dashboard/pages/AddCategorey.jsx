import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const AddCategorey = () => {
    const formData = new FormData();
    const [categoryDetails, setCategoryDetails] = useState({
        name: null,
        description: null,
        bannerImage: null,
        cardImage: null,
        metaTitle: null,
        metaDesp: null,
        metaKeywords: null
    });
    const [responseMsg, setResponseMsg] = useState({
        display: false,
        msg: "",
        color: "success"
    });


    const scrollToTop = () => {
        console.log('Scrolling to top...');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };



    const updateValues = async (e) => {

        await setCategoryDetails(prevValue => ({
            ...prevValue,
            [e.target.name]: e.target.value,
        }));


        // formData.append(e.target.name, e.target.value);


    }

    const updateFiles = async (e) => {


        await setCategoryDetails(prevValue => ({
            ...prevValue,
            [e.target.name]: e.target.files[0],
        }));

        // formData.append(e.target.name, e.target.files[0]);



    }


    const createCategoryFun = async () => {

        // Convert the keys of categoryDetails to an array
        const keys = Object.keys(categoryDetails);

        // Use map to append key-value pairs to FormData
        await keys.forEach((key) => {
            formData.append(key, categoryDetails[key]);
        });

        await axios.post("http://localhost:5000/api/add-category", formData, {
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
                        msg: "Category Created Succesfully",
                        color: "success"
                    }));

                    setCategoryDetails(prevObj => ({
                        ...prevObj,
                        name: "",
                        description: "",
                        bannerImage: "",
                        cardImage: "",
                        metaTitle: "",
                        metaDesp: "",
                        metaKeywords: ""
                    }));

                    scrollToTop();

                } else {


                    scrollToTop();

                    setResponseMsg(prevObj => ({
                        ...prevObj,
                        display: true,
                        msg: "Category Creation Failed (Something went wrong)",
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
                    msg: "Category Creation Failed (Something went wrong)"+ error ,
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




    return (
        <>

            <div className="main-content add-product-page">

                <div className="page-content">
                    <div className="container-fluid">
                        {
                            responseMsg.display && (
                                <Alert variant="filled" severity={responseMsg.color} sx={{marginBottom:"1rem"}} >
                                    {responseMsg.msg}
                                </Alert>
                            )
                        }


                        <div className="card p-4">
                            <div className="row">
                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <label for="productName">Category Name</label>
                                        <input type="text" class="form-control" id="productName" placeholder="Enter name" name='name' onChange={updateValues} value={categoryDetails.name} />

                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productDescription">Category Description</label>
                                        <textarea class="form-control" id="productDescription" rows="3" name='description' onChange={updateValues} value={categoryDetails.description} ></textarea>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="categoryCardImg">Category Card Image</label>
                                        <input type="file" class="form-control" id="categoryCardImg" name='cardImage' onChange={updateFiles}  />

                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="categoryBannerImg">Category Banner Image</label>
                                        <input type="file" class="form-control" id="categoryBannerImg" name='bannerImage' onChange={updateFiles}  />

                                    </div>
                                </div>



                                <h3 className='mt-4'> Seo Area</h3>


                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="metaTitle">Meta Title</label>
                                        <input type="text" class="form-control" id="metaTitle" placeholder="Enter Meta" name='metaTitle' onChange={updateValues} value={categoryDetails.metaTitle} />

                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 ">
                                    <div class="form-group">
                                        <label for="metaTags">Meta Tags</label>
                                        <input type="text" class="form-control" id="metaTags" placeholder="Enter Tags" name='metaKeywords' onChange={updateValues} value={categoryDetails.metaKeywords} />

                                    </div>
                                </div>

                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="metaDescription">Meta Description</label>
                                        <textarea class="form-control" id="metaDescription" rows="3" name='metaDesp' onChange={updateValues} value={categoryDetails.metaDesp}></textarea>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 mt-2" style={{display:"flex",justifyContent:"end"}}>
                                    <Button onClick={createCategoryFun} variant='contained' className='crud-submit-btns' startIcon={<AddCircleIcon/>} >Create</Button>
                                </div>


                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default AddCategorey;