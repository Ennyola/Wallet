import React, {Component} from 'react'

import Header from './Header'
import Sidebar from './Sidebar'

class Help extends Component{
    render(){
        return(
            <div className = "help">
                <Header/>
                <Sidebar/>
                <div className = "body">
                    <h4 className = "help-text">Help</h4>
                    <ul>
                        <li>
                            Thank you for using Ennet. As you might as well have seen, this is an E-wallet designed to automate the process of saving.<br/> 

                           <strong> Please Take note, This is just a test E-wallet, built for Fun. no real Transaction takes place and no money is truly added or deducted. </strong><br/>
                             It just seamlessly automates a real E-wallet
                        </li>
                        <li>
                            To avoid account deactivation, please verify your account within the next 2hrs. Go to Accounts settings to verify Account
                        </li>
                        <li> 
                            To make a Transaction(fund wallet or spend cash), click on the Fund Transactions button on the homepage
                        </li>
                        <li>
                            To check Transactions made, check the Transactions page
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}

export default Help