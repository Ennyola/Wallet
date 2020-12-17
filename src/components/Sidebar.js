import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components"



const SideBar = styled.div`
    
    position: fixed;
    top: 70px;
    /* background-color: #E5C1CD; */
    background-color: #f4f7fa;
    height: 100vh;
    transition: 0.5s all;
    z-index:1;

    .active{
        color: white;
    background-color: #A1168A;
    }

 a {
    position: relative;
    font-size: 18px;
    color: #A1168A;
    display: block;
    padding: 25px 30px;
    transition: .5s all ease;
    top: 20px;
    margin-top:2px;
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
    state ={
        links: [
            {
              id: 1,
              name: "Home",
              to: "/dashboard",
              className: "side_nav_item",
              iconClassName: "fas fa-home"
            },
            {
              id: 2,
              name: "Transactions",
              to: "/transactions",
              className: "side_nav_item",
              iconClassName: "fas fa-exchange-alt"
            },
            {
              id: 3,
              name: "Store",
              to: "/store",
              className: "side_nav_item",
              iconClassName: "fas fa-store"
            },
            {
              id :4,
              name: "Cart",
              to: "/cart",
              className: "side_nav_item",
              iconClassName: "fas fa-cart"
            },

            {
              id: 5,
              name: "Help",
              to: "/help",
              className: "side_nav_item",
              iconClassName: "fas fa-info"
            },
            {
                id: 6,
                name: "Notifications",
                to: "/notifications",
                className: "side_nav_item",
                iconClassName: "fas fa-bell"
              }
          ],
          activeLink: this.props.activeLink
      
    } 

     handleClick = (id)=>{
        this.setState({activeLink:id})
    }

    render(){
        return(
            <SideBar className = "sidebar"> 
                {
                    this.state.links.map((link)=>(
                        <Link onClick={()=>this.handleClick(link.id)} to={link.to} key={link.id} 
                        className = {link.className + (link.id === this.state.activeLink ? " active":"")}>
                        <i className = {link.iconClassName}></i>
                            {link.name}
                        </Link>
                    ))
                } 
                    {/* <Link to ="/dashboard" className = "active"> <i className="fas fa-home"></i>Home</Link>
                    <Link to = "/transactions">    <i className="fas fa-exchange-alt"></i>Transactions</Link>
                    <Link to = "/store"><i className="fas fa-store"></i>Store</Link>
                    <Link to = "/help">  <i className="fas fa-info"></i>Help</Link>
                    <Link to = "/notifications">   <i className="fas fa-bell"></i>Notifications </Link>      */}
            </SideBar>
        )
    }
    

}
export default Sidebar