import React, { useState } from 'react';
import  SideBar from "../components/Sidebar"
import Header from "../components/Header"
export default ({children})=>{
    return(
        <div>
            <Header/>
            <SideBar/>
            {children}
        </div>
    )
}