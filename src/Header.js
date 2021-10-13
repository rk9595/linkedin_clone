import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
//import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header(){

    return(
        <div className='header'>
            

            <div className="header_left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Linkedin"/>
                {/* <LinkedInIcon/>  */}
                <div className="header_search">
                 <SearchIcon />

                 
                 <input type="text"/>   

                </div>

            </div>

            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption  Icon={SupervisorAccountIcon}title='My Network'/>
                <HeaderOption  Icon={BusinessCenterIcon}title='Jobs'/>
                <HeaderOption  Icon={ChatBubbleIcon}title='Messaging'/>
                <HeaderOption  Icon={NotificationsIcon}title='Notifications'/>
                <HeaderOption avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDj7BhRycZLIGPxER2R88pKRl8hL5fI8zFg&usqp=CAU" title='Me'/>
                
                

            </div>

        

             
        </div>
    )
}
export default Header