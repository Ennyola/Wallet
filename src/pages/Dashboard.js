import React, {useState,useEffect, createRef} from 'react'
import { MDBInput } from 'mdbreact';
import { PaystackButton } from 'react-paystack'
import {useMutation, gql, useQuery} from '@apollo/client'
import date from 'date-and-time'

import FundWalletMutation from '../mutations/fundWallet'
import getTransactionQuery from '../queries/getTransaction'
import getFundsQuery from '../queries/getFunds'

const Dashboard =()=>{
    let  [amount, setAmount] = useState("")

    

    let overlayRef = createRef()
    
    const {data : fundsQuery, loading: fundsLoading} = useQuery(getFundsQuery)

    const { data : transactionQuery, loading:transLoading} = useQuery(getTransactionQuery)

    const [fundWallet, {data, loading}] = useMutation(FundWalletMutation)
    const exitForm = ()=>{
        overlayRef.current.style.display = "none"
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
     
    const currentBalance = fundsQuery?.funds?.currentBalance
    const moneyAdded = fundsQuery?.funds?.moneyAdded
    const moneyRemoved = fundsQuery?.funds?.moneyRemoved
    const previousBalance = fundsQuery?.funds?.previousBalance

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
                           <div >Current Balance</div>  
                            <span> ₦ {currentBalance.toFixed(2)}</span>
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
                            <p>Previous Balance</p>
                            <span>₦{previousBalance.toFixed(2)}</span>  
                        </div>
                        <div className= "summary">
                            <p>Money Funded</p>
                            <span>+₦{moneyAdded.toFixed(2)}</span> 
                        </div>
                        <div className= "summary"> 
                            <p>Money Deducted</p>
                            <span className = "text-danger">-{moneyRemoved.toFixed(2)}</span>
                        </div>
                        <div className= "summary">
                            <p>Total Money Added</p>
                            <span>₦{getTotalMoneyAdded()}</span> 
                        </div>         
                    </div>
                    
                </div>  
                   
               
                
             
                            
            </div>
        )
}

export default Dashboard