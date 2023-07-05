import { AppBar, IconButton, List, ListItem, ListItemIcon, ListItemText, MenuList, Toolbar } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Select, MenuItem, Menu, Button, Drawer, Autocomplete, TextField, InputAdornment, BottomNavigation, BottomNavigationAction } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MegaMenu from './MegaMenu';
import DropDown from './DropDown';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import TestLogo from "../imgs/comfatra-logo.png";
const Header2 = () => {

    const [valueBottomMenu, setValueBottomMenu] = React.useState(0);
    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };



    const megamenuItems1 = [{
        head: 'Sample1',
        menus: [
            'menu1',
            'menu2',
            'menu3',
            'menu4',
        ]
    },
    {
        head: 'Sample2',
        menus: [
            'menu1',
            'menu2',
            'menu3',
            'menu4',
        ]
    },
    {
        head: 'Sample3',
        menus: [
            'menu1',
            'menu2',
            'menu3',
            'menu4',
        ]
    },
    {
        head: 'Sample4',
        menus: [
            'menu1',
            'menu2',
            'menu3',
            'menu4',
        ]
    }
    ];


    const megamenuItems2 = [{
        head: 'Cat1',
        menus: [
            'menu1',
            'menu2',
            'menu3',
            'menu4',
        ]
    },
    {
        head: 'Sample2',
        menus: [
            'menu1',
            'menu2',
            'menu3',
            'menu4',
        ]
    },
    {
        head: 'Sample3',
        menus: [
            'menu1',
            'menu2',
            'menu3',
            'menu4',
        ]
    },
    {
        head: 'Sample4',
        menus: [
            'menu1',
            'menu2',
            'menu3',
            'menu4',
        ]
    }
    ];


    const mobileDevice = useMediaQuery('(min-width: 1000px)');

    const [mobileWidth, setMobileWidth] = useState(null);
    const [displayMenuSM, setDisplayMenuSM] = useState(false);

    useEffect(() => {


        // setWidth(matches);
        setMobileWidth(mobileDevice);

        //   console.log(matches);
    }, [mobileDevice]);

    const samplecat = ['ali', 'pakistan', 'laravel', 'react', 'python'];

    return (
        <>

            {
                mobileWidth && (

                    <AppBar className='double-story-header'>

                        <Toolbar>

                            <div className="container">

                                <div className="row header-top">
                                    <div className="col-lg-3 col-md-3 left-col">
                                        <img src={TestLogo} alt="" className='logo' />
                                    </div>
                                    <div className="col-lg-6 col-md-6 middle-col">
                                        <div className="search">
                                            <select >
                                                <option selected>All Categorey</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <input type="text" placeholder='Search products here...' />
                                            <button>
                                                <SearchIcon />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 right-col">
                                        <button className='cart-btn'>
                                            Items 0 <ShoppingCartIcon />
                                        </button>
                                    </div>
                                </div>

                                <div className="row header-bottom">
                                    <ul class="nav">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#">About</a>


                                        </li>
                                        <li class="nav-item">

                                            <MegaMenu name="MegaMenu" MegaMenuItems={megamenuItems1} />

                                        </li>
                                        <li class="nav-item">
                                            <MegaMenu name="Categories" MegaMenuItems={megamenuItems2} />
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Blogs</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Contact</a>
                                        </li>
                                    </ul>
                                    <div className="social-icons">
                                        <FacebookRoundedIcon className='facebook icon' />
                                        <InstagramIcon className='instagram icon' />
                                        <PinterestIcon className='pinterest icon' />
                                        <YouTubeIcon className='youtube icon' />
                                    </div>
                                </div>

                            </div>

                        </Toolbar>

                    </AppBar>

                )
            }


{
    !mobileWidth &&(
        <>

            <AppBar className='ga-header-sm'>


                <Toolbar className='toolbar'>
                    <img src="src/imgs/comfatra-logo.png" alt="" />


                    <IconButton onClick={() => {
                        setDisplayMenuSM(!displayMenuSM);
                    }}>
                        <MenuIcon className='menu-icon' />
                    </IconButton>

                </Toolbar>

            </AppBar>


<BottomNavigation
  showLabels
  className='ga-bottom-nav-menu shadow-lg'
  value={valueBottomMenu}
  onChange={(event, newValue) => {
    setValueBottomMenu(newValue);
  }}
>
  <BottomNavigationAction label="Shop" icon={<HomeOutlinedIcon />} />
  <BottomNavigationAction label="Explore" icon={<ExploreOutlinedIcon />} />
  <BottomNavigationAction label="Cart" icon={<ShoppingBasketOutlinedIcon />} />
  <BottomNavigationAction label="Offers" icon={<CampaignOutlinedIcon />} />
</BottomNavigation>



            <Drawer
                className='ga-menu-sm'
                open={displayMenuSM}

                onClose={() => {
                    setDisplayMenuSM(false);
                }}

            >

                <div className="close-btn-area">

                    <img src="src/imgs/comfatra-logo.png" alt="" />

                    <IconButton onClick={() => {
                        setDisplayMenuSM(false);
                    }}>
                        <CloseIcon className='close-btn' />
                    </IconButton>
                </div>


                <h3 className='search-here'>
                Search Here
                </h3>
                <List>
                    <ListItem>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={samplecat}
                            className='categories-list'
                            renderInput={(params) => <TextField {...params} label="Categories"

                            />}
                        />
                    </ListItem>
                    <ListItem>
                        <TextField
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>

                                    </InputAdornment>
                                ),
                            }}

                            label="Search"
                            className='ga-search-field-sm'
                        />
                    </ListItem>
                </List>

                <h3 className='explore'>
                    Explore
                </h3>

                <MenuList>
                    <MenuItem className='menu-item'>
                        <ListItemIcon>
                            <ShoppingBasketIcon />
                        </ListItemIcon>
                        <ListItemText className='menu-text'>
                            Shop
                        </ListItemText>
                    </MenuItem>
                    <MenuItem className='menu-item'>
                        <ListItemIcon>
                            <ShoppingBasketIcon />
                        </ListItemIcon>
                        <ListItemText className='menu-text'>
                            Shop
                        </ListItemText>
                    </MenuItem>
                    <MenuItem className='menu-item'>
                        <ListItemIcon>
                            <ShoppingBasketIcon />
                        </ListItemIcon>
                        <ListItemText className='menu-text'>
                            Categories
                        </ListItemText>
                    </MenuItem>
                    <MenuItem className='menu-item'>
                        <ListItemIcon>
                            <ShoppingBasketIcon />
                        </ListItemIcon>
                        <ListItemText className='menu-text'>
                            About
                        </ListItemText>
                    </MenuItem>
                </MenuList>


                <h3 className='follow-us-on'>
                    Follow us on
                </h3>

                <div className="social-icons">
                    <FacebookRoundedIcon className='facebook icon' />
                    <InstagramIcon className='instagram icon' />
                    <PinterestIcon className='pinterest icon' />
                    <YouTubeIcon className='youtube icon' />
                </div>


            </Drawer>
</>
    )
}


        </>
    )
}

export default Header2
