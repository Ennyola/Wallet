import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components"



class Sidebar extends Component {
    render(){
       
        return(
            <div className = "sidebar">  
                    <Link to ="/dashboard"> <i className="fas fa-home"></i>Home</Link>
                    <Link to = "/transactions">    <i className="fas fa-exchange-alt"></i>Transactions</Link>
                    <Link to = "/help">  <i className="fas fa-info"></i>Help</Link>
                    <Link to = "/notifications">   <i className="fas fa-bell"></i>Notifications </Link>     
            </div>
        )
    }
    

}
export default Sidebar