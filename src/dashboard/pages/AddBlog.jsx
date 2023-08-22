import { Button } from '@mui/material'
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const AddBlog = () => {

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
                                        <label for="productName">Blog Name</label>
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
                                        <label for="productDescription">Blog Description</label>
                                        <ReactQuill
                                    // value={blogDescription}
                                    // onChange={setBlogDescription}
                                    modules={{
                                        toolbar: [
                                            [{ header: [1, 2, 3, false] }],
                                            ['bold', 'italic', 'underline'],
                                            ['link'],
                                            [{ list: 'ordered' }, { list: 'bullet' }],
                                            ['image', 'video'],
                                            ['clean'],
                                             ['code-block'], 
                                        ],
                                    }}
                                />
                                        {/* <textarea class="form-control" id="productDescription" rows="3"></textarea> */}
                                    </div>
                                </div>


                                

                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productCardImgs">Blog Card Image</label>
                                        <input type="file" class="form-control" id="productCardImgs"  />

                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productDetailImgs">Blog Detail Image</label>
                                        <input type="file" class="form-control" id="productDetailImgs"  />

                                    </div>
                                </div>

                               
                              










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

export default AddBlog