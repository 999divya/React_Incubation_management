import React,{useState} from 'react'
import {Drawer, 
    IconButton, 
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText


} from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const PAGES = ["About Us","Services","Contact Us","Login","Logout"];
const SideDrawer = () => {
    const [openDrawer, setOpenDrawer] = useState(false);


  return (
    <React.Fragment>
        <Drawer open={openDrawer}
        onClose={()=>{
            setOpenDrawer(false)
        }}
        >
         
<List>
{
    PAGES.map((page, index)=>{
       return <ListItemButton key={index} onClick={()=>{setOpenDrawer(false)}}>
        <ListItemIcon>
            <ListItemText>
    {page}
            </ListItemText>
        </ListItemIcon>
    </ListItemButton>
    })
                
            }

</List>
        </Drawer>
        <IconButton onClick={()=>setOpenDrawer(!openDrawer)}>
<MenuOutlinedIcon/>
        </IconButton>
    </React.Fragment>
  )
}

export default SideDrawer