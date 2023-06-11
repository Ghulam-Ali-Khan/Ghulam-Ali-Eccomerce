import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Tabs, Tab, Autocomplete, TextField, Box, Button } from '@mui/material';
// import { Image } from '@material-ui/core';
import Logo from "../imgs/comfatra-logo.png";
// import { Search } from '@material-ui/icons';
import { Search } from '@material-ui/icons';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { InputAdornment, IconButton, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';




const Header = () => {

  const [themePrimary, setThemePrimary] = useState("#fff");
  const countries = ['pakistan', 'palestine', 'india', 'argentina', 'rusia', 'bangladesh', 'indonesia'];
  const [width, setWidth] = useState(null);

  const theme = useTheme();


  const matches = useMediaQuery('(min-width: 950px)');


  useEffect(() => {
    setWidth(matches);
  }, [matches]);




  return (


    <>



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
      </AppBar>




    </>

  )
}

export default Header
