import React from 'react';
import './HeaderOption.css';
function HeaderOption({Icon, title}){               //destucturing the object so curly braces, //Icon is a components so I is capital
                                                         

    return(
        <div className='headerOption'>
            {/* if icon is passed, it will render Icon component */}
        {Icon && <Icon className='hearderOption_icon'/>}                     
         <h3 className='headerOption_title'>{title} </h3>      
        </div>
    )
}
export default HeaderOption;