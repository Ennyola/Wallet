import React from 'react'
import {image} from 'faker'
import {Link} from 'react-router-dom'
import styled from "styled-components"


const BurgerButton = styled.span`
 .fa-bars{
    position: relative;
    top: 2px;
    font-size: 24px;
    padding: 8px;
    color: purple;
    height: 70%;
    display: none;

    :active{
        background: rgba(255, 255, 255, 0.19);
        border-radius: 90px;
    }
    :hover {
    cursor: pointer;
    }

    @media(max-width:950px){
            display:block  
    }
 }

`

const Header = ()=>{

    const openSidebar = (e)=>{
       const sidebar =  document.querySelector(".sidebar")
    //    e.currentTarget.classList.toggle("invisible")
       sidebar.classList.toggle("open")


    }
    
    return(
        <div className = "header" >
            
            <div>
            <BurgerButton onClick = {openSidebar} id = "burger-wrapper"> <i className="fas fa-bars"></i></BurgerButton>
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