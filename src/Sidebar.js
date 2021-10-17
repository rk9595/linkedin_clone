import React from 'react';
import './Sidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Sidebar(){               
     const recentItem= (topic)=>(
         <div className="sidebar_recentItem">
             <span className="sidebar_hash">#</span>
             <p>{topic}</p>
         </div>

     );

    
                                                         

    return(
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" alt="background-color"/>
                <AccountCircleIcon className="sidebar_avatar"/>
                <h2>Rakesh Kariya</h2>
                <h4>rkhfhfjkddfjfd@gmail.com</h4>

            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber"> 5648</p>

                </div>

                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber"> 2138</p>


                </div>
          </div>

                <div className="sidebar_bottom">
                    <p>Recent</p>
                    {recentItem('ReactJs')}     
                    {recentItem('HTML')}
                    {recentItem('JavaScript')}
                    {recentItem('CSS')}         
                    {/* call the function in curly braces and write the props vlaue */}
                </div>

            
        </div>
    );
}
export default Sidebar;