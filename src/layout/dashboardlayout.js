import React from 'react';
import  SideBar from "../components/Sidebar"
import Header from "../components/Header"
import styled from "styled-components"

const Wrapper = styled.div`
`
export default (props)=>{
    return(
        <Wrapper>
            <Header/>
            <SideBar activeLink = {props.activeLink}/>
            {props.children}
        </Wrapper>
    )
}