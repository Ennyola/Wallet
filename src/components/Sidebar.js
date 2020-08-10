import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends Component {
    render(){
       const onClick=(e)=>{
            e.preventDefault()
            console.log('hr')
            localStorage.clear()
            window.location.reload()
        }
        return(
            <div className = "sidebar">
                <ul >
                    <Link to ="/dashboard"> <li><i className="fas fa-home"></i>Home</li></Link>
                    <Link to = "/transactions">    <li><i className="fas fa-exchange-alt"></i>Transactions</li></Link>
                    <Link to = "/funds">  <li><i className="fas fa-credit-card"></i>Funds</li> </Link> 
                    <Link to = "/help">  <li><i className="fas fa-info"></i>Help</li></Link>
                    <Link to = "/notifications">   <li><i className="fas fa-bell"></i>Notifications</li> </Link>
                </ul>
                <button onClick = {onClick}>Logout</button>
            </div>
        )
    }
    

}
export default Sidebar