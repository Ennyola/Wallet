import React, {createContext} from "react";
import getUser from "../queries/getUser"
import {useQuery} from '@apollo/client';



export const AuthContext = createContext({})

export const AuthContextProvider = ({children})=>{

    const {data, loading, refetch} =  useQuery(getUser)
    return(
        <AuthContext.Provider
        value = {{
            user:data?.user,
            loading,
            refetch
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}