import React from 'react'

const RequireAuth = (WrappedComponent) => {
    const RequireAuth = (props) => {
        const token = localStorage.getItem('token')
            if(!token){
                props.history.push('/')
            }
        return(<WrappedComponent {...props }/>)
    }
    return RequireAuth
}

export default RequireAuth