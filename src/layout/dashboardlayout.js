import React from 'react';
import  SideBar from "../components/Sidebar"
import Header from "../components/Header"
export default (props)=>{
    return(
        <div>
            <Header/>
            <SideBar activeLink = {props.activeLink}/>
            {props.children}
        </div>
    )
}