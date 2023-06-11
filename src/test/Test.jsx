import React, { useEffect } from 'react';

import { Button, 
  Typography, 
  TextField, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Checkbox, 
  FormControlLabel, 
  AppBar, 
  Tabs, 
  Toolbar, 
  Tab, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Dialog, 
  DialogTitle, 
  DialogActions, 
  DialogContentText, 
  DialogContent, 
  Modal, 
  Box, 
  Link, 
  Container, 
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Autocomplete,
  Drawer
  } from '@mui/material';

import { useState } from 'react';

const Test = () => {


  const [inputs, setInputs] = useState(
    {
      name1: "",
      name2: "",
      name3: "",
      name4: "",
      checkbox: false,
    }
  );


  const handleFormChange = (e) => {

    setInputs(p => ({
      ...p,
      [e.target.name]: [e.target.value],
    }));
    console.log(inputs);
  }

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);



  const [menu, setMenu] = useState(0);
  const [dialog, setDialog] = useState(false);
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const list = ['ghulam', 'ali', 'zain', 'hammad'];
  const countries = ['pakistan', 'palestine', 'india', 'argentina', 'rusia', 'bangladesh', 'indonesia'];

  return (
    <div>


      <Button variant='contained' color="success">Ali</Button> <Button variant='outlined' color='error' size='large'>Ali</Button>

      <Typography variant='h6' sx={{ color: 'red' }} component={"h1"}>Ghulam Ali you can't survive that</Typography>


      <TextField type='text' name='name1' variant='standard' placeholder='name' label="Name" value={inputs.name1} onChange={handleFormChange} />
      <TextField type='text' name='name2' variant='outlined' placeholder='name' label="Name" value={inputs.name2} onChange={handleFormChange} />
      <TextField type='text' name='name3' variant='filled' placeholder='name' label="Name" value={inputs.name3} onChange={handleFormChange} />


      <FormControl fullWidth>
        <InputLabel id="ali" >Selections</InputLabel>
        <Select labelId='ali' label="Selections" name="name4" onChange={handleFormChange} value={inputs.name4}>
          <MenuItem value={"Ali"}>Ali</MenuItem>
          <MenuItem value={"Sharma"}>Sharma</MenuItem>
          <MenuItem value={"Zain"}>Zain</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <FormControlLabel required control={<Checkbox />} label="Required" name='checkbox' value={inputs.checkbox} onChange={(e) => { setInputs(p => ({ ...p, [e.target.name]: !inputs.checkbox })); }} />
      </FormControl>


      <AppBar>

        <Toolbar>
          <Typography variant="h2">Nice to Meet</Typography>


          {/* <Button variant='contained' color="error" sx={{marginLeft:"auto"}}>Sign In</Button> */}

          <Tabs sx={{ marginLeft: "auto" }} textColor='inherit' indicatorColor='secondary' value={menu} onChange={(e, val)=>{setMenu(val); console.log(menu, val)}} >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact" />
            <Tab label="Map" />
          </Tabs>
        </Toolbar>
      </AppBar>



<Card sx={{maxWidth:300}}>
<CardMedia  component={'img'} height="140" image='https://plus.unsplash.com/premium_photo-1680721444743-2a94a309a24a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />

<CardContent>
  <Typography variant='p'>Web Design Adss</Typography>
</CardContent>
<CardActions >
<Button size="small" color='primary'>
  Share
</Button>
<Button size="small" color='error' onClick={()=>{setDialog(true)}}>
  Delete
</Button>
</CardActions>
</Card>



<Dialog open={dialog} onClose={()=>{setDialog(false)}}>
<DialogTitle>Are you really wanted to delete this?</DialogTitle>
<DialogContent>
  <DialogContentText>
    we will delete this...
  </DialogContentText>
</DialogContent>
<DialogActions>
<Button size="small" color='primary'>
  Done
</Button>
<Button size="small" color='error' onClick={()=>{setDialog(false)}}>
  Cancle
</Button>
</DialogActions>
</Dialog>


<Button size="large" color="error" variant="contained" onClick={()=>{setModal(true)}} >Open Modal</Button>


<Modal open={modal} onClose={()=>{setModal(false)}} >
<Box position="absolute" top="50%" left="50%">
<Typography>
  This is Ghulam Ali Modal
</Typography>
<Button onClick={()=>{setModal(false)}}>Cancel</Button>
</Box>
</Modal>


<Link
variant='h4'
color="secondary"
href='https://www.ghulamalikhan.com'
underline='none'
>
MUI LINK
</Link>



<Container sx={{background:'yellow'}} maxWidth="xl" >
<Typography variant='body1'>
  Ghulam Ali is not finished yet my boys
</Typography>
</Container>


<List sx={{width:"250px", background:"grey"}}>

{list.map((item)=>(

<ListItem>
  <ListItemButton>{">"}</ListItemButton>
  <ListItemText primary={item} secondary={item} />
</ListItem>))
}
</List>




<Accordion>
  <AccordionSummary  expandIcon={'>'}>
    <Typography variant='h6'> What is Ghulam Ali ?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem, est doloribus aliquam debitis at eos dolor totam aut vel!
  </AccordionDetails>
</Accordion>



<Autocomplete 
sx={{width:200}}
options={countries} 
renderInput={(p)=><TextField  {...p} label="Select Country.." />}
/>



<Button variant='contained'  onClick={()=>{setDrawer(true)}}>
  Open Drawer
</Button>

<Drawer open={drawer} onClose={()=>{setDrawer(false)}}>
<List>
  {
    countries.map((item)=>(
      <ListItem>
        <ListItemText primary={item}/>
      </ListItem>
    ))
  }
</List>
</Drawer>
    </div>
  )
}

export default Test;
