import React,{useContext} from 'react'
import NumberFormat from 'react-number-format';
import date from 'date-and-time'
import {Wrapper} from "../components/styles"
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/core";

import {FundsContext} from "../context/funds"

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top:50px;

`

const Transactions = ()=>{
    document.title = "Transactions"
    const {transactionQuery,transLoading} = useContext(FundsContext)
    
    const displayTransactions = ()=>{
          if (transactionQuery){
            const {transactions} = transactionQuery
            return transactions.length !== 0 ? 
            (transactions?.map(({id,moneySaving, moneySpending, timeOfTransaction})=>{
              const [transactionDate, transactionTime] = timeOfTransaction.split('T') 
              const time = transactionTime.slice(0,15).split('+')[0]
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
            )):(
              <div className = "no-transaction">
                No Available Transaction
              </div>
            ) 
          }
          else if(transLoading){
            return(
                  <div>
                    <MoonLoader
                        css ={override}
                        size={50}
                        color={"#A1168A"}
                    />
                  </div>
          )}
          else{
            return <div className = "transactions-error">Error, Please Reload</div>
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