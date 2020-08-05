import React, { Component } from 'react'

class Sidebar extends Component {
    render(){
        return(
            <div className = "sidebar">
                <ul >
                    <li><i class="fas fa-home"></i>Home</li>
                    <li><i class="fas fa-exchange-alt"></i>Transaction</li>
                    <li><i class="fas fa-credit-card"></i>Funds</li>
                    <li><i class="fas fa-info"></i>Help</li>
                    <li><i class="fas fa-bell"></i>Notifications</li>
                </ul>
            </div>
        )
    }
    

}
export default Sidebar