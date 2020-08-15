import React from 'react'
import {useQuery} from '@apollo/client'

import Header from './Header'
import SideBar from './Sidebar'

import getFundsQuery from '../queries/getFunds'

const Funds =(props)=>{

    const {data, error, loading} = useQuery(getFundsQuery)
    if (loading){
        return(
            <div>Loading...</div>
        )
    }
    
    const {currentBalance, moneyAdded, moneyRemoved, previousBalance} = data.funds




    return(
        <div className = "funds">
            <Header/>
            <SideBar/>
            <div className = "body">
              <h4>Funds</h4>
              <div className = "my-funds">
                <div id = "c-balance">
                ₦{currentBalance}
                </div>
                <div id = "m-added">
                    +₦{moneyAdded}
                </div>
                <div id = "m-Removed">
                    -₦{moneyRemoved}
                </div>
                <div id = "p-Balance">
                ₦{previousBalance}
                </div>
              
              </div>
            </div>
        </div>
    )
}


export default Funds