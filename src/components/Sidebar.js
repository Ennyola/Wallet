import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components"


const SideBar = styled.div`
    
    position: fixed;
    top: 70px;
    background-color: #E5C1CD;
    height: 100vh;
    transition: 0.5s all ease-in;
    z-index:1;


 a {
    position: relative;
    font-size: 18px;
    color: #A1168A;
    display: block;
    padding: 30px 30px;
    transition: .5s all ease;
    top: 20px
}

 .fas {
    position: relative;
    right: 10px;
}

 a:hover {
    cursor: pointer;
    color: white;
    background-color: #A1168A;
}

 li:hover .fas {
    color: white;
}
@media (max-width:950px){
    margin-left: -300px
}


`


class Sidebar extends Component {
    render(){
       
        return(
            <SideBar className = "sidebar">  
                    <Link to ="/dashboard"> <i className="fas fa-home"></i>Home</Link>
                    <Link to = "/transactions">    <i className="fas fa-exchange-alt"></i>Transactions</Link>
                    <Link to = "/help">  <i className="fas fa-info"></i>Help</Link>
                    <Link to = "/notifications">   <i className="fas fa-bell"></i>Notifications </Link>     
            </SideBar>
        )
    }
    

}
export default Sidebar