import React from 'react'
import { SidebarData } from './SidebarData'
import './Sidebar.css'

const Sidebar = () => {
  return (
   

<div className='App'>
   
<div className='Sidebar'>
    <ul className="SidebarList">
    {
    SidebarData.map((val,key)=>{
        return(
            <li key={key} 
            className="row"
            onClick={()=>{
                window.location.pathname=val.link
            }}>{" "}<div>{val.icon}</div>{" "}
            <div id="icon">
                {val.title}
            </div>
            </li>
        )
    })
}
    </ul>

</div>
</div>

   

   
 
  )
}

export default Sidebar