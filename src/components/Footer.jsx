import React from 'react'
import { AppBar, Toolbar, Typography, Grid, Container } from '@mui/material'
const Footer = () => {
    return (
        <>
            <AppBar position="static" className='footer-top' >
                <Toolbar>

                <Container maxWidth="xl">
                    <Grid container spacing={3}>

                        <Grid item xs={4}>
                            <Typography>Column 1</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Column 2</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Column 3</Typography>
                        </Grid>
                    </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Footer
