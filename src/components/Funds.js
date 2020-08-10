import React from 'react'
import {useQuery, gql} from '@apollo/client'

import Header from './Header'
import SideBar from './Sidebar'

const Funds =(props)=>{


    return(
        <div className = "funds">
            <Header/>
            <SideBar/>
        </div>
    )
}

const query = gql

export default Funds