import React, { useState } from 'react';
import { Route, BrowserRouter, } from 'react-router-dom'

export default ({
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