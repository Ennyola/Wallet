import React, { useState } from 'react';
import { Route, BrowserRouter, } from 'react-router-dom'

export default ({
    component: Component,
    layout: Layout,
    ...rest
})=>{
    return(
        
        <Route
            {...rest}
            render = {((props)=>{
                return(
                    <Layout>
                        <Component {...props}/>
                    </Layout>
                )
            })}
        />
        
    )
}