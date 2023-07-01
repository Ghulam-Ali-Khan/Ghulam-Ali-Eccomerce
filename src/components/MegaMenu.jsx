import { MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react'

const MegaMenu = (props) => {


    const [displayMegaMenu, setDisplayMegaMenu] = useState(false);

    const menuCols = 12/props.MegaMenuItems.length;
    console.log(menuCols);

    return (
        <>

            <a class="nav-link" href="#" onMouseEnter={()=>{setDisplayMegaMenu(true)} } onMouseLeave={()=>{setDisplayMegaMenu(false)}} >{props.name}</a>



{
displayMegaMenu && (

<div className="container ga-megamenu shadow" onMouseEnter={()=>{setDisplayMegaMenu(true)} } onMouseLeave={()=>{setDisplayMegaMenu(false)}}>
                <div className="row">


                    {
                        props.MegaMenuItems.map((obj, index) => (

                            <div className={`col-lg-${menuCols} col-md-${menuCols}`}>

<Typography variant='h6' component="h3" className='menu-head' >{obj.head}</Typography>

                                {
                                    obj.menus.map((item) => (


                                        <MenuItem> {item} </MenuItem>

                                    ))
                                }
                            </div>


                        ))
                    }



                </div>
                <div className="row">
                    <img src="https://htmldemo.net/reid/reid/assets/img/bg/banner1.jpg" alt=""  className='ad-img' />
                </div>
            </div>


)




}

            

        </>
    )
}

export default MegaMenu
