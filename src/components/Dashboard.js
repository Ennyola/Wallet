import React, {Component } from 'react'

import Header from './Header'
import SideBar from './Sidebar'

class Dashboard extends Component{
    render(){
        return(
            <div className = "dashboard">
                <Header/>
                <div>
                    <SideBar/>
                </div>
                <div className = "body">
                    <h3 id = "overview">Account Overview</h3>
                    <div id = "fund-div">
                        <button className = "btn btn-primary" id ="fund-wallet">
                            Fund Wallet
                        </button>
                    </div>

                    <div className = "account-summary">
                        <div className= "summary">
                            <p>Current Balance</p>
                            <p>N0.00</p>  
                        </div>
                        <div className= "summary">
                            <p>Money Funded</p>
                            <p>N0.00</p>  
                        </div>
                        <div className= "summary"> 
                            <p>Money Deducted</p>
                            <p>N0.00</p>  
                        </div>
                        <div className= "summary">
                            <p>Available Balance</p>
                            <p>N0.00</p>  
                        </div>
                    </div>
                    
                </div>  
                   
               
                
             

            </div>
        )
    }
}
export default Dashboard