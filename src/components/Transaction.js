import React from 'react'
import {useQuery, gql} from '@apollo/client'

import Header from './Header'
import SideBar from './Sidebar'

const Transactions = (props)=>{

    const {data, loading, error} = useQuery(query)
    
    
    const displayTransactions = ()=>{
          if (data){
            const {transactions} = data
            return transactions.map(({id,moneySaving, moneySpending, timeOfTransaction})=>{
                return(
                  <div className = "transaction" key = {id}>
                   Money Added - {moneySaving} <br/>
                   Money Deducted - {moneySpending} <br/>
                   Time of Transaction - {timeOfTransaction} <br/>
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

const query = gql`
query getTransactions{
    transactions{
      id
      moneySaving
      moneySpending
        timeOfTransaction
    }
  }`

export default Transactions