import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Autocomplete, TextField, Box, Button, BottomNavigation, BottomNavigationAction, Badge } from '@mui/material';
// import { Image } from '@material-ui/core';
import Logo from "../imgs/comfatra-logo.png";
// import { Search } from '@material-ui/icons';
import { Search } from '@material-ui/icons';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { InputAdornment, IconButton, } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HomeIcon from '@mui/icons-material/Home';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  const [bottomNavValue, setBottomNavValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setBottomNavValue(newValue);
  };

  const [themePrimary, setThemePrimary] = useState("#fff");
  const countries = ['pakistan', 'palestine', 'india', 'argentina', 'rusia', 'bangladesh', 'indonesia'];
  const [width, setWidth] = useState(null);
const [mobileWidth, setMobileWidth] = useState(null);

  const theme = useTheme();


  const matches = useMediaQuery('(min-width: 950px)');
  const mobileDevice = useMediaQuery('(max-width: 550px)');


  useEffect(() => {


      setWidth(matches);
      setMobileWidth(mobileDevice);

    console.log(matches);
  }, [matches, mobileDevice]);




  return (


    <>


      {(!mobileWidth) && (
        <AppBar className='main-header' sx={{ background: themePrimary }}>

          <Toolbar className='main-toolbar'>

            {(width) ?

              <img src={Logo} alt="My Image" />
              :
              <Box className="m-logo-btns">
                <img src={Logo} alt="My Image" />


                <Box className="m-auth-btns">
                  <IconButton variant="contained" className="m-login-btn" boxShadow={3}>
                    <LoginIcon />
                  </IconButton>

                  <IconButton variant="contained" className="m-signup-btn" boxShadow={3}>
                    <HowToRegIcon />
                  </IconButton>

                </Box>
              </Box>

            }





            <Box className="m-search-cat" sx={{ display: "contents", width: "100%" }}>

              <Autocomplete
                className="select-category ga-order-c"

                variant="outlined"
                margin="normal"

                options={countries}
                renderInput={(p) => <TextField  {...p} label="Categories" />}

              />



              <TextField className='search-field ga-order-s' id="outlined-basic" label="Search" variant="outlined"
                InputLabelProps={{
                  className: "text__label",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="search">
                        <Search onClick={() => { alert("clickd") }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}


              />
            </Box>

            {(width) &&
              <Box className="auth-btns">
                <Button variant="contained" endIcon={<LoginIcon />} className="login-btn">
                  Login
                </Button>
                <Button variant="contained" endIcon={<HowToRegIcon />} className="signup-btn">
                  SignUp
                </Button>
              </Box>
            }

          </Toolbar>
        </AppBar>)
      }





{/* Mobile Nav */}


      {

        (mobileWidth) && (
          <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 3, boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.1)' }}>
            <BottomNavigation value={bottomNavValue} onChange={handleChange}>
              <BottomNavigationAction label="Shop" icon={<HomeIcon />} />
              <BottomNavigationAction label="Search" icon={<SearchIcon />} />
              <BottomNavigationAction label="Cart" icon={
                <Badge badgeContent={3} color="primary">
                  <ShoppingCartIcon />
                </Badge>} />
              <BottomNavigationAction label="Offers"
                icon={
                  <Badge badgeContent={3} color="primary">
                    <NotificationsIcon />
                  </Badge>
                }
              />
            </BottomNavigation>
          </div>

        )}
    </>

  )
}

export default Header
