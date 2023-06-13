import React from 'react'
import { AppBar, Toolbar, Typography, Grid, Container, List, ListItem, Button } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';



const Footer = () => {

    const quick_links = ['Privacy Policy', 'Terms and Conditions', 'Need Help', 'Contact Us', 'About Us'];


    return (
        <>

            <AppBar position="static" className='footer-top'  >
                <Toolbar>

                    <Container maxWidth="xl" >
                        <Grid container spacing={3}>

                            <Grid item lg={3} xs={12} className='footer-col'>
                                <img src="/src/imgs/Sample-footer-logo.png" alt="logo" className='logo' />
                                <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, rerum vitae dolorum adipisci quia deserunt incidunt! Incidunt amet sapiente totam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit iusto suscipit amet asperiores inventore, expedita maxime ab! Unde, ipsa?</Typography>
                                <div className="social-icons">
                                    <GoogleIcon className='rounded' />
                                    <PinterestIcon />
                                    <InstagramIcon className='rounded' />
                                    <FacebookRoundedIcon />
                                </div>
                            </Grid>
                            <Grid item lg={3} xs={12} className='footer-col'>
                                <Typography className='footer-links-head' component='h2'>Quick Links</Typography>
                                <List className='links'>
                                    {
                                        quick_links.map((item, index) => (

                                            <ListItem key={index} className='link'>{item}</ListItem>

                                        ))
                                    }
                                </List>
                            </Grid>
                            <Grid item lg={3} xs={12} className='footer-col'>
                                <Typography className='footer-links-head' component='h2'>Popular Categories</Typography>
                                <List className='links'>
                                    {
                                        quick_links.map((item, index) => (

                                            <ListItem key={index} className='link'>{item}</ListItem>

                                        ))
                                    }
                                </List>
                            </Grid>
                            <Grid item lg={3} xs={12} className='footer-col subscribe-col'>
                                <Typography className='footer-links-head' component='h2'>Subscribe</Typography>
                                <Typography component='p'>Subscribe to up-to-date yourself with our latest offers.</Typography>
                                <input type="email" className='subscribe-field' placeholder='Email'/>
                                <Button variant='contained' className='subscribe-btn'>Subscribe</Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Footer
