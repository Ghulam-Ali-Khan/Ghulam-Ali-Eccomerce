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
    const [sliderSearch, setSliderSearch] = useState("");
    const [categoryData, setCategoryData] = useState([]);
    const [slidersData, setSlidersData] = useState([]);
    const [singleSlider, setSingleSlider] = useState(null);
    const [updateSlider, setUpdateSlider] = useState({
        id: "",
        
        banner: "",

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
                setSlidersData(response.data.data);

            })
            .catch((error) => {
                console.log(error);
            })

    }, []);

    const updateSliderFun = async () => {




        console.log(updateSlider);




        const formData = new FormData();

        const keys = Object.keys(updateSlider);

        // Use map to append key-value pairs to FormData
        keys.forEach((key) => {



            formData.append(key, updateSlider[key]);



        });


        await axios.put(`${url}api/update-slider`, formData)
            .then((response) => {
                console.log(response.data);

                if (response.data.success) {
                    setUpdateSlider(prev => ({


                        ...prev,

                        banner: "",
                    

                        description: "",

                        metaDescription: "",
                        metaKeywords: "",
                        metaTitle: "",
                        name: "",


                    }));


                    setOpenUpdate(false);
                    refreshSlidersData();
                }

            })
            .catch((error) => {
                console.log(error);
            })




    }

    const refreshSlidersData = () => {


        axios.get(`${url}api/all-slider`)
            .then((response) => {
                console.log(response.data.data);
                setSlidersData(response.data.data);

            })
            .catch((error) => {
                console.log(error);
            })

    }

    const deleteOneSlider = (id) => {


        axios.delete(`${url}api/delete-one-slider`, {

            data: { sliderId: id }
        })
            .then((response) => {
                console.log(response.data);

                if (response.data.success) {
                    refreshSlidersData();
                }

            })
            .catch((error) => {
                console.log(error);
            })


    }


    const fetchedSlider = (id) => {

        // alert(id);


        axios.post(`${url}api/edit-slider`, {
            id: id
        })
            .then((response) => {
                console.log(response.data.data);
                setSingleSlider(response.data.data);
                setUpdateSlider(response.data.data);






            })
            .catch((error) => {
                console.log(error);
            })

    }

    const onChangeUpdateSlider = (e) => {

        setUpdateSlider(prevObj => ({

            ...prevObj,
            [e.target.name]: e.target.value,

        }))

        console.log(updateSlider);

    }

    const updateFiles = (e) => {
        console.log("updateFiles function called");


        setUpdateSlider((prevObj) => ({
            ...prevObj,
            [e.target.name]: e.target.files[0]
        }));
    };


    const handleSearch = () => {

        axios.post(`${url}api/search-sliders`, {
            search: sliderSearch
        })
            .then((response) => {
                console.log(response.data);
                setSlidersData(response.data.data);
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
                                value={sliderSearch}
                                onChange={(e) => {
                                    setSliderSearch(e.target.value)
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
                                {slidersData.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                                    >
                                        <TableCell className='product-name' component="th" scope="row" onClick={() => {
                                            handleOpen();
                                            fetchedSlider(row._id);
                                        }}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.description}</TableCell>

                                        <TableCell align="right"> <img src={`${url}uploads/sliders/${row.banner}`} alt="" /> </TableCell>
                                        <TableCell align="right"><IconButton className='edit-btn' onClick={() => {
                                            handleOpenUpdate();
                                            fetchedSlider(row._id);
                                        }} ><EditIcon /></IconButton> <IconButton className='delete-btn' onClick={() => deleteOneSlider(row._id)}><DeleteIcon /></IconButton></TableCell>

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
                                                <h2>{singleSlider != null && singleSlider.name}</h2>
                                                <span className='label'>{singleSlider != null && singleSlider.type}</span>
                                            </div>
                                            <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12">
                                                <img src={`${url}uploads/sliders/${singleSlider != null && singleSlider.banner}`} alt="" />
                                            </div>

                                            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                                <span className='label'>Description</span>
                                                <p className='description'>{singleSlider != null && singleSlider.description}</p>
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
                                            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <label for="updateProductName">
                                                        Slider Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="updateProductName"
                                                        placeholder="Enter Name"
                                                        name="name"
                                                        value={updateSlider.name}
                                                        onChange={(e) => onChangeUpdateSlider(e)}
                                                    />
                                                </div>
                                            </div>

                                           

                                            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 mt-2">

                                                <label for="productDescription">Slider Description</label>
                                                <textarea
                                                    class="form-control"
                                                    id="productDescription"
                                                    rows="3"
                                                    name="description"
                                                    value={updateSlider.description}
                                                    onChange={(e) => onChangeUpdateSlider(e)}
                                                ></textarea>
                                            </div>

                                           
                                            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                                <div class="form-group mt-2">
                                                    <label for="productCardImgs">Slider Image</label>
                                                    <input
                                                        type="file"
                                                        class="form-control"
                                                        id="productCardImgs"
                                                        name="banner"
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
                                                        value={updateSlider.metaTitle}
                                                        onChange={(e) => onChangeUpdateSlider(e)}
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
                                                        value={updateSlider.metaKeywords}
                                                        onChange={(e) => onChangeUpdateSlider(e)}

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
                                                    value={updateSlider.metaDescription}
                                                    onChange={(e) => onChangeUpdateSlider(e)}

                                                ></textarea>
                                            </div>


                                            <div className="justify-content-end d-flex mt-2">
                                                <Button startIcon={<BrowserUpdatedIcon />} variant='contained' onClick={updateSliderFun}>Update Slider</Button>
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