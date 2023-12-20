import { Sidebar,Menu,MenuItem, } from "react-pro-sidebar";
import image from '../../assets/photo.png'; 
import { Link,Outlet } from 'react-router-dom';
import "./SideBar.css"


const Side = () => {
   
    return (
        <div>
            <Sidebar className="sidebar">
                <img src={image} height={250} width={250}/>
                <Menu>
                   <MenuItem component={<Link to="/"/>}>Home</MenuItem>
                   <MenuItem component={<Link to="/AboutMe"/>}>About Me</MenuItem>
                   <MenuItem component={<Link to="/Resume"/>}>Resume</MenuItem>
                   <MenuItem component={<Link to="/Portafolio"/>}>Portafolio</MenuItem>
                   <MenuItem component={<Link to="/Skills"/>}>Skills</MenuItem>
                   <MenuItem component={<Link to="/Contact"/>}>Contact</MenuItem>

                </Menu>
            </Sidebar>
            <Outlet/> 
            </div>
        
    )



}

export default Side;