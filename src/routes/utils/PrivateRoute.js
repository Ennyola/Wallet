import React  from 'react';
import { Route } from 'react-router-dom'

const PrivateRoute = ({
    component: Component,
    layout: Layout,
    activeLink,
    ...rest
})=>{
    return(
        
        <Route
            {...rest}
            render = {((props)=>{
                return(
                    <Layout activeLink = {activeLink}>
                        <Component {...props}/>
                    </Layout>
                )
            })}
        />
        
    )
}

export default PrivateRoute