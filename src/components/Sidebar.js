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
                
                    <Link to ="/dashboard"> <i className="fas fa-home"></i>Home</Link>
                    <Link to = "/transactions">    <i className="fas fa-exchange-alt"></i>Transactions</Link>
                    <Link to = "/help">  <i className="fas fa-info"></i>Help</Link>
                    <Link to = "/notifications">   <i className="fas fa-bell"></i>Notifications </Link>
                                      {/* <Link to = "/funds">  <i className="fas fa-credit-card"></i>Funds </Link>  */}
                <button onClick = {onClick}>Logout</button>
            </div>
        )
    }
    

}
export default Sidebar