import React from "react";
import styled from "styled-components"


const Wrapper = styled.div`
    margin-top: 90px;
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(250px,1fr));
    grid-column-gap:30px;
    justify-items:center;
    padding:10px;

    .summary {
        padding: 20px;
        /* border-radius: 10px; */
        width: 250px;
        height: 150px;
        box-shadow: 0 .2rem .7rem rgba(0, 0, 0, .15);
        margin: 20px;
        font-weight: 400;
        border-radius: 10px;
        transition: .7s all ease;
        .text-success{
            color: #2d832d !important;
        }
        
        p{
            color:#A1168A;
            font-weight:400;
        }
        :hover{
            background-color: #884d7e;
            span{
                transition: .7s all ease;
                color: white !important;
            }
            p{
                color:white;
            }
        }
    }
    @media (max-width:430px) {
        margin-top:130px;
    }


`



export const AccountSummary =(props)=>{
    return(
        <Wrapper>
            <div className= "summary">
                <p>Previous Balance</p>
                {props?.returnValueorError(props?.previousBalance)}
            </div>
            <div className= "summary">
                <p>Money Funded</p>
               <span className= "text-success"> {props?.returnValueorError(props?.moneyAdded)}</span>
            </div>
            <div className= "summary"> 
                <p>Money Spent</p>
                <span className= "text-danger"> {props?.returnValueorError(props?.moneyRemoved)} </span>
            </div>
            <div className= "summary">
                <p>Total Money Added</p>
                {props?.getTotalMoney("saved")}
            </div>    
            <div className= "summary">
                <p>Total Money Spent</p>
                {props?.getTotalMoney("spent")}
             </div>       
        </Wrapper>
    )

}