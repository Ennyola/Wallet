import React, { useState } from 'react';
import { Route, BrowserRouter, } from 'react-router-dom'

import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import Funds from '../pages/Funds'
import requireAuth from '../components/requireAuth'
import Transactions from '../pages/Transaction'
import Help from '../pages/Help'
import Notifications from '../pages/Notification'
import Account from '../pages/Account';
import PrivateRoute from "./utils/PrivateRoute"
import DashboardLayout from "../layout/dashboardlayout"

export default ()=>{
    return(
        <BrowserRouter>
          <Route path = "/login" component = {Login}/>
          <Route path = "/signup" component = {Signup}/>
          <PrivateRoute path = "/dashboard" layout = {DashboardLayout} component = { requireAuth(Dashboard)} />   
          <PrivateRoute path = "/funds" layout = {DashboardLayout} component = {requireAuth(Funds)}/>
          <PrivateRoute path = "/help" layout = {DashboardLayout} component = {requireAuth(Help)}/>
          <PrivateRoute path = "/notifications" layout = {DashboardLayout} component = {requireAuth(Notifications)}/>
          <PrivateRoute path  ="/account" layout = {DashboardLayout} component = {requireAuth(Account)}/>
          <PrivateRoute path= "/transactions" layout = {DashboardLayout}  component = {requireAuth(Transactions)}/>
      </BrowserRouter>
    )
}