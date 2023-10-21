import { MenuItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const MegaMenu = ({MegaMenuItems, name, type}) => {


    const [displayMegaMenu, setDisplayMegaMenu] = useState(false);

  


    const menuCols = 12/MegaMenuItems.length;
    console.log(menuCols);

    return (
        <>

            <Link class="nav-link" to={`/categories/${type}`} onMouseEnter={()=>{setDisplayMegaMenu(true)} } onMouseLeave={()=>{setDisplayMegaMenu(false)}} style={{textTransform:"capitalize"}}>{type+"s"}</Link>



{
displayMegaMenu && (

<div className="container ga-megamenu shadow" onMouseEnter={()=>{setDisplayMegaMenu(true)} } onMouseLeave={()=>{setDisplayMegaMenu(false)}}>
                <div className="row">


                    {
                        MegaMenuItems.map((obj, index) => (

                            <div className={`col-lg-${menuCols} col-md-${menuCols}`}>

<Link to={`/category-page/${type}/${obj._id}`} className='text-decoration-none'>

<Typography variant='h6' component="h3" className='menu-head' >{obj.name}</Typography>
</Link>
                                
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
