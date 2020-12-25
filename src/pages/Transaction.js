import React from 'react'
import {useQuery} from '@apollo/client'
import NumberFormat from 'react-number-format';
import date from 'date-and-time'
import {Wrapper} from "../components/styles"


import getTransactionQuery from '../queries/getTransaction'




const Transactions = (props)=>{
    document.title = "Transactions"
    const {data} = useQuery(getTransactionQuery)
    
    
    const displayTransactions = ()=>{
          if (data){
            const {transactions} = data
            return transactions.map(({id,moneySaving, moneySpending, timeOfTransaction})=>{
              const [transactionDate, transactionTime] = timeOfTransaction.split('T') 
              const time = transactionTime.slice(0,15).split('+')[0]
              const utc = transactionTime.slice(15)
              const dateTimeString = date.parse(`${transactionDate} ${time}`, 'YYYY-MM-DD HH:mm:ss')
              const fulldateTimeString = dateTimeString.toString()
              const utcDay = dateTimeString.toUTCString().slice(0, 16)
              const localeTimeString = dateTimeString.toLocaleTimeString()        
                  return(
                    <div className = "transaction shadow-lg" key = {id}> 
                      <div className="inner">
                        <div className="flip-card-front">    
                          <div className = "left">
                            <span className = "moneyAdded-text">{moneySaving?"Money Added": "Money Spent"} </span> 
                            <span className = "utcDay">
                              {utcDay}
                            </span> 
                          </div>
                          
                          <div className = "right">
                            <NumberFormat className = "transaction-moneyAdded" value={moneySaving? moneySaving.toFixed(2) : moneySpending.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'₦'}  />  
                            <span className = "localeTimeString">{localeTimeString}</span>
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
        <Wrapper className = "transactions">
            <div>
              <h4>Transactions</h4>
                <div className = "transaction-list">
                  {displayTransactions()}
                </div>
            </div>
        </Wrapper>
    )
}


export default Transactions