import React, {useState,useEffect, createRef} from 'react'
import { MDBInput } from 'mdbreact';
import { PaystackButton } from 'react-paystack'
import {useMutation, gql} from '@apollo/client'

import Header from './Header'
import SideBar from './Sidebar'
import FundWalletMutation from '../mutations/fundWallet'
import getTransactionQuery from '../queries/getTransaction'
import getFundsQuery from '../queries/getFunds'

const Dashboard =()=>{

      let  [amount, setAmount] = useState("")
      let overlayRef = createRef()
      const exitForm = ()=>{
        overlayRef.current.style.display = "none"
        setAmount("")
        }

        const [fundWallet, {data, loading}] = useMutation(FundWalletMutation)
        

        

        return(
            <div className = "dashboard"> 
                <Header/>
                <SideBar/>


                <div ref = {overlayRef} className = "overlay">
                    <div className = "fundwallet-form">
                   
                     <div className = "form">
                        <i class="fas fa-times" onClick = {exitForm}></i>
                        <MDBInput 
                        onChange = {e=>{setAmount(e.target.value)}}
                        value = {amount}
                        hint = {"Amount"}
                        type = "number"/>


                        <PaystackButton
                        className = "paystack-button"
                        email = {"medunoyeeni@gmail.com"} 
                        amount = {amount*100}
                        publicKey = {"pk_test_78d9cf26ee96f7b50fddb3f5353344f4e44f9226"} 
                        text = {"Fund"}
                        onSuccess = {()=> {
                            overlayRef.current.style.display = "none"
                            setAmount("")
                            fundWallet({
                                variables:{amount},
                                refetchQueries:[{
                                    query: getTransactionQuery,
                                },{
                                    query: getFundsQuery
                                }
                                ]
                            
                            })
                            alert("Transaction Succesful")
                        }}
                        onClose = {()=>{
                            overlayRef.current.style.display = "none"
                            setAmount("")
                            alert("Don't Go")}}
                        />
                        </div>
                       
                    </div>
                </div>
                

                <div className = "body">
                

                
                    <h4 id = "overview">Account Overview</h4>
                    <div id = "fund-div">
                        <span id = "current-balance">
                            Current Balance <br/>
                            ₦0.00
                        </span>

                        <button 
                        onClick = {e=>{
                            
                            overlayRef.current.style.display = "block"
                            }}  
                        className = "btn btn-primary" id ="fund-wallet">
                            Fund Wallet
                        </button>
                    </div>

                    

                    <div className = "account-summary">
                        <div className= "summary">
                            <p>Available Balance</p>
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
                            <p>Total Money Added</p>
                            <p>N0.00</p>  
                        </div>
                        
                    </div>
                    
                </div>  
                   
               
                
             
                            
            </div>
        )
}

export default Dashboard