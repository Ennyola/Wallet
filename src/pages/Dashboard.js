import React, {useState,useEffect, createRef, useContext} from 'react'
import { MDBInput } from 'mdbreact';
import { PaystackButton } from 'react-paystack'
import {useMutation, gql, useQuery} from '@apollo/client'
import NumberFormat from 'react-number-format';

import {FUND_WALLET} from '../mutations/MakeTransaction'
import getTransactionQuery from '../queries/getTransaction'
import getFundsQuery from '../queries/getFunds'
import {FundsContext} from "../context/funds"

const Dashboard =()=>{
    let  [amount, setAmount] = useState("")
    const {currentBalance,fundsLoading, moneyAdded,moneyRemoved,previousBalance,transactionQuery,transLoading} = useContext(FundsContext)

    const [fundWallet] = useMutation(FUND_WALLET)
    
    const exitForm = (e)=>{
        const overlay = document.querySelector(".overlay")
        overlay.style.display ="none"
        setAmount("")
    }

    const getDate=() =>{
        const dateObj = new Date()
        const date = dateObj.toLocaleDateString()
        const time = dateObj.toTimeString()
        const dateAndTime = `${date},${time}`
        return dateAndTime
    }
    if (fundsLoading && transLoading) {
        return( 
        <div>Loading...</div>
        )
    }

    const getTotalMoneyAdded = ()=>{
        if(transactionQuery){
            const {transactions} =transactionQuery
            const totalMoneyAdded =  transactions.map(({moneySaving})=> moneySaving)
            return totalMoneyAdded.reduce((a,b)=> a+b).toFixed(2)
        }
    }

        return(
            <div className = "dashboard"> 
                {/* paystack form's markup */}
                <div className = "overlay">
                    <div className = "fundwallet-form">
                        <div className = "form">
                                <i className="fas fa-times" onClick = {exitForm}></i>
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
                                    const overlay = document.querySelector(".overlay")
                                    overlay.style.display ="none"
                                    setAmount("")
                                    fundWallet({
                                        variables:{amount, timeOfTransaction: getDate()},
                                        refetchQueries:[
                                            {
                                            query: getTransactionQuery,
                                            },
                                            {
                                            query: getFundsQuery
                                            }
                                        ]    
                                    })
                                    alert("Transaction Succesful")
                                }}
                                onClose = {()=>{
                                    const overlay = document.querySelector(".overlay")
                                    overlay.style.display ="none"
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
                           <div >Current Balance</div>  
                            <NumberFormat value={currentBalance?.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  />
                        </span>

                        <button 
                        onClick ={(e)=>{
                            const overlay = document.querySelector(".overlay")
                            overlay.style.display ="block"
                        }}  
                        className = "btn btn-primary" 
                        id ="fund-wallet"
                        >
                            Fund Wallet
                        </button>
                    </div>

                
                    <div className = "account-summary">
                        <div className= "summary">
                            <p>Previous Balance</p>
                            <NumberFormat value={previousBalance?.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  />
                     
                        </div>
                        <div className= "summary">
                            <p>Money Funded</p>
                            <NumberFormat value={moneyAdded?.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  />
                     
                        </div>
                        <div className= "summary"> 
                            <p>Money Deducted</p>
                            <NumberFormat className = "text-danger" value={moneyRemoved?.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  />
                     
                        </div>
                        <div className= "summary">
                            <p>Total Money Added</p>
                            <NumberFormat value={getTotalMoneyAdded()} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  />
                        </div>         
                    </div>
                    
                </div>     
                            
            </div>
        )
}

export default Dashboard