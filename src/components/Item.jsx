import React from 'react'
import { Card, CardMedia , Typography} from '@mui/material'
const Item = (props) => {
  return (
    <>

<Card
className='category-card'
style={{maxWidth:'350px'}}
>

<CardMedia

component="img"
        alt={props.title}
        className='card-media'
        image={props.url}
/>

<Typography variant='h6' component='h2' className='title'>
  {props.title}
</Typography>

</Card>
     
    </>
  )
}

export default Item
