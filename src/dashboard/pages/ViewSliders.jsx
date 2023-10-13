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



export default function ViewSliders() {
    const [categorySearch, setCategorySearch] = useState("");
    const [categoryData, setCategoryData] = useState([]);
    const [categoriesData, setCategoriesData] = useState([]);
    const [singleCategory, setSingleCategory] = useState(null);
    const [updateCategory, setUpdateCategory] = useState({
        id: "",
        bannerImage: "",
        cardImage: "",

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


        axios.get(`${url}api/all-slider`)
            .then((response) => {
                console.log(response.data.data);
                setCategoriesData(response.data.data);

            })
            .catch((error) => {
                console.log(error);
            })

    }, []);

    const updateCategoryFun = async () => {




        console.log(updateCategory);




        const formData = new FormData();

        const keys = Object.keys(updateCategory);

        // Use map to append key-value pairs to FormData
        keys.forEach((key) => {



            formData.append(key, updateCategory[key]);



        });


        await axios.put(`${url}api/update-categories`, formData)
            .then((response) => {
                console.log(response.data);

                if (response.data.success) {
                    setUpdateCategory(prev => ({


                        ...prev,

                        bannerImages: "",
                        cardImages: "",

                        description: "",

                        metaDescription: "",
                        metaKeywords: "",
                        metaTitle: "",
                        name: "",


                    }));


                    setOpenUpdate(false);
                    refreshCategoriesData();
                }

            })
            .catch((error) => {
                console.log(error);
            })




    }

    const refreshCategoriesData = () => {


        axios.get(`${url}api/fetch-categories`,
            {
                params: {
                    type: "all", // Send 'type' as a query parameter
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

    }

    const deleteOneCategory = (id) => {


        axios.delete(`${url}api/delete-one-category`, {

            data: { categoryId: id }
        })
            .then((response) => {
                console.log(response.data);

                if (response.data.success) {
                    refreshCategoriesData();
                }

            })
            .catch((error) => {
                console.log(error);
            })


    }


    const fetchedProduct = (id) => {

        // alert(id);


        axios.post(`${url}api/edit-categories`, {

            id: id

        })
            .then((response) => {
                console.log(response.data.data);
                setSingleCategory(response.data.data);
                setUpdateCategory(response.data.data);






            })
            .catch((error) => {
                console.log(error);
            })

    }

    const onChangeUpdateCategory = (e) => {

        setUpdateCategory(prevObj => ({

            ...prevObj,
            [e.target.name]: e.target.value,

        }))


    }

    const updateFiles = (e) => {
        console.log("updateFiles function called");


        setUpdateCategory((prevObj) => ({
            ...prevObj,
            [e.target.name]: e.target.files[0]
        }));
    };


    const handleSearch = () => {

        axios.post(`${url}api/searched-categories`, {
            search: categorySearch
        })
            .then((response) => {
                console.log(response.data);
                setCategoriesData(response.data.data);
            })
            .catch((error) => {

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
                                value={categorySearch}
                                onChange={(e) => {
                                    setCategorySearch(e.target.value)
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

                                    <TableCell align="right">Preview </TableCell>
                                    <TableCell align="right">Actions </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {categoriesData.map((row) => (
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

                                        <TableCell align="right"> <img src={`${url}uploads/sliders/${row.banner}`} alt="" /> </TableCell>
                                        <TableCell align="right"><IconButton className='edit-btn' onClick={() => {
                                            handleOpenUpdate();
                                            fetchedProduct(row._id);
                                        }} ><EditIcon /></IconButton> <IconButton className='delete-btn' onClick={() => deleteOneCategory(row._id)}><DeleteIcon /></IconButton></TableCell>

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
                                                <h2>{singleCategory != null && singleCategory.name}</h2>
                                                <span className='label'>{singleCategory != null && singleCategory.type}</span>
                                            </div>
                                            <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12">
                                                <img src={`${url}uploads/sliders/${singleCategory != null && singleCategory.banner}`} alt="" />
                                            </div>

                                            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                                <span className='label'>Description</span>
                                                <p className='description'>{singleCategory != null && singleCategory.description}</p>
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
                                            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <label for="updateProductName">
                                                        Category Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="updateProductName"
                                                        placeholder="Enter Name"
                                                        name="name"
                                                        value={updateCategory.name}
                                                        onChange={(e) => onChangeUpdateCategory(e)}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                                <div class="form-group">
                                                    <label for="updateProductCategory">
                                                        Category Type
                                                    </label>
                                                    <select
                                                        class="form-control"
                                                        id="updateProductCategory"
                                                        name="type"
                                                        value={updateCategory.type}
                                                        onChange={(e) => onChangeUpdateCategory(e)}
                                                    >
                                                        <option value="product" >Product</option>
                                                        <option value="blog" >Blog</option>



                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 mt-2">

                                                <label for="productDescription">Category Description</label>
                                                <textarea
                                                    class="form-control"
                                                    id="productDescription"
                                                    rows="3"
                                                    name="description"
                                                    value={updateCategory.description}
                                                    onChange={(e) => onChangeUpdateCategory(e)}
                                                ></textarea>
                                            </div>

                                            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                                <div class="form-group mt-2">
                                                    <label for="productCardImgs">Category Card Image</label>
                                                    <input
                                                        type="file"
                                                        class="form-control"
                                                        id="productCardImgs"
                                                        name="cardImage"
                                                        onChange={(e) => updateFiles(e)}


                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                                <div class="form-group mt-2">
                                                    <label for="productCardImgs">Category Banner Images</label>
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
                                                        value={updateCategory.metaTitle}
                                                        onChange={(e) => onChangeUpdateCategory(e)}
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
                                                        value={updateCategory.metaKeywords}
                                                        onChange={(e) => onChangeUpdateCategory(e)}

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
                                                    value={updateCategory.metaDescription}
                                                    onChange={(e) => onChangeUpdateCategory(e)}

                                                ></textarea>
                                            </div>


                                            <div className="justify-content-end d-flex mt-2">
                                                <Button startIcon={<BrowserUpdatedIcon />} variant='contained' onClick={updateCategoryFun}>Update Product</Button>
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