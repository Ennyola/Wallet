import React, { useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import Funds from '../pages/Funds'
import requireAuth from '../components/requireAuth'
import Transactions from '../pages/Transaction'
import Help from '../pages/Help'
import Notifications from '../pages/Notification'
import Account from '../pages/Account';
import Store from "../pages/Store" 
import PrivateRoute from "./utils/PrivateRoute"
import DashboardLayout from "../layout/dashboardlayout"
import ItemPage from "../pages/ItemPage"

export default ()=>{
    return(
        <BrowserRouter>
          <Switch>
            <Route path = "/login" component = {Login}/>
            <Route path = "/signup" component = {Signup}/>
            <PrivateRoute path = "/dashboard" layout = {DashboardLayout} component = { requireAuth(Dashboard)} />   
            <PrivateRoute path = "/funds" layout = {DashboardLayout} component = {requireAuth(Funds)}/>
            <PrivateRoute path = "/help" layout = {DashboardLayout} component = {requireAuth(Help)}/>
            <PrivateRoute path = "/notifications" layout = {DashboardLayout} component = {requireAuth(Notifications)}/>
            <PrivateRoute path = "/store/:id" layout = {DashboardLayout} component = {requireAuth(ItemPage)} />
            <PrivateRoute path = "/store" layout = {DashboardLayout} component = {requireAuth(Store)}/>
            <PrivateRoute path  ="/account" layout = {DashboardLayout} component = {requireAuth(Account)}/>
            <PrivateRoute path= "/transactions" layout = {DashboardLayout}  component = {requireAuth(Transactions)}/>
            <PrivateRoute path = "/store/:id" layout = {DashboardLayout} component = {ItemPage} />
          </Switch>
      </BrowserRouter>
    )
}