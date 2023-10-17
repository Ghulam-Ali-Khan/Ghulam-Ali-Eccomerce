

import React, { useEffect, useState } from 'react';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Alert, Button } from "@mui/material";
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const AddBlog = () => {

   const [blogData, setBlogData] = useState({
    name:"",
    description:"",
    category:"",
    metaTitle:"",
    metaDescription:"",
    metaKeywords:""
   });

   const [responseMsg, setResponseMsg] = useState({
    display: false,
    msg: "",
    color: "success",
  });
  const url = "http://localhost:5000/";
   const [fetchedCategories, setFetchedCategories] = useState([]);


    const scrollToTop = () => {
        console.log("Scrolling to top...");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    

    useEffect(()=>{

        axios.get("http://127.0.0.1:5000/api/fetch-categories",{
            params:{
                type:"blog",
            }
        })
        .then((response)=>{
            console.log('category', response.data.data);

            setFetchedCategories(response.data.data);
        })
        .catch(error=>{
            console.log(`Error ${error}`);
        })

    },[])

  
const handleOnChangeValues=(e)=>{

    console.log(blogData);

    setBlogData(prevObj=>({
        ...prevObj,
        [e.target.name]:e.target.value
    }));

}
const handleOnChangeValuesDescription=(html)=>{

    console.log(blogData);

    setBlogData(prevObj=>({
        ...prevObj,
        description:html,
    }));

}
const handleOnChangeFiles=(e)=>{

    console.log(blogData);

    setBlogData(prevObj=>({
        ...prevObj,
        [e.target.name]:e.target.files[0],
    }));

}


const addBlogFun = async () => {

    const formData = new FormData();

    const keys = Object.keys(blogData);

    // Use map to append key-value pairs to FormData
    keys.forEach((key) => {


        formData.append(key, blogData[key]);

    });



    await axios.post(`${url}api/add-blog`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
        .then((response) => {
            console.log(response.data);

            if (response.data.success) {
                scrollToTop();

                setResponseMsg((prevObj) => ({
                    ...prevObj,
                    display: true,
                    msg: "Blog Created Succesfully",
                    color: "success",
                  }));


                  setBlogData({
                    name:"",
                    description:"",
                    category:"",
                    metaTitle:"",
                    metaDescription:"",
                    metaKeywords:""
                  });

                setTimeout(()=>{
                    setResponseMsg((prevObj) => ({
                        ...prevObj,
                        display: false,
                        
                      }));
                },5000)

            }
        })
        .catch((error) => {
            console.log(error);
            setResponseMsg((prevObj) => ({
                ...prevObj,
                display: true,
                msg: error,
                color: "danger",
              }));

              

              setTimeout(()=>{
                setResponseMsg((prevObj) => ({
                    ...prevObj,
                    display: false,
                    
                  }));
            },5000);
        });


}



    return (
        <>

            <div className="main-content add-product-page">

                <div className="page-content">
                    <div className="container-fluid">
                    
                    
                    {responseMsg.display && (
                            <Alert
                                variant="filled"
                                severity={responseMsg.color}
                                sx={{ marginBottom: "1rem" }}
                            >
                                {responseMsg.msg}
                            </Alert>
                        )}

                        <div className="card p-4">
                            <div className="row">
                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="productName">Blog Name</label>
                                        <input type="text" class="form-control" id="productName" placeholder="Enter name" name='name' value={blogData.name} onChange={(e)=>{handleOnChangeValues(e)}} />

                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 ">
                                    <div class="form-group">
                                        <label for="productCategory">Category</label>
                                        <select class="form-control" id="productCategory" name='category' onChange={(e)=>{handleOnChangeValues(e)}} >
                                            <option>Choose one option</option>
                                           
                                           {
                                            fetchedCategories.map(item=>(
                                                <option value={item._id}>{item?.name}</option>
                                            ))
                                           }


                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productDescription">Blog Description</label>
                                        <ReactQuill
                                
                                    value={blogData.description}
                                    onChange={handleOnChangeValuesDescription}
                                 
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
                                        <input type="file" class="form-control" id="productCardImgs" name='cardImage' onChange={(e)=>{handleOnChangeFiles(e)}}   />

                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productDetailImgs">Blog Detail Image</label>
                                        <input type="file" class="form-control" id="productDetailImgs"  name='bannerImage' onChange={(e)=>{handleOnChangeFiles(e)}} />

                                    </div>
                                </div>

                               
                              










<h3 className='mt-4'> Seo Area</h3>


                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="metaTitle">Meta Title</label>
                                        <input type="text" class="form-control" id="metaTitle" placeholder="Enter Meta" name='metaTitle' value={blogData.metaTitle} onChange={(e)=>{handleOnChangeValues(e)}}/>

                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 ">
                                    <div class="form-group">
                                        <label for="metaTags">Meta Tags</label>
                                        <input type="text" class="form-control" id="metaTags" placeholder="Enter Tags" name='metaKeywords' value={blogData.metaKeywords} onChange={(e)=>{handleOnChangeValues(e)}} />

                                    </div>
                                </div>

                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="metaDescription">Meta Description</label>
                                        <textarea class="form-control" id="metaDescription" rows="3" name='metaDescription' value={blogData.metaDescription} onChange={(e)=>{handleOnChangeValues(e)}}></textarea>
                                    </div>
                                </div>

                                <div
                                    className="col-lg-12 col-xl-12 col-md-12 col-sm-12 mt-2"
                                    style={{ display: "flex", justifyContent: "end" }}
                                >
                                    <Button
                                        onClick={addBlogFun}
                                        variant="contained"
                                        className="crud-submit-btns"
                                        startIcon={<AddCircleIcon />}
                                    >
                                        Create
                                    </Button>
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