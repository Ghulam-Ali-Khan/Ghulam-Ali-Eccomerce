import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton, TextField } from '@mui/material';
import { Modal } from '@mui/material';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';



let url = "http://localhost:5000/";



export default function ViewProducts() {
  const [productSearch, setProductSearch] = useState("");
  const [productsData, setProductsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);
  const [updateProduct, setUpdateProduct] = useState({
    id: "",
    bannerImages: [],
    cardImages: [],
    category: "",
    description: "",
    discount: 0,
    metaDescription: "",
    metaKeywords: "",
    metaTitle: "",
    name: "",
    price: 0,
    purchasePrice: 0,
    quantity: 0,
    salePrice: 0,

  });

  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);


  useEffect(() => {

    axios.get(`${url}api/fetched-products`)
      .then((response) => {
        console.log(response.data.products);

        setProductsData(response.data.products);


      })
      .catch((error) => {
        console.log(error);
      });


    axios.get(`${url}api/fetch-categories`,
      {
        params: {
          type: "product", // Send 'type' as a query parameter
        },
      }
    )
      .then((response) => {
        console.log(response.data.data);
        setCategoriesData(response.data.data);

      })
      .catch((error) => {
        console.log(error);
      })

  }, []);

  const updateProductFun = async () => {




    console.log(updateProduct);




    const formData = new FormData();

    const keys = Object.keys(updateProduct);

    // Use map to append key-value pairs to FormData
    keys.forEach((key) => {

      if (key == "cardImages" || key == "bannerImages") {
        updateProduct[key].forEach((file) => {
          formData.append(key, file);
        });
      }
      else {
        formData.append(key, updateProduct[key]);
      }
    });


    await axios.put(`${url}api/update-products`, formData)
      .then((response) => {
        console.log(response.data);

        if (response.data.success) {
          setUpdateProduct(prev => ({


            ...prev,

            bannerImages: [],
            cardImages: [],
            category: "",
            description: "",
            discount: 0,
            metaDescription: "",
            metaKeywords: "",
            metaTitle: "",
            name: "",
            price: 0,
            purchasePrice: 0,
            quantity: 0,
            salePrice: 0,

          }));


          setOpenUpdate(false);
          refreshProductsData();
        }

      })
      .catch((error) => {
        console.log(error);
      })




  }

  const refreshProductsData = () => {

    axios.get(`${url}api/fetched-products`)
      .then((response) => {
        console.log(response.data.products);

        setProductsData(response.data.products);

      })
      .catch((error) => {
        console.log(error);
      })

  }

  const deleteOneProduct = (id) => {


    axios.delete(`${url}api/delete-one-product`, {

      data: { productId: id }
    })
      .then((response) => {
        console.log(response.data);

        if (response.data.success) {
          refreshProductsData();
        }

      })
      .catch((error) => {
        console.log(error);
      })


  }


  const fetchedProduct = (id) => {

    // alert(id);


    axios.post(`${url}api/edit-products`, {
      data: {
        id: id
      }
    })
      .then((response) => {
        console.log(response.data.data);
        setSingleProduct(response.data.data);
        setUpdateProduct(response.data.data);


        setUpdateProduct((prev) => ({
          ...prev,
          cardImages: [],
          bannerImages: [],
          category: prev.category._id,
        }));



      })
      .catch((error) => {
        console.log(error);
      })

  }

  const onChangeUpdateProduct = (e) => {

    setUpdateProduct(prevObj => ({

      ...prevObj,
      [e.target.name]: e.target.value,

    }))


  }

  const updateFiles = (e) => {
    console.log("updateFiles function called");
    const files = e.target.files;

    // Create new arrays to update state
    const updatedCardImages = [...updateProduct.cardImages];
    const updatedBannerImages = [...updateProduct.bannerImages];

    for (let i = 0; i < files.length; i++) {
      if (e.target.name === "cardImages") {
        updatedCardImages.push(files[i]);
      } else if (e.target.name === "bannerImages") {
        updatedBannerImages.push(files[i]);
      }
    }

    console.log("Updated cardImages:", updatedCardImages);
    console.log("Updated bannerImages:", updatedBannerImages);

    setUpdateProduct((prevObj) => ({
      ...prevObj,
      cardImages: updatedCardImages,
      bannerImages: updatedBannerImages,
    }));
  };


  const handleSearch=()=>{

    axios.post(`${url}api/search-products`,{
      search:productSearch
    })
    .then((response)=>{
      console.log(response.data);
      setProductsData(
        response.data.products
      );
    })
    .catch((error)=>{

      console.log(error);

    })


  }

  return (

    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">




          <TableContainer component={Paper} className='product-table'>
            <div className="justify-content-end d-flex gap search-area-table p-2">
              <input
                type="text"
                class="form-control"
                id="updateProductName"
                placeholder="Enter Search"
                name="search"
    value={productSearch}
                onChange={(e) => { 
                  setProductSearch(e.target.value)
                }}
              />

              <button className='btn ' onClick={handleSearch}>
                Search
              </button>
            </div>

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Retail Price </TableCell>
                  <TableCell align="right">Discount </TableCell>
                  <TableCell align="right">Price </TableCell>

                  <TableCell align="right">Stock </TableCell>
                  <TableCell align="right">Card Images </TableCell>
                  <TableCell align="right">Actions </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productsData.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                  >
                    <TableCell className='product-name' component="th" scope="row" onClick={() => {
                      handleOpen();
                      fetchedProduct(row._id);
                    }}>
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right">{row.purchasePrice}</TableCell>
                    <TableCell align="right">{row.discount}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    <TableCell align="right"> <img src={`${url}uploads/products/${row.cardImages[0]}`} alt="" /> </TableCell>
                    <TableCell align="right"><IconButton className='edit-btn' onClick={() => {
                      handleOpenUpdate();
                      fetchedProduct(row._id);
                    }} ><EditIcon /></IconButton> <IconButton className='delete-btn' onClick={() => deleteOneProduct(row._id)}><DeleteIcon /></IconButton></TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>



          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className='table-modal'
          >


            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-8 col-md-12 col-sm-12">
                  <div className="card p-4 " style={{ marginTop: "5rem" }}>
                    <div className="justify-content-end d-flex" style={{ minWidth: "100%" }}>
                      <IconButton onClick={handleClose}><CloseIcon /></IconButton>
                    </div>
                    <div className="row">
                      <div className="col-lg-8 col-xl-8 col-md-8 col-sm-12">
                        <h2>{singleProduct != null && singleProduct.name}</h2>
                        <span className='label'>{singleProduct != null && singleProduct.category.name}</span>
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12">
                        <img src={`${url}uploads/products/${singleProduct != null && singleProduct.cardImages[0]}`} alt="" />
                      </div>

                      <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                        <span className='label'>Description</span>
                        <p className='description'>{singleProduct != null && singleProduct.description}</p>
                      </div>

                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                        <span className='label'>Retail Price</span>
                        <p>{singleProduct != null && singleProduct.purchasePrice}</p>
                      </div>
                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                        <span className='label'>Discount</span>
                        <p>{singleProduct != null && singleProduct.discount}</p>
                      </div>
                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                        <span className='label'>Price</span>
                        <p>{singleProduct != null && singleProduct.price}</p>
                      </div>
                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                        <span className='label'>Quantity</span>
                        <p>{singleProduct != null && Math.ceil(parseInt(singleProduct.quantity))}</p>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>




          </Modal>



          <Modal
            open={openUpdate}
            onClose={handleCloseUpdate}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className='table-modal'
            style={{ overflowY: "scroll" }}
          >


            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-8 col-md-12 col-sm-12">
                  <div className="card p-4 " style={{ marginTop: "5rem" }}>
                    <div className="justify-content-end d-flex" style={{ minWidth: "100%" }}>
                      <IconButton onClick={handleCloseUpdate}><CloseIcon /></IconButton>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label for="updateProductName">
                            Product Name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="updateProductName"
                            placeholder="Enter Name"
                            name="name"
                            value={updateProduct.name}
                            onChange={(e) => onChangeUpdateProduct(e)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label for="updateProductCategory">
                            Product Category
                          </label>
                          <select
                            class="form-control"
                            id="updateProductCategory"
                            name="category"
                            value={updateProduct.category}
                            onChange={(e) => onChangeUpdateProduct(e)}
                          >
                            <option value="" >Choose One</option>

                            {
                              categoriesData.map((item, index) => (
                                <option value={item._id} key={index}>{item.name}</option>
                              ))
                            }

                          </select>
                        </div>
                      </div>

                      <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 mt-2">

                        <label for="productDescription">Product Description</label>
                        <textarea
                          class="form-control"
                          id="productDescription"
                          rows="3"
                          name="description"
                          value={updateProduct.description}
                          onChange={(e) => onChangeUpdateProduct(e)}
                        ></textarea>
                      </div>

                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                        <div class="form-group mt-2">
                          <label for="productCardImgs">Product Card Images</label>
                          <input
                            type="file"
                            class="form-control"
                            id="productCardImgs"
                            name="cardImages"
                            onChange={(e) => updateFiles(e)}

                            multiple
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                        <div class="form-group mt-2">
                          <label for="productCardImgs">Product Banner Images</label>
                          <input
                            type="file"
                            class="form-control"
                            id="productCardImgs"
                            name="bannerImages"
                            onChange={(e) => updateFiles(e)}
                            multiple
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-2">
                        <div class="form-group">
                          <label for="updateProductName">
                            Retail Price
                          </label>
                          <input
                            type="number"


                            class="form-control"
                            id="updateProductName"
                            placeholder="Enter Price"
                            name="purchasePrice"
                            value={updateProduct.purchasePrice}
                            onChange={(e) => onChangeUpdateProduct(e)}

                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-2">
                        <div class="form-group">
                          <label for="updateProductName">
                            Selling Price
                          </label>
                          <input
                            type="number"


                            class="form-control"
                            id="updateProductName"
                            placeholder="Enter Price"
                            name="salePrice"
                            value={updateProduct.salePrice}

                            onChange={(e) => {
                              setUpdateProduct(prevObj => ({
                                ...prevObj,
                                [e.target.name]: e.target.value,
                                price: e.target.value - e.target.value * (prevObj.discount / 100),
                              }))
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-2">
                        <div class="form-group">
                          <label for="updateProductName">
                            Discount
                          </label>
                          <input
                            type="number"


                            class="form-control"
                            id="updateProductName"
                            placeholder="Enter Price"
                            name="discount"
                            value={updateProduct.discount}
                            onChange={(e) => {

                              setUpdateProduct(prevObj => ({
                                ...prevObj,
                                [e.target.name]: e.target.value,
                                price: prevObj.salePrice - prevObj.salePrice * (e.target.value / 100)
                              }))


                            }}
                          />
                        </div>
                      </div>


                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-2">
                        <div class="form-group">
                          <label for="updateProductName">
                            Final Price
                          </label>
                          <input
                            type="number"


                            class="form-control"
                            id="updateProductName"
                            placeholder="Enter Price"
                            name="price"
                            value={updateProduct.price}
                            onChange={(e) => onChangeUpdateProduct(e)}
                            disabled
                          />
                        </div>
                      </div>




                      <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 mt-2">
                        <div class="form-group">
                          <label for="updateProductName">
                            Quantity
                          </label>
                          <input
                            type="number"


                            class="form-control"
                            id="updateProductName"
                            placeholder="Enter Quantity"
                            name="quantity"
                            value={updateProduct.quantity}
                            onChange={(e) => onChangeUpdateProduct(e)}
                          />
                        </div>
                      </div>


                      <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 mt-2">
                        <h2>Seo Details</h2>
                      </div>
                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-2" >
                        <div class="form-group">
                          <label for="updateProductName">
                            Meta Title
                          </label>
                          <input
                            type="text"


                            class="form-control"
                            id="updateProductName"
                            placeholder="Enter Price"
                            name="metaTitle"
                            value={updateProduct.metaTitle}
                            onChange={(e) => onChangeUpdateProduct(e)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-2">
                        <div class="form-group">
                          <label for="updateProductName">
                            Meta Keywords
                          </label>
                          <input
                            type="text"


                            class="form-control"
                            id="updateProductName"
                            placeholder="Enter Price"
                            name="metaKeywords"
                            value={updateProduct.metaKeywords}
                            onChange={(e) => onChangeUpdateProduct(e)}

                          />
                        </div>
                      </div>


                      <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 mt-2">
                        <label for="productDescription">Meta Description</label>
                        <textarea
                          class="form-control"
                          id="productDescription"
                          rows="3"
                          name="metaDescription"
                          value={updateProduct.metaDescription}
                          onChange={(e) => onChangeUpdateProduct(e)}

                        ></textarea>
                      </div>


                      <div className="justify-content-end d-flex mt-2">
                        <Button startIcon={<BrowserUpdatedIcon />} variant='contained' onClick={updateProductFun}>Update Product</Button>
                      </div>


                    </div>

                  </div>
                </div>

              </div>
            </div>




          </Modal>



        </div></div></div>
  );
}