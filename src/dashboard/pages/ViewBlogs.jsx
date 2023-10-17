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
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


let url = "http://localhost:5000/";



export default function ViewBlogs() {
  const [productSearch, setProductSearch] = useState("");
  const [blogsData, setBlogsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [singleBlog, setSingleBlog] = useState({
    _id: "",
    bannerImage: "",
    cardImage: "",
    category: "",
    description: "",

    metaDescription: "",
    metaKeywords: "",
    metaTitle: "",
    name: "",
    

  });
  const [updateBlog, setUpdateBlog] = useState({
    _id: "",
    bannerImage: "",
    cardImage: "",
    category: "",
    description: "",

    metaDescription: "",
    metaKeywords: "",
    metaTitle: "",
    name: "",
    

  });

  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);


  useEffect(() => {

    axios.get(`${url}api/fetched-blogs`)
      .then((response) => {
        console.log(response.data.data);

        setBlogsData(response.data.data);


      })
      .catch((error) => {
        console.log(error);
      });


    axios.get(`${url}api/fetch-categories`,
      {
        params: {
          type: "blog", // Send 'type' as a query parameter
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

  const updateBlogFun = async () => {




    console.log(updateBlog);




    const formData = new FormData();

    const keys = Object.keys(updateBlog);

    // Use map to append key-value pairs to FormData
    keys.forEach((key) => {

     
        formData.append(key, updateBlog[key]);
     
    });

    await axios.put(`${url}api/update-blog`, formData)
      .then((response) => {
        console.log(response.data);

        if (response.data.success) {
          setUpdateBlog(prev => ({


            ...prev,

            
              _id: "",
              bannerImage: "",
              cardImage: "",
              category: "",
              description: "",
          
              metaDescription: "",
              metaKeywords: "",
              metaTitle: "",
              name: "",
              
          
            

          }));


          setOpenUpdate(false);
          refreshBlogsData();
        }

      })
      .catch((error) => {
        console.log(error);
      });




  }
  
  const refreshBlogsData = () => {

    axios.get(`${url}api/fetched-blogs`)
      .then((response) => {
        console.log(response.data.data);

        setBlogsData(response.data.data);

      })
      .catch((error) => {
        console.log(error);
      })

  }

  const deleteOneBlog = (id) => {


    axios.delete(`${url}api/delete-one-blog`, {

      data: { blogId: id }
    })
      .then((response) => {
        console.log(response.data);

        if (response.data.success) {
          refreshBlogsData();
        }

      })
      .catch((error) => {
        console.log(error);
      })


  }


  const fetchedBlog = (id) => {

    // alert(id);


    axios.post(`${url}api/edit-blog`, {
      data: {
        id: id
      }
    })
      .then((response) => {
        console.log(response.data.data);
        setSingleBlog(response.data.data);
        setUpdateBlog(response.data.data);


        setUpdateBlog((prev) => ({
          ...prev,
          cardImage: "",
          bannerImage:"",
          category: prev.category!= null? prev.category._id: null ,
        }));



      })
      .catch((error) => {
        console.log(error);
      })

  }

  const onChangeUpdateBlog = (e) => {

    setUpdateBlog(prevObj => ({

      ...prevObj,
      [e.target.name]: e.target.value,

    }))


  }

  const updateFiles = (e) => {
    console.log("updateFiles function called");
    
     
    
    
 

    setUpdateBlog((prevObj) => ({
      ...prevObj,
        [e.target.name]:e.target.files[0]
    }));
  };


  const handleSearch=()=>{

    axios.post(`${url}api/searched-blogs`,{
      search:productSearch
    })
    .then((response)=>{
      console.log(response.data);
      setBlogsData(
        response.data.data
      );
    })
    .catch((error)=>{

      console.log(error);

    })


  }

  const handleOnChangeValuesDescription=(html)=>{

    console.log(updateBlog);
    
    setUpdateBlog(prevObj=>({
        ...prevObj,
        description:html,
    }));

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
                  <TableCell align="right">Category</TableCell>
                  
                  <TableCell align="right">Card Images </TableCell>
                  <TableCell align="right">Actions </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {blogsData.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                  >
                    <TableCell className='product-name' component="th" scope="row" onClick={() => {
                      handleOpen();
                      fetchedBlog(row._id);
                    }}>
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.category !=null? row.category.name: "none"}</TableCell>
                    
                    <TableCell align="right"> <img src={`${url}uploads/blogs/${row.cardImage}`} alt="" /> </TableCell>
                    <TableCell align="right"><IconButton className='edit-btn' onClick={() => {
                      handleOpenUpdate();
                      fetchedBlog(row._id);
                    }} ><EditIcon /></IconButton> <IconButton className='delete-btn' onClick={() => deleteOneBlog(row._id)}><DeleteIcon /></IconButton></TableCell>

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
                        <h2>{singleBlog != null && singleBlog.name}</h2>
                        <span className='label'>{ singleBlog.category !=null? singleBlog.category.name: "none" }</span>
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12">
                        <img src={`${url}uploads/blogs/${singleBlog.cardImage != null && singleBlog.cardImage}`} alt="" />
                      </div>

                      <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 mt-2">
                        <span className='label'>Description</span>
                        <p className='description' dangerouslySetInnerHTML={{ __html: singleBlog.description != null && singleBlog.description}} ></p>
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
                            Blog Name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="updateProductName"
                            placeholder="Enter Name"
                            name="name"
                            value={updateBlog.name}
                            onChange={(e) => onChangeUpdateBlog(e)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label for="updateProductCategory">
                            Blog Category
                          </label>
                          <select
                            class="form-control"
                            id="updateProductCategory"
                            name="category"
                            value={updateBlog.category}
                            onChange={(e) => onChangeUpdateBlog(e)}
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

                        <label for="productDescription">Blog Description</label>
                        
                        <ReactQuill
                                
                                value={updateBlog.description}
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
                      </div>

                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                        <div class="form-group mt-2">
                          <label for="productCardImgs">Blog Card Image</label>
                          <input
                            type="file"
                            class="form-control"
                            id="productCardImgs"
                            name="cardImage"
                            onChange={(e) => updateFiles(e)}

                            multiple
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                        <div class="form-group mt-2">
                          <label for="productCardImgs">Blog Banner Image</label>
                          <input
                            type="file"
                            class="form-control"
                            id="productCardImgs"
                            name="bannerImage"
                            onChange={(e) => updateFiles(e)}
                            
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
                            value={updateBlog.metaTitle}
                            onChange={(e) => onChangeUpdateBlog(e)}
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
                            value={updateBlog.metaKeywords}
                            onChange={(e) => onChangeUpdateBlog(e)}

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
                          value={updateBlog.metaDescription}
                          onChange={(e) => onChangeUpdateBlog(e)}

                        ></textarea>
                      </div>


                      <div className="justify-content-end d-flex mt-2">
                        <Button startIcon={<BrowserUpdatedIcon />} variant='contained' onClick={updateBlogFun}>Update Blog</Button>
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