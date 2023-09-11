import React, { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Button, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const UpdateHeader = () => {
  const [headerDetails, setHeaderDetails] = useState({
    name: "",
    logo: null,
    social: [],
  });
  const [responseMsg, setResponseMsg] = useState({
    display: false,
    msg: "",
    color: "success",
  });

  const scrollToTop = () => {
    console.log("Scrolling to top...");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

//   const convertImageToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();

//       reader.onload = () => {
//         resolve(reader.result);
//       };

//       reader.onerror = (error) => {
//         reject(error);
//       };

//       reader.readAsDataURL(file);
//     });
//   };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/fetched-header")
      .then((response) => {
        console.log(response.data);



        
        
     

        console.log(response.data.data[0]);

        setHeaderDetails(response.data.data[0]);
      })
      .catch((error) => {
        console(error);
      });
  }, []);


  const updateValues = (e) => {

    console.log("Change Alert : "+ e.target.value);


    const updatedDetails = {
      ...headerDetails,
      [e.target.name]: e.target.value,
    };
    setHeaderDetails(updatedDetails);
  };
  
  const updateFiles = (e) => {
    const updatedDetails = {
      ...headerDetails,
      [e.target.name]: e.target.files[0],
    };
    setHeaderDetails(updatedDetails);
  };
  

  //   const updateSocialFiles = async (e) => {

  //     const base64Code = await convertImageToBase64(e.target.files[0]);

  //     await setHeaderDetails((prevValue) => ({
  //       ...prevValue,
  //       [e.target.name]: e.target.files[0],
  //     }));

  //     // formData.append(e.target.name, e.target.files[0]);
  //   };

  const updateHeaderFun = async () => {
    const formData = new FormData();

    // Convert the keys of headerDetails to an array
    const keys = Object.keys(headerDetails);
  
    // Use map to append key-value pairs to FormData
    keys.forEach((key) => {
      if (key === "social") {
        const socialArray = headerDetails.social.map((socialObj) =>
        formData.append(key+'[]', JSON.stringify(socialObj))
        );
  
        

      } else {
        formData.append(key, headerDetails[key]);
      }
    });

    await axios
      .put("http://localhost:5000/api/update-header", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // Handle the success response from the server
        console.log("Response from server:", response.data);

        if (response.data.success) {
          setResponseMsg((prevObj) => ({
            ...prevObj,
            display: true,
            msg: "Data Saved Succesfully",
            color: "success",
          }));

          setHeaderDetails((prevObj) => ({
            ...prevObj,
            name: "",
            logo: null,
            social: [],
          }));

          scrollToTop();
        } else {
          scrollToTop();

          setResponseMsg((prevObj) => ({
            ...prevObj,
            display: true,
            msg: "Data Save Failed (Something went wrong)",
            color: "error",
          }));
        }

        setTimeout(() => {
          setResponseMsg((prevObj) => ({
            ...prevObj,
            display: false,
          }));
        }, 5000);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error sending FormData:", error);
        scrollToTop();

        setResponseMsg((prevObj) => ({
          ...prevObj,
          display: true,
          msg: "Category Creation Failed (Something went wrong)" + error,
          color: "error",
        }));

        setTimeout(() => {
          setResponseMsg((prevObj) => ({
            ...prevObj,
            display: false,
          }));
        }, 5000);
      });
  };

  const createSocial = () => {
    const newSocialObject = {
      name: "",
      icon: null,
      url: "",
    };
  
    setHeaderDetails((prev) => ({
      ...prev,
      social: [...prev.social, newSocialObject],
    }));
  };
  

  const deleteSocial = (index) => {
    let tempHeaderDetails = [...headerDetails.social];

    const dataAfterDeletion = tempHeaderDetails.filter((_, i) => i !== index);

    setHeaderDetails((prev) => ({
      ...prev,
      social: dataAfterDeletion,
    }));
  };

  const updateSocialValues = (e, index) => {


    console.log("Change Alert : "+ e.target.value);


    setHeaderDetails((prev) => {
      const updatedSocial = [...prev.social];
      updatedSocial[index] = {
        ...updatedSocial[index],
        [e.target.name]: e.target.value,
      };
      return {
        ...prev,
        social: updatedSocial,
      };
    });
  };
  



  console.log(headerDetails);

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
                    <label for="name"> Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter name"
                      name="name"
                      onChange={updateValues}
                      value={headerDetails.name}
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                  <div class="form-group mt-2">
                    <label for="logo">Logo</label>
                    <input
                      type="file"
                      class="form-control"
                      id="logo"
                      name="logo"
                      onInput={updateFiles}
                    />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                    <h3 className=""> Social Icons</h3>
                  </div>

                  <div
                    className="col-lg-6 col-xl-6 col-md-6 col-sm-12 "
                    style={{ display: "flex", justifyContent: "end" }}
                  >
                    <IconButton
                      className="add-btn-green"
                      onClick={createSocial}
                    >
                      <AddCircleIcon />
                    </IconButton>
                  </div>
                </div>

                {headerDetails.social.map((item, index) => (
                  <div className="border-card row" key={index}>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label for="icon-name">Icon Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="icon-name"
                          placeholder="Enter name"
                          name="name"
                          value={item.name}
                          onInput={(e) => updateSocialValues(e, index)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                      <div class="form-group ">
                        <label for="icon-logo">Icon Logo</label>
                        <input
                          type="text"
                          className="form-control"
                          id="icon-logo"
                          name="icon"
                          placeholder="Logo Url"
                          value={item.icon}
                          onInput={(e) => updateSocialValues(e, index)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                      <div class="form-group">
                        <label for="icon-url">Icon Url</label>
                        <input
                          type="text"
                          class="form-control"
                          id="icon-url"
                          placeholder="Enter url"
                          name="url"
                          value={item.url}
                          onInput={(e) => updateSocialValues(e, index)}
                        />
                      </div>
                    </div>

                    <div
                      className="col-lg-12 col-xl-12 col-md-12 col-sm-12"
                      style={{ display: "flex", justifyContent: "end" }}
                    >
                      <IconButton
                        className="red-btn-color"
                        onClick={() => deleteSocial(index)}
                      >
                        <DeleteForeverIcon />
                      </IconButton>
                    </div>
                  </div>
                ))}

                <div
                  className="col-lg-12 col-xl-12 col-md-12 col-sm-12 mt-2"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <Button
                    onClick={updateHeaderFun}
                    variant="contained"
                    className="crud-submit-btns"
                    startIcon={<AddCircleIcon />}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateHeader;
