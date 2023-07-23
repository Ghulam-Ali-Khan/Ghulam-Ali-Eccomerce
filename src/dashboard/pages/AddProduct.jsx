import React from 'react'

const AddProduct = () => {
    return (
        <>

            <div className="main-content">

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


                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productPrice">Product Price</label>
                                        <input type="text" class="form-control" id="productPrice" placeholder="Enter Price" />

                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productQuantity">Product Quantity</label>
                                        <input type="text" class="form-control" id="productQuantity" placeholder="Enter Quantity" />

                                    </div>
                                </div>

                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productCardImgs">Product Card Images</label>
                                        <input type="file" class="form-control" id="productCardImgs" multiple/>

                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                <div class="form-group mt-2">
                                        <label for="productDetailImgs">Product Detail Images</label>
                                        <input type="file" class="form-control" id="productDetailImgs"  multiple/>

                                    </div>
                                </div>



                            </div>
                        </div>


                        AddProduct</div>
                </div>

            </div>


        </>
    )
}

export default AddProduct