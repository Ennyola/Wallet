import React from 'react'
import {image} from 'faker'

import logo from '../public/images/ENNET.png'
const Header = ()=>{
    return(
        <div className = "header" >
            <div>
                <img className = "navbar-brand" src={logo} alt="logo"/>
            </div>
           <div>
                <span className = "user-info">
                    <img src={image.avatar()} alt="user-image"/>
                    <span id = "user-name">ENIOLA MEDUNOYE</span>
                </span>
                <i className="fas fa-angle-down"></i>
                
           </div> 

            
        </div>
    )
}

export default Header