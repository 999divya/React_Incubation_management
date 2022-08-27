import React from 'react'
import {AppBar, Typography,Toolbar, Button} from '@mui/material'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import Sidebar from '../Sidebar/Sidebar'

const AdminHeader = () => {

  // const [value, setValue]=useState()
  return (
<React.Fragment>
  <AppBar sx={{background:"#15244c"}}>
    <Toolbar>
    <WorkspacePremiumOutlinedIcon/>
    <Typography>Kstyles Corp</Typography>

{/* <Tabs textColor="inherit" value={value} onChange={(e,value)=>{
  setValue(value)
}} indicatorColor="secondary">

<Tab sx={{marginLeft:'35px'}} label="About Us"/>
<Tab label="Services"/>
<Tab label="Contact Us"/>
</Tabs> */}

<Button sx={{marginLeft:'auto'}} variant="contained">Login</Button>
<Button sx={{marginLeft:'10px'}} variant="contained">SignUp</Button>


    </Toolbar>
    </AppBar>
 <Sidebar/>
</React.Fragment>
  )
}

export default AdminHeader