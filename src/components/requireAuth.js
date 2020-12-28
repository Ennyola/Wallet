import React from 'react'

export default (WrappedComponent) => {
    const RequireAuth = (props) => {
        const token = localStorage.getItem('token')
            if(!token){
                props.history.push('/')
            }
        return(<WrappedComponent {...props }/>)
    }
    return RequireAuth
}