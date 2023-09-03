import React from 'react'

const AddSlider = () => {

 




    return (
        <>

            <div className="main-content add-product-page">

                <div className="page-content">
                    <div className="container-fluid">

                        <div className="card p-4">
                            <div className="row">
                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <label for="productName">Slider Name</label>
                                        <input type="text" class="form-control" id="productName" placeholder="Enter name" />

                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productDescription">Slider Description</label>
                                        <textarea class="form-control" id="productDescription" rows="3"></textarea>
                                    </div>
                                </div>


                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productDetailImgs">Slider Image</label>
                                        <input type="file" class="form-control" id="productDetailImgs"  />

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

export default AddSlider;