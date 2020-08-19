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
            const fulldateTimeString = dateTimeString.toString()
             console.log(dateTimeString.toUTCString())
             console.log(dateTimeString.toString())
            const utcDay = dateTimeString.toUTCString().slice(0, 16)
            const utcTime = dateTimeString.toUTCString().slice(17,25)         
                return(
                  <div className = "transaction shadow-lg" key = {id}> 
                    <div className="inner">
                      <div class="flip-card-front">    
                        <div className = "left">
                          <span className = "moneyAdded-text">Money Added </span> 
                          <span className = "utcDay">
                            {utcDay}
                          </span> 
                        </div>
                        
                        <div className = "right">
                          <span className = "transaction-moneyAdded">₦{moneySaving.toFixed(2)} </span> 
                          <span className = "utcTime">{utcTime}</span>
                        </div>           
                      </div> 
                      <div className="flip-card-back">
                          <p>The transaction was made on <br/> {fulldateTimeString}</p>
                      </div>
                    </div>      
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