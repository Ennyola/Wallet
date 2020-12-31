import React from 'react';
import  SideBar from "../components/Sidebar"
import Header from "../components/Header"
import styled from "styled-components"

const Wrapper = styled.div`
`
 const DashboardLayout = (props)=>{
    return(
        <Wrapper>
            <Header/>
            <SideBar activeLink = {props.activeLink}/>
            {props.children}
        </Wrapper>
    )
}
export default DashboardLayout