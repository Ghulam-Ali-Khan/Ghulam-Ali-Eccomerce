import React from 'react'

const AddCategorey = () => {

 




    return (
        <>

            <div className="main-content add-product-page">

                <div className="page-content">
                    <div className="container-fluid">

                        <div className="card p-4">
                            <div className="row">
                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <label for="productName">Category Name</label>
                                        <input type="text" class="form-control" id="productName" placeholder="Enter name" />

                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productDescription">Category Description</label>
                                        <textarea class="form-control" id="productDescription" rows="3"></textarea>
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

export default AddCategorey;