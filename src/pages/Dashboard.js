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
import notify from "../utils/toast"



const Dashboard =()=>{
    document.title="Home"
    const {
        currentBalance,
        moneyAdded,
        moneyRemoved,
        previousBalance,
        transactionQuery,
        fundsLoading,
        transLoading,
        fundsError
        } = useContext(FundsContext)

    const [fundWallet, {loading}] = useMutation(FUND_WALLET)
    
    const getDate=() =>{
        const dateObj = new Date()
        const date = dateObj.toLocaleDateString()
        const time = dateObj.toTimeString()
        const dateAndTime = `${date},${time}`
        return dateAndTime
    }

    const addToWallet=(amount)=>{
        const  paystackForm= document.querySelector(".fundwallet-form")
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
        .then(()=>{
            notify("Wallet Funded Successfully", "success")
            paystackForm.classList.add("close")
        })
        .catch(()=>{
            paystackForm.classList.add("close")
            notify("An Error Occured. Please Reload", "error")
        })
    }

    const getTotalMoney = (type)=>{
        // if (loading){
        //     return <div>Loading...</div>
        // }

        if(transactionQuery){
            const transactions = transactionQuery?.transactions
            let totalMoney
            if(transactions.length!==0 && type === "saved"){
                const totalMoneyAdded =  transactions.map(({moneySaving})=> moneySaving)
                totalMoney = totalMoneyAdded.reduce((a,b)=> a+b).toFixed(2)
                return <NumberFormat value={totalMoney} displayType={'text'} thousandSeparator={true} prefix ={"₦"} />
            }
            else if(transactions.length!==0 && type === "spent"){
                const totalMoneySpent =  transactions.map(({moneySpending})=> moneySpending)
                totalMoney = totalMoneySpent.reduce((a,b)=> a+b).toFixed(2)
                return <NumberFormat value={totalMoney} displayType={'text'} thousandSeparator={true} prefix ={"₦"} />
            }
            else{
                return <NumberFormat value={0.00.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix ={"₦"} />
            }
        }
        else if(transLoading  ){
            return <div>Loading...</div>
        }
        else{
            return <div>Error...</div>
        }
    }

    const returnValueorError = (value)=>{
        if(fundsLoading){
            return <div>Loading...</div>
        }
        else if(fundsError){
            return <div>Error</div>
        }
        else{
            return  <NumberFormat value={value?.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  />
        }

    }




        return(
            <>
                <PaystackForm loading={loading} fundWallet = {addToWallet}/>
                <Wrapper className = "dashboard-wrapper"> 
                    

                    <div>
                        <h4 id = "overview">Account Overview</h4>
                        <div id = "fund-div">
                            <span id = "current-balance">
                                <div>Current Balance</div>  
                                {returnValueorError(currentBalance)}
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
                        getTotalMoney={getTotalMoney}
                        returnValueorError={returnValueorError}
                        />
                        
                    </div>     
                                
                </Wrapper>
            </>
        )
}

export default Dashboard