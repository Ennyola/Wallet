import React from 'react'
import {useQuery, gql} from '@apollo/client'

import Header from './Header'
import SideBar from './Sidebar'

const Funds =(props)=>{

    const {data, error, loading} = useQuery(query)



    return(
        <div className = "funds">
            <Header/>
            <SideBar/>
            <div className = "body">
              <h4>Funds</h4>
              <div className = "my-funds">
              
              </div>
            </div>
        </div>
    )
}

const query = gql`
query getFunds{
    funds{
      id
      moneyAdded
      currentBalance
      previousBalance
      moneyRemoved
    }
  }`

export default Funds