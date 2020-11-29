import React from 'react'
import faker from 'faker'
import {Link} from 'react-router-dom'
import styled from "styled-components"

import image from "../public/images/IMG_20200605_171344.jpg"


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
const DropDown = styled.span`
    cursor:pointer;
    padding:20px;
    

`
const DropDownMenu = styled.div`
    position:absolute;
    right:30px;
    top:60px;
    background-color:white;
    padding:10px 0px !important; 
    display:none;
    
    a{
        display:block;
        padding:6px 20px;
        color:black;
    }
    a:hover{
        background-color:#eee;
    }
  
    
`

const Header = ()=>{

    const openSidebar = (e)=>{
       const sidebar =  document.querySelector(".sidebar")
    //    e.currentTarget.classList.toggle("invisible")
       sidebar.classList.toggle("open")
    }
    const openDropdown = (e)=>{
        const dropMenu  = document.querySelector(".dropMenu")
        dropMenu.classList.toggle("show")
    }
    
    return(
        <div className = "header" >
            <div>
                <BurgerButton onClick = {openSidebar} id = "burger-wrapper"> <i className="fas fa-bars"></i></BurgerButton>
                <h1 className = "logo">ENNET</h1>
            </div>
           
       
           <div>
                <span className= "user-info">
                    <img src={image} alt="user-icon"/>
                    {/* <span id = "user-name">ENIOLA</span> */}
                    <DropDownMenu className="dropMenu" >
                        <Link to = "/account" > Account Setting</Link>
                        <Link onClick >Logout</Link>
                    </DropDownMenu>
                </span>
                
                <DropDown onClick = {openDropdown} className = "dropdown">           
                    <i className="fas fa-angle-down"  ></i>
                </DropDown>
           </div> 
           
      
            
        </div>
    )
}

export default Header