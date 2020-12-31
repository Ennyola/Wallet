import React, {createContext} from "react";
import {useQuery} from '@apollo/client'

import getTransactionQuery from '../queries/getTransaction'
import getFundsQuery from '../queries/getFunds'


export const FundsContext = createContext({})

export const FundsContextProvider = ({children})=>{
    const {data : fundsQuery, loading: fundsLoading} = useQuery(getFundsQuery)
    const {data : transactionQuery, loading:transLoading, error:transError} = useQuery(getTransactionQuery)
    return(
        <FundsContext.Provider
        value = {{
            currentBalance :fundsQuery?.funds?.currentBalance,
            moneyAdded:fundsQuery?.funds?.moneyAdded,
            moneyRemoved:fundsQuery?.funds?.moneyRemoved,
            previousBalance:fundsQuery?.funds?.previousBalance,
            transactionQuery,
            fundsLoading,
            transLoading,
            transError
        }}
        >
            {children}
        </FundsContext.Provider>
    )
}