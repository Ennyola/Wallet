import React, {useContext} from 'react'
import {useMutation} from '@apollo/client'
import NumberFormat from 'react-number-format';

import {FUND_WALLET} from '../mutations/MakeTransaction'
import getTransactionQuery from '../queries/getTransaction'
import getFundsQuery from '../queries/getFunds'
import {FundsContext} from "../context/funds"
import {PaystackForm} from "../components/PaystackForm"
import {AccountSummary} from "../components/AccountSummary"
import {Wrapper} from "../components/styles"


const Dashboard =()=>{
    document.title="Home"
    const {currentBalance,fundsLoading, moneyAdded,moneyRemoved,previousBalance,transactionQuery,transLoading} = useContext(FundsContext)

    const [fundWallet] = useMutation(FUND_WALLET)
 
    const getDate=() =>{
        const dateObj = new Date()
        const date = dateObj.toLocaleDateString()
        const time = dateObj.toTimeString()
        const dateAndTime = `${date},${time}`
        return dateAndTime
    }

    const addToWallet=(amount)=>{
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
    }

    
    if (fundsLoading && transLoading) {
        return( 
        <div>Loading...</div>
        )
    }

    const getTotalMoneyAdded = ()=>{
        if(transactionQuery){
            const transactions = transactionQuery?.transactions
            let totalMoney 
            if(transactions.length!==0){
                const totalMoneyAdded =  transactions.map(({moneySaving})=> moneySaving)
                totalMoney = totalMoneyAdded.reduce((a,b)=> a+b).toFixed(2)
            }else{
                totalMoney = 0.00.toFixed(2)
            }
            return totalMoney
        }
    }
       
        return(
            <>
                <PaystackForm fundWallet = {addToWallet}/>
                <Wrapper className = "dashboard-wrapper"> 
                    

                    <div>
                        <h4 id = "overview">Account Overview</h4>
                        <div id = "fund-div">
                            <span id = "current-balance">
                                <div>Current Balance</div>  
                                <NumberFormat value={currentBalance?.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  />
                            </span>

                            <button 
                            onClick ={(e)=>{
                                const paystackForm = document.querySelector(".fundwallet-form")
                                paystackForm.classList.remove("close")
                                
                            }}  
                            className = "btn btn-primary" 
                            id ="fund-wallet"
                            >
                                Fund Wallet
                            </button>
                        </div>

                        <AccountSummary 
                        previousBalance={previousBalance}
                        moneyAdded={moneyAdded}
                        moneyRemoved={moneyRemoved}
                        getTotalMoneyAdded={getTotalMoneyAdded}
                        />
                        
                    </div>     
                                
                </Wrapper>
            </>
        )
}

export default Dashboard