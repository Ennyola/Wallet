import React from 'react'
import {useQuery} from '@apollo/client'

import Header from './Header'
import SideBar from './Sidebar'

import getFundsQuery from '../queries/getFunds'

const Funds =(props)=>{

    const {data, error, loading} = useQuery(getFundsQuery)
    


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


export default Funds