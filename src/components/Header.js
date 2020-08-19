import React from 'react'
import {image} from 'faker'

const Header = ()=>{
    return(
        <div className = "header" >
            <div>
                <h1 className = "logo">ENNET</h1>
            </div>
           <div>
                <span className = "user-info">
                    <img src={image.avatar()} alt="user-icon"/>
                    <span id = "user-name">ENIOLA</span>
                </span>
                <i className="fas fa-angle-down"></i>
           </div> 

            
        </div>
    )
}

export default Header