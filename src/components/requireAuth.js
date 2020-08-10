import React, {useEffect} from 'react'
import { useQuery } from '@apollo/client'

import getUserQuery from '../queries/getUser'

export default (WrappedComponent) => {
    const RequireAuth = (props) => {
        
        const token = localStorage.getItem('token')
            if(!token){
              
                props.history.push('/login')
            }
        return ( <
            WrappedComponent {...props }
            />

        )

    }
    return RequireAuth
}