import React, { useState } from 'react';
import { Route, BrowserRouter, } from 'react-router-dom'

import Login from '../components/Login'
import Signup from '../components/Signup'
import Dashboard from '../components/Dashboard'
import Funds from '../components/Funds'
import requireAuth from '../components/requireAuth'
import Transactions from '../components/Transaction'
import Help from '../components/Help'
import Notifications from '../components/Notification'
import Account from '../components/Account';
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