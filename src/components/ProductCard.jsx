import React from 'react'
import { Typography, Card, CardMedia, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
const ProductCard = (props) => {



  return (
    <>
      <Card className='product-card'>
        {
          props.discount != null && (<div className='discount'>{props.discount} {props.discount_title}</div>)
        }
        <CardMedia
          component="img"
          alt=''
          className='product-media'
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXy88SWy3C8-nbZY41r80vHJjgqJ52edCEyg'
        />

        <Box className="description">
          <Typography variant='h6' component='h2' className="category">
            {props.category_name.length < 25 ? (props.category_name) : (props.category_name.slice(0, 25) + "...")}
          </Typography>
          <Typography variant='h6' component='h2' className="title">
            {props.product_name.length < 23 ? (props.product_name) : (props.product_name.slice(0, 23) + "...")}
          </Typography>
          <Box display="flex" sx={{ justifyContent: "space-between", minHeight: "50px", }}>
            <Box display="flex">




              {

                props.price_before != null && props.discount != null && (
                  <Typography variant='h6' component='h2' className="price-before">
                    {props.currency + ' ' + props.price_before}
                  </Typography>
                )

              }

              <Typography variant='h6' component='h2' className="price-now">
                {props.currency + ' ' + props.price_now}
              </Typography>
            </Box>

            <Paper className='icon-box' elevation={2} display="flex">

              <ShoppingCartIcon className='cart-icon' />
              <AddIcon className='add-icon' />
              <Typography variant='h6' component='h2' className="add-to-cart">
                Add to Cart
              </Typography>
            </Paper>
          </Box>
        </Box>

      </Card>
    </>
  )
}

export default ProductCard
