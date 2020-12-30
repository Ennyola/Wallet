import React, {Component} from 'react'
import {Wrapper} from "../components/styles"


class Help extends Component{
    render(){
        return(
            <Wrapper className = "help">
                <div className = "body">
                    <h4 className = "help-text">Help</h4>
                    
                    <ul>
                        <li>
                            Thank you for using Ennet. As you might well have seen, this is an E-wallet designed to automate the process of saving.<br/> 

                           <span className = "highlight-text"> Please Take note, This is just a test E-wallet, built for Fun. no real Transaction takes place and no money is truly added or deducted. </span><br/>
                             It just seamlessly automates a real E-wallet
                        </li>
                        <li> 
                            To make a add money to your wallet, click on the Fund Wallet button on the homepage.
                        </li>
                        <li>
                           The Store provides a variety of Items that can be purchased at a given price. Irrespective of the Item, no real purchase is being made. The Store just provides an avenue for the money added to be spent.
                        </li>
                        
                        <li>
                            To check Transactions made, check the Transactions page.
                        </li>
                    </ul>

                </div>
            </Wrapper>
        )
    }
}

export default Help