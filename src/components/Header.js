import React from 'react'
import {image} from 'faker'
import {Link} from 'react-router-dom'


const onClick=(e)=>{
    e.preventDefault()
    console.log('hr')
    localStorage.clear()
    window.location.reload()
}

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
                
                {/* <div className = "dropdown">           
                    <i className="fas fa-angle-down" id = "dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded=""></i>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu">
                        <Link className = "dropdown-item"> Account Setting</Link>
                        <a className = "dropdown-item" onClick = {onClick}>Logout</a>
                    </div>
                </div> */}
           </div> 
           
      
            
        </div>
    )
}

export default Header