import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import requireAuth from '../components/requireAuth'
import Transactions from '../pages/Transaction'
import Help from '../pages/Help'
import Store from "../pages/Store" 
import PrivateRoute from "./utils/PrivateRoute"
import DashboardLayout from "../layout/dashboardlayout"
import ItemPage from "../pages/ItemPage"
import Cart from "../pages/cart"
import LandingPage from "../pages/Landing"
import {FundsContextProvider} from "../context/funds"
const Routes = ()=>{
    return(
        <BrowserRouter>
          <Switch>
            
            <Route path = "/login" component = {Login}/>
            <Route path = "/signup" component = {Signup}/>
            <Route path = "/" exact={true} component = {LandingPage} />
            <FundsContextProvider>
              <PrivateRoute path = "/dashboard" layout = {DashboardLayout} component = { requireAuth(Dashboard)} activeLink = {1} />   
              <PrivateRoute path = "/help" layout = {DashboardLayout} component = {requireAuth(Help)} activeLink = {5}/>
              <PrivateRoute path = "/store/:id" exact layout = {DashboardLayout} component = {requireAuth(ItemPage)} />
              <PrivateRoute path = "/store" exact layout = {DashboardLayout} component = {requireAuth(Store)} activeLink = {2}/>
              <PrivateRoute path= "/transactions" layout = {DashboardLayout}  component = {requireAuth(Transactions)} activeLink = {3}/>
              <PrivateRoute path = "/cart" layout = {DashboardLayout} component = {requireAuth(Cart)} activeLink = {4}/>
            </FundsContextProvider>
          </Switch>
      </BrowserRouter>
    )
}

export default Routes