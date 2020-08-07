import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends Component {
    render(){
        return(
            <div className = "sidebar">
                <ul >
                    <Link to ="/dashboard"> <li><i class="fas fa-home"></i>Home</li></Link>
                    <Link to = "/Transactions">    <li><i class="fas fa-exchange-alt"></i>Transactions</li></Link>
                    <Link>  <li><i class="fas fa-credit-card"></i>Funds</li> </Link> 
                    <Link>  <li><i class="fas fa-info"></i>Help</li></Link>
                    <Link>   <li><i class="fas fa-bell"></i>Notifications</li> </Link>
                </ul>
            </div>
        )
    }
    

}
export default Sidebar