import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components"
import {AuthContext} from "../context/Auth"


const HeaderWrapper = styled.div`
    position: fixed;
    top:0px;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    color: black;
    width: 100vw;
    background-color: #f4f7fa;
    z-index: +1;
    flex-wrap: nowrap;

    .logo {
    color: #884d7e;
    margin-top:10px;
    }
    @media (max-width:950px){
        .logo{
            display:none
        }
    }

`

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
    padding-left:13px;
    

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
document.body.addEventListener("click",(e)=>{
    const dropMenu  = document.querySelector(".dropMenu")
    if(dropMenu?.classList?.contains("open")){
        dropMenu?.classList?.toggle("open")
    }
})

const Header = ()=>{
    const {user,loading} = useContext(AuthContext)
    const openSidebar = (e)=>{
       const sidebar =  document.querySelector(".sidebar")
       const sidebarWrapper = document.querySelector(".sidebar-wrap")
       sidebar.classList.add("show")
       sidebarWrapper.classList.add("overlay")
    }       
    const openDropdown = (e)=>{
        const dropMenu  = document.querySelector(".dropMenu")
        dropMenu.classList.toggle("open")
    }
    
    const logout = (e)=>{
        e.preventDefault()
        localStorage.removeItem("token")
        window.location.reload()
    }
    
    
    return(
        <HeaderWrapper className = "header" >
            <div>
                <BurgerButton onClick = {openSidebar} id = "burger-wrapper"> <i className="fas fa-bars"></i></BurgerButton>
                <Link to= "/dashboard"><h2 className = "logo">ENNET</h2></Link>
            </div>
           
       
           <div>
                <span className= "user-info">
                    <span id="user-icon">
                    {!loading ? 
                    user?.username.substring(0,2): "..."}</span>
                    <DropDownMenu className="dropMenu" >
                        {/* <Link to = "/account" > Account Setting</Link> */}
                        <Link to = "" onClick={logout}>Logout</Link>
                    </DropDownMenu>
                </span>
                
                <DropDown onClick = {openDropdown} className = "dropdown">           
                    <i className="fas fa-angle-down"  ></i>
                </DropDown>
           </div>       
        </HeaderWrapper>
    )
}

export default Header