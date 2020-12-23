import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import styled from "styled-components"



const Overlay = styled.div`
    

`

const SideBar = styled.div`
    position: fixed;
    top: 70px;
    /* background-color: #E5C1CD; */
    background-color: #f4f7fa;
    height: 100vh;
    transition: 0.5s all;
    z-index:2;
    overflow:auto;
    width:219px;
    h4{
        color:#A1168A;
        font-size:30px;
        position:relative;
        left:10px;
        top:20px;
        display:none;
    }

    .active{
        color: white;
        background-color: #A1168A;
        #cart-length{
          color: #A1168A;
          background-color:#fff;
        }
    }

 a {
    position: relative;
    font-size: 17px;
    color: #A1168A;
    display: block;
    padding: 25px 30px;
    transition: .5s all ease;
    top: 20px;
    margin-top:2px;
    #cart-length{
        padding:0px 5px;
				position:absolute;
        border-radius:50px;
        top: 18px;
        left:34px;
				background-color:#A1168A;
        color:white;
        font-size:11px;
    }
    
}

 .fas,.fab {
    position: relative;
    right: 10px;
}

 a:hover {
    cursor: pointer;
    color: white;
    background-color: #A1168A;
    #cart-length{
      color: #A1168A;
      background-color:#fff;
    }
}

 li:hover .fas {
    color: white;
}
@media (max-width:950px){
    margin-left: -300px;
    top:0px;
    width:200px;

    h4{
        display:block;
    }
    a{
        top:10px;
    }
    
}

`

const WelcomeText = styled.div`
    padding:20px;
    margin:25px 0px 20px 0px;
    position:relative;
    left:20px;
    font-size:18px;
    font-style:italic;

    span{
        color: #e26fcf;
    }
    @media (max-width:950px){
      margin-top:50px;
    }
`


class Sidebar extends Component {
    state ={
        links: [
            {
              id: 1,
              name: "Home",
              to: "/dashboard",
            //   className: "side_nav_item",
              iconClassName: "fas fa-home"
            },
            {
              id: 2,
              name: "Transactions",
              to: "/transactions",
            //   className: "side_nav_item",
              iconClassName: "fas fa-exchange-alt"
            },
            {
              id: 3,
              name: "Store",
              to: "/store",
            //   className: "side_nav_item",
              iconClassName: "fas fa-store"
            },
            {
              id :4,
              name: "Cart",
              to: "/cart",
            //   className: "side_nav_item",
              iconClassName: "fab fa-opencart"
            },

            {
              id: 5,
              name: "Help",
              to: "/help",
            //   className: "side_nav_item",
              iconClassName: "fas fa-info"
            },
            {
                id: 6,
                name: "Notifications",
                to: "/notifications",
                // className: "side_nav_item",
                iconClassName: "fas fa-bell"
              }
          ], 
          activeLink: this.props.activeLink,
          itemCount:""
      
    } 

     handleClick = (e,id,to)=>{
        e.preventDefault()
        const sidebarWrapper = document.querySelector(".sidebar-wrap")
        const sidebar =  document.querySelector(".sidebar")
        this.setState({activeLink:id})
        sidebarWrapper.classList.remove("overlay")
        sidebar.classList.remove("show")
        this.props.history.push(`${to}`)
        
        
    }
    closeSidebar=(e)=>{
      const sidebarWrapper = document.querySelector(".sidebar-wrap")
      const sidebar =  document.querySelector(".sidebar")
      if(e.target.classList.contains("sidebar-wrap")){
        sidebarWrapper.classList.remove("overlay")
        sidebar.classList.remove("show")
      }
    }

     componentDidMount(){
       if(localStorage.ennet_cart === undefined){   
         this.setState({itemCount:this.state.itemCount})
       }  
       else{
        this.setState({itemCount: JSON.parse(localStorage?.ennet_cart)?.length})
       } 
      
    }

    render(){
        return(
            <Overlay className = "sidebar-wrap" onClick = {this.closeSidebar}>
                <SideBar className = "sidebar"> 
                    <h4 className = "logo">ENNET</h4>
                    <WelcomeText>
                        Hello! <span>Eniola</span> 
                    </WelcomeText>
                    {
                        this.state.links.map((link)=>(
                            <Link 
                            onClick={(e)=>this.handleClick(e,link.id,link.to)} 
                            to={link.to} 
                            key={link.id} 
                            className = {link.className + (link.id === this.state.activeLink ? " active":"")}>
                            <i className = {link.iconClassName}></i>
                            {link.name === "Cart" && <span id="cart-length">{this.state.itemCount}</span>}
                                {link.name}
                            </Link>
                        ))
                    } 
                </SideBar>
             </Overlay>
        )
    }
    

}
export default withRouter(Sidebar)