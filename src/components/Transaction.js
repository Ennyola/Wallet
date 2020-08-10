import React from 'react'
import {useQuery, gql} from '@apollo/client'

import Header from './Header'
import SideBar from './Sidebar'

const Transactions = (props)=>{

    const {data} = useQuery(query)
    

    return(
        <div className = "transactions">
            <Header/>
            <SideBar/>
            <div className = "">

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