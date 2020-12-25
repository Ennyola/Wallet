import React, {createContext} from "react";
import getUser from "../queries/getUser"
import {useQuery} from '@apollo/client';



export const AuthContext = createContext({})

export const AuthContextProvider = ({children})=>{

    const {data, refetch} =  useQuery(getUser)
    return(
        <AuthContext.Provider
        value = {{
            user:data?.user,
            refetch
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}