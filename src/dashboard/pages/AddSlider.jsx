import React, { useState } from 'react'
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Alert, Button } from "@mui/material";
import axios from "axios";

const AddSlider = () => {

    const [responseMsg, setResponseMsg] = useState({
        display: false,
        msg: "",
        color: "success",
      });
    const [sliderData, setSliderData] = useState({
        name:"",
        description:"",
        banner:"",
      });
    const url = "http://localhost:5000/";

    const changeValues = (e) => {

        setSliderData((prev) => ({

            ...prev,
            [e.target.name]: e.target.value,

        }));

    }


    const changeFiles = (e) => {

        setSliderData((prev) => ({

            ...prev,
            [e.target.name]: e.target.files[0],

        }));

    }


    const scrollToTop = () => {
        console.log("Scrolling to top...");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    const addSliderFun = async () => {

        const formData = new FormData();

        const keys = Object.keys(sliderData);

        // Use map to append key-value pairs to FormData
        keys.forEach((key) => {


            formData.append(key, sliderData[key]);

        });



        await axios.post(`${url}api/add-slider`, formData, {
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
                        msg: "Slider Created Succesfully",
                        color: "success",
                      }));


                      setSliderData({
                        name:"",
                        description:"",
                        banner:"",
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
                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <label for="productName">Slider Name</label>
                                        <input type="text" class="form-control" id="productName" placeholder="Enter name" value={sliderData.name} name='name' onChange={(e) => {
                                            changeValues(e);
                                        }} />

                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productDescription">Slider Description</label>
                                        <textarea class="form-control" id="productDescription" rows="3" name='description' value={sliderData.description} onChange={(e) => {
                                            changeValues(e);
                                        }}></textarea>
                                    </div>
                                </div>


                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                    <div class="form-group mt-2">
                                        <label for="productDetailImgs">Slider Image</label>
                                        <input type="file" class="form-control" id="productDetailImgs" name='banner'
                                            onChange={(e) => {
                                                changeFiles(e);
                                            }}
                                        />

                                    </div>
                                </div>


                                <div
                                    className="col-lg-12 col-xl-12 col-md-12 col-sm-12 mt-2"
                                    style={{ display: "flex", justifyContent: "end" }}
                                >
                                    <Button
                                        onClick={addSliderFun}
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

export default AddSlider;