import React from 'react'
import {useQuery, gql} from '@apollo/client'

import Header from './Header'
import SideBar from './Sidebar'
import getTransactionQuery from '../queries/getTransaction'
import date from 'date-and-time'



const Transactions = (props)=>{

    const {data, loading, error} = useQuery(getTransactionQuery)
    
    
    const displayTransactions = ()=>{
          if (data){
            const {transactions} = data
            return transactions.map(({id,moneySaving, moneySpending, timeOfTransaction})=>{
              const [transactionDate, transactionTime] = timeOfTransaction.split('T')
              
             const time = transactionTime.slice(0,15).split('.')[0]
             const utc = transactionTime.slice(15)    
             const dateTimeString = date.parse(`${transactionDate} ${time} GMT${utc.replace(':','')}`, 'YYYY-MM-DD HH:mm:ss [GMT]Z')
             console.log(dateTimeString)
   
              
                return(
                  <div className = "transaction shadow-lg" key = {id}>
                    <div className = "left">
                      <span>Money Added </span> <br/>
                      <br/><br/>
                      <span> {`${dateTimeString.getMonth()} / ${dateTimeString.getFullYear().toString().slice(2)}`}</span>
                    </div>
                    
                    <div className = "right">
                      <span>₦{moneySaving.toFixed(2)} </span> <br/>
                       {/* <span>{dateTimeString.toUTCString()} </span> <br/>  */}
                    </div>
                    
                    {/* Money Deducted - {moneySpending.toFixed(2)} <br/> */}
                    
                  </div>
                )         

              }
            ) 
          }
       }
    

    return(
        <div className = "transactions">
            <Header/>
            <SideBar/>
            <div className = "body">
              <h4>Transactions</h4>

              <div className = "transaction-list">
                {displayTransactions()}
              </div>
              
            </div>
        </div>
    )
}


export default Transactions